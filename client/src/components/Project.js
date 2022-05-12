import React from 'react';

export default function Project({ project }) {
  return (
    <section className="projectCard">
          <img className="projectImg" src={project.image} alt="screenshot of SproutSpy website" />
          <aside className="projectLinks">
            <a href={project.deployedLink} target="_blank">Deployed Site</a>
            <a href={project.githubLink} target="_blank">GitHub Repository</a>
          </aside>
        </section>
  )
};