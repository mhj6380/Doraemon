// 일반 mysql 연결
import { createPool } from "mysql2/promise";
const dotenv = require("dotenv");
dotenv.config();

export async function connect() {
  const connection = await createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD,
    connectionLimit: 10,
  });

  return connection;
}

// Usage

// import { connect } from "./database";
// const conn = await connect();
