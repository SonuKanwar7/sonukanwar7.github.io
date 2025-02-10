import { useState } from 'react';
import './App.css';
import ProjectCard from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const stakeholderProjects = [
  {
    title: "Placeholder Project 1",
    image: "project-image.jpg",
    description: "A data analysis project utilizing R and SAS to uncover insights from financial datasets.",
    tools: ['R', 'SAS'],
    repo: "Project1",
  },
  {
    title: "Placeholder Project 2",
    image: "project-image.jpg",
    description: "A Python and SQL-based dashboard for monitoring operational efficiency in banking transactions.",
    tools: ['Python', 'SQL'],
    repo: "Project2",
  }
];

const personalProjects = [
  {
    title: "Portfolio Website",
    image: "react_project.png",
    description: "A clean and modern portfolio website built with React and JavaScript to showcase my projects.",
    tools: ['Javascript', 'React'],
    repo: "sonukanwar7.github.io",
  }
];

function App() {
  const profilePicImgURL = "https://github.com/sonukanwar7.png";

  return (
    <div className='App'>
      <header>
        <h1>Portfolio Website</h1>
      </header>

      <section className="about-me">
        <img src={profilePicImgURL} alt="Profile Pic" className="profile-photo" />
        <p>
          I am a passionate Business Analytics professional with experience in data analysis, finance, and technology. 
          I am dedicated to learning and applying the latest tools and techniques in my projects. My background includes 
          working on projects related to consumer behavior analysis and financial risk prediction.
        </p>
      </section>

      <section>
        <h2>Stakeholder Projects</h2>
        <div className="section-container">
          {stakeholderProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      
      <section>
        <h2>Personal Projects</h2>
        <div className="section-container">
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      <footer>
        <h2>Contact Me</h2>
        <ul>
          <li><a href="mailto:sonuk07kanwar@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
          <li><a href="https://www.linkedin.com/in/sonukanwar1/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
          <li><a href="https://github.com/sonukanwar7"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
