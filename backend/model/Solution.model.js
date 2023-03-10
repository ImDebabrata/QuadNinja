const mongoose = require("mongoose");

const solutionSchema = mongoose.Schema({
  title: { type: String, required: true },
  questionID: { type: String, required: true },
  helperID: { type: String, required: true },
  helperName: { type: String, required: true },
});

const SolutionModel = mongoose.model("solution", solutionSchema);

module.exports = { SolutionModel };
