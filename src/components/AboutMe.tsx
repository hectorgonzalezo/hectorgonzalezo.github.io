import React from 'react';
import Portrait from '../assets/portrait.jpg';
import Icon from './Icon';
import '../styles/aboutMeStyle.scss';

function AboutMe() {
  return (
    <section id="about-me">
      <img src={Portrait} alt="Héctor González Orozco" />
      <h1><span>About Me</span></h1>
      <p>info</p>
      <ul>
        <li>
          <h2>Languages</h2>
          <Icon text="Html">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
              alt="HTML 5"
            />
          </Icon>
          <Icon text="Css">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
              alt="CSS 3"
            />
          </Icon>
          <Icon text="Javascript">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              alt="JavaScript"
            />
          </Icon>
          <Icon text="Typescript">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
              alt="TypeScript"
            />
          </Icon>
          <Icon text="Python">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
            />
          </Icon>
        </li>
        <li>
          <h2>Tools</h2>
          <Icon text="Git">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
              alt="Git"
            />
          </Icon>
          <Icon text="React">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
          </Icon>
          <Icon text="Redux">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="Redux"
            />
          </Icon>
          <Icon text="Node">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
              alt="Node"
            />
          </Icon>
          <Icon text="Jest">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              alt="Jest"
            />
          </Icon>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
