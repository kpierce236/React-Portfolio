import React from 'react';
import profilePic from '../assets/kp.jpeg'; // Import your profile picture

function About() {
  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="text-center mb-4">
            <img src={profilePic} alt="Kevin Pierce" className="img-fluid rounded-circle mb-2" style={{ width: '150px' }} />
            <h2>About Me</h2>
          </div>
          <div className="card p-4">
            <p>
              My name is Kevin Pierce, and I'm 26 years old. I am passionate about learning new things, especially in the field of technology.
              Recently, I completed a full-stack developer coding bootcamp at Columbia University, where I acquired valuable skills in web development.
              Currently, I serve as the CFO of Pierce Apparel, a custom apparel and promotional items company.
            </p>
            <p>
              I am eager to apply my newfound skills to create innovative projects both for my current company and for freelance web app development.
              I am excited about the prospect of building impactful solutions and contributing to the tech community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

