import React from 'react';

export default function Project({ project }) {
  return (
    <section className="projectCard">
      <h4><b>{project.title}</b></h4>
      <img className="projectImg" src={project.image} alt="screenshot of SproutSpy website" />
      <section className="projectLinks">
        <p>{project.description}</p>
        <br></br>
        <a href={project.deployedLink} target="_blank">Deployed Site</a>
        <br></br>
        <a href={project.githubLink} target="_blank">GitHub Repository</a>
      </section>
    </section>
  )
};