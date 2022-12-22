const mongoose = require("mongoose");

const solutionSchema = mongoose.Schema({
  title: { type: String, required: true },
  questionID: { type: String, required: true },
  helperID: { type: String, required: true },
});

const SolutionModel = mongoose.model("question", solutionSchema);

module.exports = { SolutionModel };
