// ProjectCard.jsx
import React from 'react';

const cardStyles = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease',
};

const cardHoverStyles = {
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
};

const snapshotStyles = {
  width: '100%',
  height: '200px', // Adjust height as needed
  overflow: 'hidden',
};

const imageStyles = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
};

const overlayStyles = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black overlay
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  opacity: '0', // Initially hidden
  transition: 'opacity 0.3s ease',
};

const overlayVisibleStyles = {
  opacity: '1', // Show overlay on hover
};

const titleLinkStyles = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '24px', // Larger title font size,
   transition: 'color 0.3s ease', // Smooth transition for color change
};

const githubIconStyles = {
  fontSize: '32px', // Larger icon font size
  marginLeft: '10px', // Add space between title and icon
};

const appTypeStyles = {
  fontSize: '14px',
};

function ProjectCard({ title, deployedLink, githubLink, imageUrl, appType }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="project-card" style={cardStyles} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="snapshot" style={snapshotStyles}>
        <img src={imageUrl} alt={title} style={imageStyles} />
      </div>
      <div className="overlay" style={{ ...overlayStyles, ...(isHovered && overlayVisibleStyles) }}>
        <h5 className="card-title">
          <a href={deployedLink} style={{ ...titleLinkStyles, color: isHovered ? '#ffcc00' : '#fff' }}>{title}</a>
          <a href={githubLink}><i className="fab fa-github" style={githubIconStyles}></i></a>
        </h5>
        <p className="app-type" style={appTypeStyles}>{appType}</p>
      </div>
    </div>
  );
}

export default ProjectCard;


