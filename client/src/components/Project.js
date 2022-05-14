import React from 'react';

export default function Project({ project }) {
  return (
    <section className="projectCard">
      <img className="projectImg" src={project.image} alt="screenshot of SproutSpy website" />
      <section className="projectLinks">
        <h4><b>{project.name}</b></h4>
        <p>{project.description}</p>
        <a href={project.deployedLink} target="_blank">Deployed Site</a>
        <a href={project.githubLink} target="_blank">GitHub Repository</a>
      </section>
    </section>
  )
};