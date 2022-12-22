const express = require("express");
const cors = require("cors");
const { questionRouter } = require("./routes/question.route");
const { solutionRouter } = require("./routes/solution.route");
const { connection } = require("./config/database");
require("dotenv").config();

const server = express();
server.use(
  cors({
    origin: "*",
  })
);
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to QuadNinja Server" });
});

server.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db is connected successfully");
  } catch (err) {
    console.log("db is not connected ");
  }

  server.use("/questions", questionRouter);
  server.use("/solutions", solutionRouter);

  console.log(`Server listning on http://localhost:${process.env.PORT}`);
});
