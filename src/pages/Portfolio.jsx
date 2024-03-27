// Portfolio.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  const projects = [
    {
      title: "Note Taker App",
      deployedLink: "https://note-taker-kp-aa6665bda0a7.herokuapp.com/",
      githubLink: "https://github.com/kpierce236/Note-Taker",
      imageUrl: "https://github.com/kpierce236/Note-Taker/raw/main/videos/Note-Taker-Gif.gif",
      appType: "Node.js and Express"
    },
    {
      title: "Tech Blog",
      deployedLink: "https://tech-blog-kp-dc469c536e9a.herokuapp.com/",
      githubLink: "https://github.com/kpierce236/Tech-Blog",
      imageUrl: "https://via.placeholder.com/300",
      appType: "MVC (Node.js, mySQL, Express, HandleBars) " 
    },
    {
      title: "Book Search Engine",
      deployedLink: "https://book-search-engine-rjvv.onrender.com/",
      githubLink: "https://github.com/kpierce236/Book-Search-Engine",
      imageUrl: "https://via.placeholder.com/300",
      appType: "MERN Stack" 
    },
    {
      title: "Weather Dashboard",
      deployedLink: "https://kpierce236.github.io/Weather-Dashboard/",
      githubLink: "https://github.com/kpierce236/Weather-Dashboard",
      imageUrl: "https://github.com/kpierce236/Weather-Dashboard/raw/main/images/screenshot.png",
      appType: "Server Side APIs" 
    },
    {
      title: "Scheduler App",
      deployedLink: "https://kpierce236.github.io/Work-Day-Scheduler/",
      githubLink: "https://github.com/kpierce236/Work-Day-Scheduler",
      imageUrl: "https://github.com/kpierce236/Work-Day-Scheduler/raw/main/images/screenshot.png",
      appType: "Third Party APIs (Bootstrap, jQuery)"
    },
    {
      title: "Code Quiz",
      deployedLink: "https://kpierce236.github.io/Code-Quiz/",
      githubLink: "https://github.com/kpierce236/Code-Quiz",
      imageUrl: "https://github.com/kpierce236/Code-Quiz/raw/main/images/screenshot.png",
      appType: "Web APIs and DOM Manipulation"
    }

  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Portfolio</h2>
      <div className="row">
        {/* Map through projects array and render ProjectCard component for each project */}
        {projects.map((project, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <ProjectCard
              title={project.title}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
              imageUrl={project.imageUrl}
              appType={project.appType}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

