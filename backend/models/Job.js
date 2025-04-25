const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  location: String,
  employerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Job", JobSchema);
