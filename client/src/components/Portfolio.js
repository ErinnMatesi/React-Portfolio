import React from 'react';

export default function Portfolio() {
  return (
    <div className="container">
      <section className="projectCard">
        <img className="projectImg" src="./images/SproutSpy.jpg" alt="screenshot of SproutSpy website" />
        <aside className="projectLinks">
          <a href="https://fast-cliffs-81659.herokuapp.com/" target="_blank">Deployed Site</a>
          <a href="https://github.com/got-git-group/SproutSpy" target="_blank">GitHub Repository</a>
        </aside>
      </section>

      <section className="projectCard">
        <aside className="projectLinks">
          <a href="https://erinnmatesi.github.io/Weather-Dashboard/" target="_blank">Deployed Site</a>
          <a href="https://github.com/ErinnMatesi/Weather-Dashboard" target="_blank">GitHub Repository</a>
        </aside>
        <img className="projectImg" src="./images/WeatherDashboard.PNG" alt="screenshot of Weather Dashboard site" />
      </section>

      <section className="projectCard">
        <img className="projectImg" src="./images/JSQuiz.PNG" alt="screenshot of Javascript quiz" />
        <aside className="projectLinks">
          <a href="https://erinnmatesi.github.io/Javascript-Quiz/" target="_blank">Deployed Site</a>
          <a href="https://github.com/ErinnMatesi/Javascript-Quiz" target="_blank">GitHub Repository</a>
        </aside>
      </section>

      <section className="projectCard">
        <aside className="projectLinks">
          <a href="https://erinnmatesi.github.io/CSS-CheatSheet/" target="_blank">Deployed Site</a>
          <a href="https://github.com/ErinnMatesi/CSS-CheatSheet" target="_blank">GitHub Repository</a>
        </aside>
        <img className="projectImg" src="./images/Cheatsheet.PNG" alt="screenshot of blocks of CSS code" />
      </section>

      <section className="projectCard">
        <img className="projectImg" src="./images/Screenshot.PNG" alt="screenshot of app in use" />
        <aside className="projectLinks">
          {/* <a href="https://fast-cliffs-81659.herokuapp.com/" target="_blank">Deployed Site</a> */}
          <a href="https://github.com/ErinnMatesi/Employee-Tracker" target="_blank">GitHub Repository</a>
        </aside>
      </section>

      <section className="projectCard">
        <aside className="projectLinks">
          <a href="https://fast-cliffs-81659.herokuapp.com/" target="_blank">Deployed Site</a>
          <a href="https://github.com/got-git-group/SproutSpy" target="_blank">GitHub Repository</a>
        </aside>
        <img className="projectImg" src="./images/SproutSpy.jpg" alt="screenshot of SproutSpy website" />
      </section>
      {/* 
      
            <a href="https://erinnmatesi.github.io/CSS-CheatSheet/" target="_blank">
              <img src="./images/Cheatsheet.PNG" alt="screenshot of blocks of CSS code" className="prjImg"/>

            <a href="https://github.com/ErinnMatesi/Employee-Tracker" target="_blank">
              <img src="./images/Screenshot.PNG" alt="screenshot of app in use" className="prjImg"/>

      </section> */}
    </div>
  );
};