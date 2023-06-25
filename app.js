const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.URI+"/portfolioDB")

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
    details: {
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
    }
};

const Project = mongoose.model("Project", projectsSchema);

app.get("/", async function (req, res) {
    let allDesc;
    let allSkills;
    let allProjects;
    try {
        allDesc = await Desc.find();
        allSkills = await Skill.find();
        allProjects = await Project.find();
    } catch (err) {
        console.log(err);
    }
    return res.render("index", {
        desc: allDesc,
        skills: allSkills,
        projects: allProjects,
    });
});

app.use((req, res) => {
    return res.status(404).redirect("/");
});
  
app.listen(3000, () => {
    console.log("Server started on port 3000");
}); 