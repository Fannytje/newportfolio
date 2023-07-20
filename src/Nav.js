import React from "react";
import './Nav.css';

export default function Nav() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src="favicon-32x32.png" alt="logo"/> 
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact.html">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/portfolio.html">Portfolio</a>  
        </li>
      </ul>
    </div>
  </div>
</nav>
}
