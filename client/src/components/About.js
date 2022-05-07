import React from 'react';

export default function About() {
  return (
    <div className="container">
      <section className = "container" id="about-me">
        <h1>About Me</h1>  
        <div className="row d-flex justify-content-around"> 
          <img className="col-12 col-lg-3" src="./images/Headshot.jpg" alt="Headshot of brunette female with black jacket over white-blue striped shirt, on blurred green background" width="200px" height="250px" id="headshot"/> 
          <section className ="col-12 col-lg-7">
            <p>Hello! My name is Erinn and I am currently a student in the UW fullstack bootcamp. I am familiarizing myself with HTML, CSS, Javascript, jQuery and Bootstrap on the front-end. Node.js, React and others are yet to come.</p>
            <br/> 
            <p>I am a PNW native who believes in the preservation and recovery of our environment. I look forward to learning how your company aligns with that value!</p>
          </section>
        </div>
      </section>
    </div>
  );
};