import React from 'react';

export default function About() {
  return (
    <div>
      <div>
        <h1 id="intro">Erinn - Fullstack Developer</h1>
      </div>
      <div className="aboutMe">
        <img src="./images/Headshot.jpg" alt="Headshot of brunette female with black jacket over white-blue striped shirt, on blurred green background" width="200px" height="250px" id="headshot"/> 
        <section className ="blurb">
          <p>Hello! My name is Erinn and I am a <b>fullstack web developer</b> with a strong background in sales and account management.</p>
          <br></br>
          <p>I recently earned a certificate in full stack development from the University of Washington, with newly developed skills in <b>JavaScript, Node, Sequelize and React</b>, to name a few.</p>
          <br></br>
          <p>I am experienced in <b>highly communicative</b> team environments, while also being independently responsible for timelines and project completion.</p>
          <br></br>
          <p>During the bootcamp, I leveraged my <b>interpersonal skills</b> to provide support to team members and maintain drive toward completing all group project requirements.</p> 
          <br></br>
          <p>Stepping into a new field is extraordinarily exciting and I plan to use both tenured social and newly acquired <b>technical skills</b> to help the team I join to continue to develop innovative solutions.</p>
          <br></br>
          <a href="./Resume - Erinn Matesi.pdf" target="_blank">Click here to download my resume!</a>
        </section>
      </div>
      <div class="technologies">
        <h2 id="techHeader">Technologies</h2>
        <div class="techFlex">
          <ul class="techList">
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
          <ul class="techList">
            <li>React</li>
            <li>MySQL</li>
            <li>Node</li>
            <li>Express</li>
          </ul>
          <ul class="techList">
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>Git</li>
            <li>JawsDB</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};