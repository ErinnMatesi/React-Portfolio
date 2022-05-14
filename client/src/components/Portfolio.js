import React from 'react';
import Project from './Project';

export default function Portfolio() {
  const projectsArray = [
    {
      title: "Sprout Spy",
      description: "A web application that allows users to find their agricultural zone and which plants can be grow locally.",
      image: "./images/SproutSpy.jpg",
      deployedLink: "https://fast-cliffs-81659.herokuapp.com/",
      githubLink: "https://github.com/got-git-group/SproutSpy"
    },
    {
      title: "Weather Dashboard",
      description: "A simple dashboard that takes a city input and displays the current weather conditions and a 5-day forecast.",
      image: "./images/WeatherDashboard.PNG",
      deployedLink: "https://erinnmatesi.github.io/Weather-Dashboard/",
      githubLink: "https://github.com/ErinnMatesi/Weather-Dashboard"
    },
    {
      title: "Javascript Quiz",
      description: "A quiz about Javascript built by Javascript!",
      image: "./images/JSQuiz.PNG",
      deployedLink: "https://erinnmatesi.github.io/Javascript-Quiz/",
      githubLink: "https://github.com/ErinnMatesi/Javascript-Quiz"
    },
    {
      title: "CSS Cheatsheet",
      description: "Quick reference code blocks for CSS.",
      image: "./images/Cheatsheet.PNG",
      deployedLink: "https://erinnmatesi.github.io/CSS-CheatSheet/",
      githubLink: "https://github.com/ErinnMatesi/CSS-CheatSheet"
    },
    // {
    //   title: "",
    //   description: "",
    //   image: "",
    //   deployedLink: "",
    //   githubLink: ""
    // },
  ]
  return (
    <div className="container">
      <section className="cardContainer">
        {projectsArray.map(proj => (
        <Project project={proj} />
      ))}
      </section>
      
    </div>
  );
};