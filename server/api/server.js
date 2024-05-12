const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const corsMiddleware = require('./cors');
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public", { maxAge: 30 * 24 * 60 * 60 * 1000 }));
app.use(compression());

mongoose.connect(`${process.env.MONGODB_URI}/portfolioDB`).then(() => {

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
        }
    };

    const Project = mongoose.model("Project", projectsSchema);

    app.get("/api/data", corsMiddleware, async (req, res) => {
        try {
            const allDesc = await Desc.find();
            const allSkills = await Skill.find();
            const allProjects = await Project.find().sort({ date: -1 });
            return res.json({ desc: allDesc, skills: allSkills, projects: allProjects });
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Internal server error" });
        }
    });

    app.get("/api/cohereKey", async (req, res) => {
        try {
            const cohereKey = process.env.COHERE_API_KEY;
            res.json({ cohereKey });
        }
        catch (err) {
            console.log(err);
        }
    });

    app.listen(3001, () => {
        console.log("Server started on port 3001");
    });
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

module.exports = app;