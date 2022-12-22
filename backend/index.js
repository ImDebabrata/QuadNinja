const express = require("express");
const cors = require("cors");
require("dotenv").config();

const server = express();
server.use(
  cors({
    origin: "*",
  })
);

server.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to QuadNinja Server" });
});

server.listen(process.env.PORT, async () => {
  try {
    console.log("db is connected successfully");
  } catch (err) {
    console.log("db is not connected ");
  }

  console.log(`Server listning on http://localhost:${process.env.PORT}`);
});
