import React, { useState } from 'react';
import parse from 'html-react-parser'

export default function Projects({ projects }) {
    const [projectCategory, setProjectCategory] = useState('all');
    const [flippedCard, setFlippedCard] = useState(null);

    const filteredProjects = projectCategory !== 'all' ? projects.filter(project => project.category === projectCategory) : projects;
    
    const flipCard = (projectId) => {
        if (flippedCard === projectId) {
            setFlippedCard(null); // Flip back the clicked card
        } else {
            setFlippedCard(projectId); // Flip the clicked card
        }
    };

    return (
        <section id="project">
        <div className="project-title">
            Projects
        </div>
        <div className="project-content">
            <div className="project-navigation">
                <div
                    className={`projectCategory ${projectCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setProjectCategory('all')}
                >
                    All
                </div>
                <div
                    className={`projectCategory ${projectCategory === 'web' ? 'active' : ''}`}
                    onClick={() => setProjectCategory('web')}
                >
                    Web Dev
                </div>
                <div
                    className={`projectCategory ${projectCategory === 'mlai' ? 'active' : ''}`}
                    onClick={() => setProjectCategory('mlai')}
                >
                    ML/AI
                </div>
                <div
                    className={`projectCategory ${projectCategory === 'dapp' ? 'active' : ''}`}
                    onClick={() => setProjectCategory('dapp')}
                >
                    DApp
                </div>
                <div
                    className={`projectCategory ${projectCategory === 'arduino' ? 'active' : ''}`}
                    onClick={() => setProjectCategory('arduino')}
                >
                    Arduino
                </div>
            </div>
            <div className="project-cards">
            {filteredProjects? filteredProjects.map(project => (
                <div id="full-card" className={project.category} key={project._id}>
                    <a target="_blank" rel="noreferrer" href={project.codeLink}>
                        <div className="card-flip">
                            <div
                                id={project._id}
                                className={`card ${flippedCard === project._id ? 'flipped' : ''}`}
                                key={project._id}
                            >
                                <div className="card-front">
                                    <img src={project.banner} alt="project-thumbnail" />
                                    <div className="front-container">
                                        <div className="card-title">{parse(project.title)}</div>
                                        <div className="card-lang">
                                            <span>Frameworks and Technologies:</span><br />
                                            {project.technologies.map((tech, index) => (
                                                <span key={index}>
                                                    {parse(tech)}{index !== project.technologies.length - 1 && ', '}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <div className="back-container">
                                        <div className="card-title">{project.title}</div>
                                        <div className="card-description">
                                            <div>
                                                <span>Features:</span>
                                                <ul>
                                                {project.features.map((feature, index) => (
                                                    <li key={index}>{parse(feature)}</li>
                                                ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <button className="flip-button" type="button" onClick={() => flipCard(project._id)}>Flip</button>
                </div>
            )): ""}
            </div>
        </div>
        </section>
    );
}