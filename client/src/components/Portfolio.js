import React from 'react';

export default function Portfolio() {
  return (
    <div className="container">
      <section className = "container">
        <div className="row">
          <figure className="col-12 project1">
            <h2>Sprout Spy</h2>
            <a href="https://fast-cliffs-81659.herokuapp.com/" target="_blank">
              <img src="./images/SproutSpy.jpg" alt="screenshot of SproutSpy website"/>
            </a>
          </figure>
        </div>
        <div className="row d-flex justify-content-around">
          <figure className="col-12 col-lg-5 project">
            <h2>Weather Dashboard</h2>
            <a href="https://erinnmatesi.github.io/Weather-Dashboard/" target="_blank">
              <img src="./images/WeatherDashboard.PNG" alt="screenshot of SproutSpy website" className="prjImg"/>
            </a>
          </figure>
          <figure className="col-12 col-lg-5 project">
            <h2>Javascript Quiz</h2>
            <a href="https://erinnmatesi.github.io/Javascript-Quiz/" target="_blank">
              <img src="./images/JSQuiz.PNG" alt="screenshot of SproutSpy website" className="prjImg"/>
            </a>
          </figure>
        </div>
        <div className="row d-flex justify-content-around">
          <figure className="col-12 col-lg-5 project">
            <h2>CSS Cheatsheet</h2>
            <a href="https://erinnmatesi.github.io/CSS-CheatSheet/" target="_blank">
              <img src="./images/Cheatsheet.PNG" alt="screenshot of blocks of CSS code" className="prjImg"/>
            </a>
          </figure>
          <figure className="col-12 col-lg-5 project">
            <h2>Employer Tracker</h2>
            <a href="https://github.com/ErinnMatesi/Employee-Tracker" target="_blank">
              <img src="./images/Screenshot.PNG" alt="screenshot of app in use" className="prjImg"/>
            </a>
          </figure>
          </div>
      </section>
    </div>
  );
};