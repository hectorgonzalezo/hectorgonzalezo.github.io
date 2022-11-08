import React from 'react';
import Button from './Button';
import linkIcon from '../assets/link-icon.svg';
import githubIcon from '../assets/github-icon.png';


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
      <Button text="Live Site" href={liveUrl} small />
      <Button text="Code" href={repoUrl} small />
    </article>
  )
};

export default ProjectDisplay;
