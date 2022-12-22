const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  title: { type: String, required: true },
  catagory: { type: Array, required: true },
  studentID: { type: String, required: true },
});

const QuestionModel = mongoose.model("question", questionSchema);

module.exports = { QuestionModel };
