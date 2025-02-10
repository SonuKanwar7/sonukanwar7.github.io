import React from 'react';
import './ProjectCard.css';

const getImageUrl = (imageName) => {
  return new URL(`./assets/${imageName}`, import.meta.url).href;
};

const ProjectCard = ({ project }) => {
  const handleClick = () => {
    window.open(`https://github.com/sonukanwar7/${project.repo}`, '_blank');
  };

  return (
    <div className="project-card">
      <img src={getImageUrl(project.image)} alt={`${project.title} logo`} className="project-img" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
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
