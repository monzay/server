require("dotenv").config();

const PORT = process.env.PORT || 3000;
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "123456789";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_DATABASE = process.env.DB_DATABASE || "datoslogin";
const DB_PORT = process.env.DB_PORT || "3306";

module.exports = {
  PORT,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_DATABASE,
  DB_PORT,
};