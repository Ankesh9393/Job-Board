const express = require("express");
const Job = require("../models/Job");

const router = express.Router();

// Get all jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Post a new job
router.post("/create", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json({ message: "Job added successfully!" });
});

module.exports = router;
