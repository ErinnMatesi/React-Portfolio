import React from 'react';
import Project from './Project';

export default function Portfolio() {
  const projectsArray = [
    {
      title: "Tech Blog",
      description: "A fullstack blog app that allows user to login to create and delete posts and comments.",
      image: "./images/blog.PNG",
      tech: "HTML - CSS - Bootstrap - Javascript - Express - Node - MySQL - Sequelize - Heroku - JawsDB",
      deployedLink: "https://erinnstechblog.herokuapp.com/",
      githubLink: "https://github.com/ErinnMatesi/Tech-Blog"
    },
    {
      title: "Sprout Spy 2.0",
      description: "Improved version of our gardening app, designed to get the beginner gardener started. Now including a database, user login and CRUD methods on the database.",
      image: "./images/SproutSpy.jpg",
      tech: "HTML - CSS - Bootstrap - Javascript - jQuery - Google Maps API - Google Places API - Node - Express - Sequelize - MySQL - Azure - Handlebars - Heroku",
      deployedLink: "https://fast-cliffs-81659.herokuapp.com/",
      githubLink: "https://github.com/got-git-group/SproutSpy"
    },
      {
      title: "Social Network Backend",
      description: "Backend setup for a social network platform that allows the creation of thoughts that can receive reactions. CRUD methods on the MongoDB database. *Deployed link is a video walkthrough of API calls",
      image: "./images/postmanScreenshot.PNG",
      tech: "Node - Express - MongoDB - Mongoose - Moment",
      deployedLink: "https://drive.google.com/file/d/1OKsS9zu_hSNmyFBGXNmZNGjauzQYKjxv/view",
      githubLink: "https://github.com/ErinnMatesi/Social-Network-API"
    },
    {
      title: "Weather Dashboard",
      description: "A simple dashboard that takes a city input and displays the current weather conditions and a 5-day forecast.",
      image: "./images/WeatherDashboard.PNG",
      tech: "HTML - CSS - Javascript - Bootstrap - jQuery - Moment - OpenWeatherMap API",
      deployedLink: "https://erinnmatesi.github.io/Weather-Dashboard/",
      githubLink: "https://github.com/ErinnMatesi/Weather-Dashboard"
    },
    {
      title: "Javascript Quiz",
      description: "A quiz about Javascript built by Javascript! Track your high score in local storage, wrong answers reduce your time!",
      image: "./images/quizGrab.PNG",
      tech: "HTML - CSS - Javascript",
      deployedLink: "https://erinnmatesi.github.io/Javascript-Quiz/",
      githubLink: "https://github.com/ErinnMatesi/Javascript-Quiz"
    },
    // {
    //   title: "CSS Cheatsheet",
    //   description: "Quick reference code blocks for CSS.",
    //   image: "./images/Cheatsheet.PNG",
    //   tech: "",
    //   deployedLink: "https://erinnmatesi.github.io/CSS-CheatSheet/",
    //   githubLink: "https://github.com/ErinnMatesi/CSS-CheatSheet"
    // },
    // {
    //   title: "",
    //   description: "",
    //   image: "",
    //   tech: "",
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