import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import Portrait from '../assets/portrait.jpg';
import Icon from './Icon';
import '../styles/aboutMeStyle.scss';

function AboutMe() {
  const [visible, setVisible] = useState(false);
  return (
    <InView
      as="main"
      id="about-me"
      onChange={(inView: boolean) => setVisible(inView)}
    >
      {visible ? (
        <>
          <img src={Portrait} alt="Héctor González Orozco" />
          <h1>
            <span>About Me</span>
          </h1>
          <div>
            <p>Full-stack software developer and Computer Music Composer.</p>
            <br />
            <p>
              I've been composing and performing Interactive Computer Music
              using <a href="https://supercollider.github.io/">SuperCollider</a>{" "}
              for the past 5 years. Recently finished an MA in music, where I
              focused on developing systems for interactive music performance, my
              thesis can be found{" "}
              <a href="https://github.com/hectorgonzalezo/thesis">here</a>. 
            </p>
            <br />
            <p>
              I've been interested in web development every since I was a teenager
              and discovered how easy it was to make simple websites using basic
              HTML and CSS. I just went crazy and started creating random websites
              and sharing them with friends.
            </p>
            <br />
            <p>
              Ever since I've been passionate about creating from scratch using code, 
              be it music, instruments or webpages. So, last year I decided to 
              start learning modern web development seriously.
            </p>
            <br />
            <p>
              One of the things that excites me so much about programming is the 
              fact that you are always kept on your toes: I just love learning new
              technologies. I'm therefore excited about a 
              career that involves life-long learning, that means I'll never be bored!
            </p>
          </div>
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
        </>
      ) : null}
    </InView>
  );
}

export default AboutMe;
