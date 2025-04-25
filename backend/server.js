require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

const jwtSecret = process.env.JWT_SECRET;
console.log("JWT Secret:", jwtSecret); // For testing only (remove in production)

const express = require("express");

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.listen(5000, () => console.log("Server running on port 5000"));


app.get("/jobs", async (req, res) => {
    const jobs = [
      { id: 1, title: "Frontend Developer", description: "React Developer needed." },
      { id: 2, title: "Backend Engineer", description: "Experience in Node.js." },
    ];
    res.json(jobs);
  });

  const jobRoutes = require("./routes/job");
app.use("/jobs", jobRoutes);

const applicationRoutes = require("./routes/applications");
app.use("/applications", applicationRoutes);

const adminRoutes = require("./routes/admin");
app.use("/admin", adminRoutes);
