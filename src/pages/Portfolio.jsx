// Portfolio.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  const projects = [
    {
      title: "Note Taker App",
      deployedLink: "https://note-taker-kp-aa6665bda0a7.herokuapp.com/",
      githubLink: "https://github.com/kpierce236/Note-Taker",
      imageUrl: "https://github.com/kpierce236/Note-Taker/raw/main/videos/Note-Taker-Gif.gif" // Example image URL
    },
    {
      title: "Project 2",
      deployedLink: "https://example.com/project2",
      githubLink: "https://github.com/your-username/project2",
      imageUrl: "https://via.placeholder.com/300" // Example image URL
    },
    {
      title: "Project 3",
      deployedLink: "https://example.com/project2",
      githubLink: "https://github.com/your-username/project2",
      imageUrl: "https://via.placeholder.com/300" // Example image URL
    },
    {
      title: "Project 4",
      deployedLink: "https://example.com/project2",
      githubLink: "https://github.com/your-username/project2",
      imageUrl: "https://via.placeholder.com/300" // Example image URL
    },
    {
      title: "Project 5",
      deployedLink: "https://example.com/project2",
      githubLink: "https://github.com/your-username/project2",
      imageUrl: "https://via.placeholder.com/300" // Example image URL
    },
    {
      title: "Project 6",
      deployedLink: "https://example.com/project2",
      githubLink: "https://github.com/your-username/project2",
      imageUrl: "https://via.placeholder.com/300" // Example image URL
    }
    // Add more projects as needed
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Portfolio Page</h2>
      <div className="row">
        {/* Map through projects array and render ProjectCard component for each project */}
        {projects.map((project, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <ProjectCard
              title={project.title}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
              imageUrl={project.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

