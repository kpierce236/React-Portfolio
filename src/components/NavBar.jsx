import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/KP_logo-1.png'; 

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavBar() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo" width="250" height="75" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/about" className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;