import React from 'react';

export default function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <ul className="contactList"> 
          <li><a href="https://github.com/ErinnMatesi" target="_blank"><img className="logos" src="./images/GitHubLogo.png" alt="GitHub logo"/></a></li>
          <li><a href="https://www.linkedin.com/in/ematesi/" target="_blank"><img className="logos" src="./images/LinkedInLogo.png" alt="LinkedIn logo"/></a></li>
          <li><a href="https://twitter.com/thedoublenn" target="_blank"><img className="logos" src="./images/TwitterLogo.png" alt="Twitter logo"/></a></li>  
        </ul>
      </footer>
    </div>
  );
};