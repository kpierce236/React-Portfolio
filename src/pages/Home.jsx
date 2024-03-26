// Home.js
import React from 'react';


function Home() {
  return (
<div className="container mt-4 mb-4">
  <div className="row align-items-center justify-content-center"> {/* Center the row horizontally */}
    <div className="col-md-6 text-center"> {/* Center the content within the column */}
      <div className="home-content">
        <h1 className="fw-bold">Welcome to My Portfolio</h1> {/* Make the heading bold */}
        <p className="fw-bold">Discover my projects, learn more about me, and get in touch!</p> {/* Make the paragraph bold */}
      </div>
    </div>
  </div>
</div>
)
}

export default Home;
