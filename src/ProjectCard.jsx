import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const handleClick = () => {
    window.open(project.link, '_blank');
  };

  return (
    <div className="project-card">
      <img src={project.image} alt={`${project.title} logo`} className="project-img" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <div className="tags">
          {project.tools.map((tool, index) => (
            <span key={index} className="tag">{tool}</span>
          ))}
        </div>
        <button className="btn" onClick={handleClick}>View Project</button>
      </div>
    </div>
  );
};

export default ProjectCard;