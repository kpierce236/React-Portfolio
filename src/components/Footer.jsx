// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center">
      <div className="container p-4">
        <ul className="list-inline">
          <li className="list-inline-item"><a href="https://github.com/kpierce236"><i className="fab fa-github fa-2x"></i></a></li>
          <li className="list-inline-item"><a href="https://www.linkedin.com/in/kevin-pierce-70903410a/"><i className="fab fa-linkedin fa-2x"></i></a></li>
          <li className="list-inline-item"><a href="link-to-other-profile"><i className="fas fa-user fa-2x"></i></a></li>
        </ul>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        &copy; 2024 Kevin Pierce
      </div>
    </footer>
  );
}

export default Footer;

