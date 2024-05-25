import React, { useEffect } from "react";
import parse from "html-react-parser";

export default function About({ about, skills }) {
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const skillElements = document.querySelectorAll(".skill-list img");

      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
          aboutSection.classList.add("visible");
        } else {
          aboutSection.classList.remove("visible");
        }
      }

      skillElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about">
      <div className="about-title">
        About <span>Me</span>
      </div>
      <div className="about-content">
        {parse(about)}
        <div className="skill-list">
          {skills.map((skill) => (
            <img
              key={skill._id}
              src={skill.shield}
              alt={skill.name}
              height="35px"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
