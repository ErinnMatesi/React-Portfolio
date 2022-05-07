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
          <li><a href="https://github.com/ErinnMatesi" target="_blank">GitHub</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about-me">About Me</a></li> 
          <li><a href="#projects">Projects</a></li> 
        </ul>
      </nav>
      </header>
    </div>
  );
};