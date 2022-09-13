import dotenv from "dotenv";
dotenv.config();

/** MySQL DB 연결 */
export const config = {
  development: {
    host: process.env.DATABASE_HOST || "localhost",
    username: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME || "shoppingmall",
    port: process.env.DATABASE_PORT || "3306",
    dialect: "mysql"
  }
};
