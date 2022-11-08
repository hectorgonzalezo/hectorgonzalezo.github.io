import React from 'react';

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
    </article>
  )
};

export default ProjectDisplay;
