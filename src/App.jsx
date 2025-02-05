import { useState } from 'react'
import './App.css'
import ProjectCard from './ProjectCard'
import projectImage from './assets/project-image.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const self_link = "https://github.com/sonukanwar7/"

const stakeholderProjects = [
  {
    title: "Project 1 title",
    image: projectImage,
    tags: ['R', 'SAS'],
    repo: self_link + "Project1",
  },

  {
    title: "Project 2 title",
    image: projectImage,
    tags: ['Python', 'SQL'],
    repo: self_link + "Project2",
  }
]

const personalProjects = [
  {
    title: "Portfolio Website",
    image: projectImage,
    tags: ['Javascript', 'React'],
    repo: self_link + "sonukanwar7.github.io",
  }
];

function App() {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  const filterProjects = (projects) => {
    if (selectedTags.length === 0) return projects;

    return projects.filter(project =>
      project.tags.some(tag => selectedTags.includes(tag))
    );
  };

  const filteredStakeholderProjects = filterProjects(stakeholderProjects);
  const filteredPersonalProjects = filterProjects(personalProjects);


  return (
    <div className='App'>
      <header>
        <h1>
          Portfolio Website
        </h1>
      </header>

      <section className="about-me">
        <img
          src="https://github.com/sonukanwar7.png"
          alt="Profile"
          className="profile-photo"
        />
        <p>
          About me text.
        </p>
      </section>

      <section>
        <h2>Stakeholder Projects</h2>
        <div className="section-container">
          {filteredStakeholderProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={{
                title: project.title,
                image: project.image,
                tools: project.tags,
                link: project.repo
              }}
            />
          ))}
        </div>
      </section>
      
      <section>
        <h2>Personal Projects</h2>
        <div className="section-container">
          {filteredPersonalProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={{
                title: project.title,
                image: project.image,
                tools: project.tags,
                link: project.repo
              }}
            />
          ))}
        </div>
      </section>

      <div className="tags-filter">
        <h3>Filter by Tags:</h3>
        <div className="tags">
          {['Python', 'R', 'Javascript', 'SAS', 'SQL', 'React'].map((tag, index) => (
            <span
              key={index}
              className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <footer>
        <h2>Contact Me</h2>
        <ul>
          <li><a href="mailto:sonuk07kanwar@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
          <li><a href="https://www.linkedin.com/in/sonukanwar1/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
          <li><a href="https://github.com/sonukanwar7"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
        </ul>
      </footer>

    </div>
  )
}

export default App
