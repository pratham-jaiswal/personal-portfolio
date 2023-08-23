import React from 'react'
import parse from 'html-react-parser';

export default function About({ about, skills }) {
  return (
    <section id="about">
        <div className="about-title">
            About <span>Me</span>
        </div>
        <div className="about-content">
            {about? parse(about.content) : ""}
            <ul>
                {skills? skills.map(skill => (
                <li key={skill._id}>
                    <span>{parse(skill.name)}:</span> {parse(skill.details)}
                </li>
                )):""}
            </ul>
        </div>
    </section>
  )
}