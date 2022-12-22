const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { questionRouter } = require("./routes/question.route");
const { solutionRouter } = require("./routes/solution.route");
const { connection } = require("./config/database");
const {userRouter} = require("./routes/user.route")


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

server.use(userRouter);

  server.use("/questions", questionRouter);
  server.use("/solutions", solutionRouter);



server.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db is connected successfully");
  } catch (err) {
    console.log("db is not connected ");
    console.log("err",err)
  }



  console.log(`Server listning on http://localhost:${process.env.PORT}`);
});
