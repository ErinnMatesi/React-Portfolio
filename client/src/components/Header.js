import React from 'react';

export default function Header() {
  return (
    <div className="container">
      <header className = "header-wrap"> 
        <div className="intro">
          <p>Erinn Matesi - Web Developer</p>
        </div>
        <nav>
        <ul> 
        <li><a href="/home">Home</a></li>
          <li><a href="/about">About Me</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="./Resume - Erinn Matesi.pdf" target="_blank">Resume</a></li>
        </ul>
      </nav>
      </header>
    </div>
  );
};