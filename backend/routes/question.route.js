const express = require("express");
const { QuestionModel } = require("../model/Question.model");
const questionRouter = express.Router();

questionRouter.get("/", async (req, res) => {
  const questions = await QuestionModel.find();
  res.send(questions);
});

questionRouter.post("/create", async (req, res) => {
  const payload = req.body;
  console.log("payload:", payload);
  try {
    const new_question = new QuestionModel(payload);
    await new_question.save();
    res.send({ response: "Question Created Successfully" });
  } catch (err) {
    res.send({ response: "Something went wrong", err });
  }
});

questionRouter.delete("/delete", async (req, res) => {
  const questionID = req.params.questionID;
  const studentID = req.body.studentID;
  const question = await QuestionModel.findOne({ _id: questionID });
  if (studentID !== question.studentID) {
    res.send({ response: "Not Authorised" });
  } else {
    await QuestionModel.findByIdAndDelete({ _id: questionID });
    res.send({ response: "Question Deleted Successfully" });
  }
});

module.exports = { questionRouter };
