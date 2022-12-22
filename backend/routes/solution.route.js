const express = require("express");
const { SolutionModel } = require("../model/Solution.model");
const solutionRouter = express.Router();

solutionRouter.post("/", async (req, res) => {
  const { questionID } = req.body;
  console.log("questionID:", req.body);
  const solution = await SolutionModel.find({ questionID });
  res.send(solution);
});

solutionRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const new_solution = new SolutionModel(payload);
    await new_solution.save();
    res.send({ response: "Solution Added Successfully" });
  } catch (err) {
    res.send({ response: "Something went wrong", err });
  }
});

solutionRouter.delete("/delete", async (req, res) => {
  const solutionID = req.params.solutionID;
  const helperID = req.body.helperID;
  const solution = await SolutionModel.findOne({ _id: solutionID });
  if (helperID !== solution.helperID) {
    res.send({ response: "Not Authorised" });
  } else {
    await SolutionModel.findByIdAndDelete({ _id: solutionID });
    res.send({ response: "Solution Deleted Successfully" });
  }
});

module.exports = { solutionRouter };
