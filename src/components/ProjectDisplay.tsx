import React from 'react';
import Button from './Button';
import Icon from './Icon';

interface ProjectProps {
  img: string;
  name: string;
  liveUrl: string;
  repoUrl: string;
  stack: string[]
}

function ProjectDisplay({ img, name, liveUrl, repoUrl, stack } : ProjectProps) {
  const stackIconUrls: { [index: string]: string} = {
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
    Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    Webpack: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
  };
  return (
    <article className="project" data-live-site-url={liveUrl} data-code-url={repoUrl}>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <div className="stack">
        {stack.map((technology) => (
          <Icon text={technology} key={`${name}-${technology}`}>
            <img
              key={`${name}-${technology}-img`}
              id={technology === "Express" ? "express" : ""}
              src={stackIconUrls[technology]}
              alt=""
            />
          </Icon>
        ))}
      </div>
    </article>
  );
};

export default ProjectDisplay;
