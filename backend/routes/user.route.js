const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { UserModel } = require("../model/User.model");

const userRouter = express.Router();

// user login request 
userRouter.post("/login", async (req, res) => {
  let userData = req.body;

  try {
    if (userData.email && userData.password) {
      const { password, email } = req.body;

      let checkUser = await UserModel.findOne({ email });
      if (checkUser) {
        bcrypt.compare(password, checkUser.password, (err, result) => {
          if (err) {
            console.log({ message: "bcrypt comparison fail", err });
          } else {
            if (result) {
              let token = jwt.sign(
                { userId: checkUser._id },
                process.env.SECRET_KEY
              );

              res.status(200).send({ message: "Login successfull", token,user:checkUser });
            } else {
              res.status(401).send({ message: "Incorrect credentials" });
            }
          }
        });
      } else {
        res.status(401).send({ message: "User is not exist" });
      }
    } else {
      res.status(401).send({ message: "Send valid user details" });
    }
  } catch (err) {
    res.status(500).send({ message: "Something went wrong somewhere" });
  }
});

// Signup request

userRouter.post("/signup", async (req, res) => {
  let userData = req.body;

  try {
    if (userData.name && userData.email && userData.password) {
      let { password,email } = req.body;
      let checkUser = await UserModel({email});
      if(checkUser){
        res.status(401).send({message:"User already exist"})
      }
      else{

      bcrypt.hash(password, 4, async (err, hash) => {
        if (err) {
          console.log({ message: "something went wrong in bcrypt", err });
        } else {
          let newUser = new UserModel({ ...userData, password: hash });
          await newUser.save();
          res.status(200).send({ message: "User signup successfull" });
        }
      });
    }
    } else {
      res.status(401).send({ message: "Send valid user details" });
    }
  } catch (err) {
    res.status(500).send({ message: "Something went wrong somewhere" });
  }
});

module.exports = { userRouter };
