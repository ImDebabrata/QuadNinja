const express = require("express");
// const server = express();
const app = require('express')();
const cors = require("cors");
require("dotenv").config();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = process.env.socket ||3000;

const { questionRouter } = require("./routes/question.route");
const { solutionRouter } = require("./routes/solution.route");
const { connection } = require("./config/database");
const {userRouter} = require("./routes/user.route")



app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to QuadNinja app" });
});

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(userRouter);

  app.use("/questions", questionRouter);
  app.use("/solutions", solutionRouter);

  io.on('connection', (socket) => {
    socket.on('chat message', msg => {
      io.emit('chat message', msg);
    });
  });

// app.listen(process.env.PORT, async () => {
//   try {
//     await connection;
//     console.log("db is connected successfully");
//   } catch (err) {
//     console.log("db is not connected ");
//     console.log("err",err)
//   }



//   console.log(`Server listning on http://localhost:${process.env.PORT}`);
// });
// http.listen(3000, () => {
//   console.log(`Socket.IO server running at http://localhost:${3000}/`);
// });

app.start = app.listen =async function () {
  try {
        await connection;
        console.log("db is connected successfully");
      } catch (err) {
        console.log("db is not connected ");
        console.log("err",err)
      }
  return http.listen.apply(http,arguments)
}
app.start(process.env.PORT)