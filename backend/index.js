const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose")
const userModel = require("./model/Signing");

const server = express();
server.use(express.json())
server.use(express.urlencoded())
server.use(cors())


//Routes
server.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const user = new userModel({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered." });
        }
      });
    }
  });
});




server.post("/login", (req, res)=> {
    const { email, password} = req.body
    userModel.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 






server.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to QuadNinja Server" });
});






















mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})







server.listen(process.env.PORT, async () => {
  try {
    console.log("db is connected successfully");
  } catch (err) {
    console.log("db is not connected ");
  }

  console.log(`Server listning on http://localhost:${process.env.PORT}`);
});
