// Home.js
import React from 'react';

function Home() {
  return (
  <div className="container">
  <div className="row align-items-center">
    <div className="col-md-6">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my projects, learn more about me, and get in touch!</p>
      </div>
    </div>
    <div className="col-md-6">
      <div className="home-image">
        <img src="https://via.placeholder.com/400" alt="Developer" className="img-fluid rounded" />
      </div>
    </div>
  </div>
</div>)
}

export default Home;
