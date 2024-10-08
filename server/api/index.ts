const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const cors = require('cors');
// const corsMiddleware = require("./cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public", { maxAge: 30 * 24 * 60 * 60 * 1000 }));
app.use(compression());

const allowedOrigins = [
  process.env.ALLOWED_URI1,
  process.env.ALLOWED_URI2
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

mongoose.connect(`${process.env.MONGODB_URI}/portfolioDB`);

const descSchema = {
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
};

const Desc = mongoose.model("Description", descSchema);

const skillsSchema = {
  name: {
    type: String,
    required: true,
  },
  shield: {
    type: String,
    required: true,
  },
};

const Skill = mongoose.model("Skill", skillsSchema);

const projectsSchema = {
  codeLink: String,
  title: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
};

const Project = mongoose.model("Project", projectsSchema);

const port = process.env.PORT || 3001;

app.get("/api/data", cors(corsOptions), async (req, res) => {
  try {
    const allDesc = await Desc.find();
    const allSkills = await Skill.find();
    const allProjects = await Project.find().sort({ date: -1 });
    return res.json({
      desc: allDesc,
      skills: allSkills,
      projects: allProjects,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/", async (req, res) => {
  try {
    res.send("Server is running");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});