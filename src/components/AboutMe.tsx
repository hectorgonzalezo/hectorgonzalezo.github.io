import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import Portrait from '../assets/portrait.jpeg';
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
          <h1>About Me</h1>
          <div className="text">
          <h2>Full stack developer</h2>
            <br />
            <p>
              I've been developing and performing with interactive music systems
              using <a href="https://supercollider.github.io/">SuperCollider</a>{" "}
              for more than 5 years. In a nutshell, these systems involve employing
              some sort of electronic controller and a piece of software that produces
              sound based on data sent in real time by the controller, using a 
              client-server architecture, you can reade more about them in{" "}
              <a href="https://blog-client-mern.netlify.app/">my blog</a>
              . Recently finished an MA in experimental music, 
              where I focused on said topic, my thesis can be found{" "}
              <a href="https://github.com/hectorgonzalezo/thesis">here</a>.

            </p>
            <br />
            <p>
              I've been interested in web development every since I was a
              teenager and discovered how easy it was to make simple websites
              using basic HTML and CSS. I just went crazy and started creating
              random websites and sharing them with friends.
            </p>
            <br />
            <p>
              Ever since, I've been passionate about expressing my creativity using
              code, be it music, instruments or webpages. So, last year I
              decided to start learning modern web development seriously.
            </p>
            <br />
            <p>
              One of the things that excites me so much about software development is the
              fact that you are always kept on your toes: I just love learning
              new technologies. I'm excited about a career that
              involves life-long learning, that means I'll never be bored!
            </p>
          </div>
          <div className="tools">
          <ul>
              <h2>Languages</h2>
            <li>
              <Icon text="HTML">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                  alt="HTML 5"
                />
              </Icon>
              <Icon text="CSS">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                  alt="CSS 3"
                />
              </Icon>
              <Icon text="JavaScript">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                  alt="JavaScript"
                />
              </Icon>
              <Icon text="TypeScript">
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
              <h2>Tools</h2>
            <li>
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
              <Icon text="Express">
                <img
                  id="express"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  alt="Express"
                />
              </Icon>
              <Icon text="MongoDB">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDb"
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
          </div>
        </>
      ) : null}
    </InView>
  );
}

export default AboutMe;
