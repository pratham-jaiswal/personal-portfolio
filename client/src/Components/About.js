import React from "react";
import parse from "html-react-parser";

export default function About({ about, skills }) {
  return (
    <section id="about">
      <div className="about-title">
        About <span>Me</span>
      </div>
      <div className="about-content">
        {parse(about)}
        <div className="skill-list">
          {" "}
          {skills.map((skill) => (
            <img
              key={parse(skill._id)}
              src={parse(skill.shield)}
              alt={parse(skill.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
