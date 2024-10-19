"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User", // Nama model
    {
      id: {
        type: DataTypes.INTEGER, // Tipe data untuk ID
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING, // Tipe data untuk nama pengguna
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING, // Tipe data untuk email pengguna
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING, // Tipe data untuk kata sandi pengguna
        allowNull: false,
      },
      no_whatsapp: {
        type: DataTypes.INTEGER, // Tipe data untuk nomor WhatsApp pengguna
        allowNull: false,
      },
      role: {
        type: DataTypes.INTEGER, // Tipe data untuk peran pengguna
        allowNull: false,
        defaultValue: 2,
      },
    },
    {
      timestamps: true,
    }
  );

  return User;
};
