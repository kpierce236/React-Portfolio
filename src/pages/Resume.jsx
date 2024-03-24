// Resume.js
import React from 'react';

function Resume() {
  const handleDownloadResume = () => {
    // Implement download logic here
    // For demonstration purposes, let's just log a message
    console.log('Downloading resume...');
  };

  return (
    <div>
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <button onClick={handleDownloadResume}>Download PDF</button>
    </div>
  );
}

export default Resume;
