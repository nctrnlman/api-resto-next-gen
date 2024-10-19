// Fungsi middleware untuk memformat respon dari server
function formatResponse(req, res, next) {
  // Menambahkan method sendResponse ke objek respon
  res.sendResponse = (
    status, // Status dari respon (misalnya, 'success' atau 'error')
    message, // Pesan yang menjelaskan status respon
    data = null, // Data yang ingin dikirimkan dalam respon (default null)
    errors = null, // Kesalahan yang mungkin terjadi (default null)
    httpStatusCode = 200 // Kode status HTTP (default 200)
  ) => {
    // Mengatur status respon HTTP dan mengirimkan objek JSON
    res.status(httpStatusCode).json({
      status, // Status respon
      message, // Pesan respon
      data, // Data respon
      errors, // Kesalahan respon
    });
  };
  next(); // Melanjutkan ke middleware berikutnya
}

module.exports = formatResponse;
