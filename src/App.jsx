import { useState } from 'react';
import './App.css';
import ProjectCard from './ProjectCard';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const stakeholderProjects = [
  {
    title: "Placeholder Project 1",
    image: "project-image.jpg",
    description: "Placeholder description.",
    tools: ['R', 'SAS'],
    link: "",
    buttonText: "View Details",
  }
];

const personalProjects = [
  {
    title: "Portfolio Website",
    image: "react_project.png",
    description: "A dynamic, responsive portfolio website developed with React and JavaScript to showcase my projects and optimized for performance.",
    tools: ['Javascript', 'React'],
    link: "https://github.com/sonukanwar7/sonukanwar7.github.io",
    buttonText: "View on GitHub",
  },
  {
    title: "Bitcoin Trading Strategy",
    image: "bitcoin_image.jpg",
    description: "Analyzing Bitcoin trading strategies with indicators, ML, and risk management.",
    tools: ['Python'],
    link: "https://github.com/SonuKanwar7/bitcoin_trading_strategy",
    buttonText: "View on GitHub",
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
      <img src={profilePicImgURL} alt="Profile Pic" className="profile-photo" loading="lazy" />
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
          <li><a href="mailto:sonukanwar7@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={32} /></a></li>
          <li><a href="https://linkedin.com/in/sonukanwar7" target="_blank" rel="noopener noreferrer"><FaLinkedin size={32} /></a></li>
          <li><a href="https://github.com/sonukanwar7" target="_blank" rel="noopener noreferrer"><FaGithub size={32} /></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
