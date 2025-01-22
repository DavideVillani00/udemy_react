import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const DB_PASS = process.env.DB_PASS;

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: DB_PASS,
  database: "exercise_project_list",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("connessione al database avvenuta con successo");
});

export default conn;
