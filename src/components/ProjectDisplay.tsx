import React from 'react';
import Button from './Button';

interface ProjectProps {
  img: string;
  name: string;
  info: string;
  liveUrl: string;
  repoUrl: string;
}

function ProjectDisplay({ img, name, info, liveUrl, repoUrl } : ProjectProps) {
  return (
    <article className='project'>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>{info}</p>
      <div className="buttons-area">
        <Button text="Live Site" href={liveUrl} small label={name} />
        <Button text="Code" href={repoUrl} small label={name} />
      </div>
    </article>
  )
};

export default ProjectDisplay;
