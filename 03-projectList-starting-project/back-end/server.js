import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// utilizzo api
app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(3000, () => {
  console.log("avvio server su https://localhost:3000");
});
