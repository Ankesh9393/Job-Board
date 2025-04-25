const express = require("express");
const Job = require("../models/Job");
const Application = require("../models/Application");

const router = express.Router();

// Get all jobs (for admin)
router.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Delete a job post
router.delete("/jobs/:id", async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Job removed successfully!" });
});

// Get all applications (for admin review)
router.get("/applications", async (req, res) => {
  const applications = await Application.find().populate("jobId").populate("userId");
  res.json(applications);
});

module.exports = router;
