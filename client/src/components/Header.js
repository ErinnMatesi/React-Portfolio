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
            <li><a className={window.location.pathname === "/" ? "active" : ""} href="/">Home</a></li>
            <li><a className={window.location.pathname === "/about" ? "active" : ""} href="/about">About Me</a></li>
            <li><a className={window.location.pathname === "/contact" ? "active" : ""} href="/contact">Contact</a></li>
            <li><a className={window.location.pathname === "/portfolio" ? "active" : ""} href="/portfolio">Portfolio</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};