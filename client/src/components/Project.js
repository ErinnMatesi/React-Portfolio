import React from 'react';

export default function Project({ project }) {
  return (
    <section className="projectCard">
      <h4><b>{project.title}</b></h4>
      <img className="projectImg" src={project.image} alt="screenshot of SproutSpy website" />
      <section className="projectDetails">
        <p id="projDescrip">{project.description}</p>
        <br></br>
        <h5 id="techUsed">Technologies Used</h5>
        <p id="techs">{project.tech}</p>
        <br></br>
        <a class="projLinks" href={project.deployedLink} target="_blank">Deployed Site</a>
        <br></br>
        <a class="projLinks" href={project.githubLink} target="_blank">GitHub Repository</a>
      </section>
    </section>
  )
};