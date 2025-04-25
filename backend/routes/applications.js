const express = require("express");
const Application = require("../models/Application");

const router = express.Router();

// Get all applications (for employers/admin)
router.get("/", async (req, res) => {
  const applications = await Application.find().populate("jobId").populate("userId");
  res.json(applications);
});

// Apply for a job
router.post("/apply", async (req, res) => {
  const application = new Application(req.body);
  await application.save();
  res.json({ message: "Application submitted successfully!" });
});

module.exports = router;
