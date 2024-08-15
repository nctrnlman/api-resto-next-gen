const orderRepository = require("../repositories/orderRepository");

const parsePrice = (priceString) => {
  return parseInt(priceString.replace(/[^0-9]/g, ""), 10);
};

const formatPrice = (priceNumber) => {
  return priceNumber.toString();
};

const addOrCreateOrder = async (orderData) => {
  const { user_id, no_table, orderDetails = [], ...orderInfo } = orderData;

  const existingOrder = await orderRepository.getPendingOrder(
    user_id,
    no_table
  );

  let totalPriceChange = 0;

  if (existingOrder) {
    for (const detail of orderDetails) {
      const existingDetail = existingOrder.OrderDetails.find(
        (d) => d.product_id === detail.id
      );

      if (existingDetail) {
        const currentQuantity = existingDetail.quantity;
        const updatedQuantity = currentQuantity + detail.quantity;

        const pricePerUnit = parsePrice(detail.product_price);
        const currentTotalPrice = parsePrice(existingOrder.total_price);
        const previousTotalPrice = currentQuantity * pricePerUnit;
        const newTotalPrice = updatedQuantity * pricePerUnit;

        totalPriceChange += newTotalPrice - previousTotalPrice;

        await orderRepository.updateOrderDetailQuantity(
          existingDetail.id,
          updatedQuantity
        );
      } else {
        const productTotalPrice =
          detail.quantity * parsePrice(detail.product_price);

        totalPriceChange += productTotalPrice;

        await orderRepository.createOrderDetails({
          ...detail,
          order_id: existingOrder.id,
          product_id: detail.id,
        });
      }
    }

    const currentTotalPrice = parsePrice(existingOrder.total_price);
    const newTotalPrice = currentTotalPrice + totalPriceChange;

    await orderRepository.updateOrderTotalPrice(
      existingOrder.id,
      formatPrice(newTotalPrice)
    );

    return existingOrder;
  } else {
    const newOrder = await orderRepository.createOrder({
      ...orderInfo,
      user_id: user_id,
      no_table: no_table,
      status: "pending",
    });

    if (orderDetails.length > 0) {
      const totalPrice = orderDetails.reduce(
        (sum, detail) =>
          sum + detail.quantity * parsePrice(detail.product_price),
        0
      );

      await orderRepository.createOrderDetails(
        orderDetails.map((detail) => ({
          ...detail,
          product_id: detail.id,
          order_id: newOrder.id,
        }))
      );

      await orderRepository.updateOrderTotalPrice(
        newOrder.id,
        formatPrice(totalPrice)
      );
    }

    return newOrder;
  }
};

const getOrdersByParams = async (params) => {
  return orderRepository.getOrdersByParams(params);
};

const getOrder = (id) => orderRepository.getOrderById(id);

const updateOrder = async (id, data) => {
  return orderRepository.updateOrderStatus(id, data.status);
};

const deleteOrder = (id) => orderRepository.deleteOrderById(id);

module.exports = {
  addOrCreateOrder,
  getOrdersByParams,
  getOrder,
  updateOrder,
  deleteOrder,
};
