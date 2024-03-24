import React from 'react';
import html2pdf from 'html2pdf.js';

var opt = {
  margin: 1,
  filename: 'Kevin_Pierce_Resume.pdf',
}

function Resume() {
  const downloadResume = () => {
    const element = document.getElementById('resume-content');
    html2pdf.from(element).set(opt);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Resume</h2>
          <p>Download your resume:</p>
          <button onClick={downloadResume} className="btn btn-primary">Download PDF</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          {/* Styled resume content */}
          <div id="resume-content" className="resume text-center">
            <h3 className="mb-3">Kevin Pierce</h3>
            <p className="mb-2">Full Stack Developer</p>
            <p className="mb-2">Email: kpierce236@gmail.com</p>
            <p className="mb-2">Number: 862-485-4613</p>

            <h4 className="mt-4 mb-2">Skills:</h4>
            <ul className="list-unstyled">
              <li>HTML, CSS, JavaScript</li>
              <li> MongoDB, Express.js, React.js, Node.js</li>
            </ul>

            <h4 className="mt-4 mb-2">Experience:</h4>
            <p className="mb-2"><strong>Company XYZ - Full Stack Developer</strong></p>
            <p className="mb-2">Jan 2020 - Present</p>
            <ul>
              <li>Developed and maintained web applications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

