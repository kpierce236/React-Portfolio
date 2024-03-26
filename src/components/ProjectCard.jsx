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

const overlayHoverStyles = {
  opacity: '1', // Show overlay on hover
};

const titleHoverStyles = {
    color: '#ffcc00', // Highlighted color when hovered
  };

const titleLinkStyles = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '24px', // Larger title font size
  marginBottom: '50px', // Add space below the title
};

const githubIconStyles = {
  fontSize: '32px', // Larger icon font size
  marginLeft: '10px', // Add space between title and icon
  marginBottom: '50px', // Add space below the icon
};

const appTypeStyles = {
  fontSize: '15px',
};

function ProjectCard({ title, deployedLink, githubLink, imageUrl, appType }) {
  const [isOverlayHovered, setIsOverlayHovered] = React.useState(false);
  const [isTitleHovered, setIsTitleHovered] = React.useState(false);

  return (
    <div className="project-card" style={cardStyles} onMouseEnter={() => setIsOverlayHovered(true)} onMouseLeave={() => setIsOverlayHovered(false)}>
      <div className="snapshot" style={snapshotStyles}>
        <img src={imageUrl} alt={title} style={imageStyles} />
      </div>
      <div className="overlay" style={{ ...overlayStyles, ...(isOverlayHovered && overlayHoverStyles) }}>
        <h5 className="card-title">
          <a href={deployedLink} style={{ ...titleLinkStyles, ...(isTitleHovered && titleHoverStyles) }} onMouseEnter={() => setIsTitleHovered(true)} onMouseLeave={() => setIsTitleHovered(false)}>{title}</a>
          <a href={githubLink}><i className="fab fa-github" style={githubIconStyles}></i></a>
        </h5>
        <p className="app-type" style={appTypeStyles}>{appType}</p>
      </div>
    </div>
  );
}

export default ProjectCard;


