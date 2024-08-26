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
              Over the past year, I've gained experience as a full stack
              developer at an AI startup. I developed and maintained user
              interfaces and APIs used by leading consumer goods companies to
              improve their promotional return on investment using Machine
              Learning. I also played a key role in conceptualizing, designing,
              and implementing the company's flagship feature, which led to a
              20% increase in new business registrations within about 6 months.
            </p>
            <br />
            <p>
              Recently, I earned my{" "}
              <a href="https://www.credly.com/badges/dbf23a92-3ff2-4519-8129-f3b895ebb7f2/linked_in?t=siu01g">
                AWS Developer – Associate certification
              </a>
              , which has deepened my understanding of cloud computing and
              expanded my ability to build and manage applications on AWS. This
              certification has equipped me with the skills to create more
              scalable, secure, and efficient solutions.
            </p>
            <br />
            <p>
              I've been developing and performing with interactive music systems
              using <a href="https://supercollider.github.io/">SuperCollider</a>{" "}
              for about 10 years. In a nutshell, these systems involve employing
              some sort of electronic controller and a piece of software that
              produces sound based on data sent in real time by the controller,
              using a client-server architecture. You can read more about them
              in <a href="https://blog-client-mern.netlify.app/">my blog</a>. I
              have an MA degree in experimental music, where I focused on this
              topic. My thesis can be found{" "}
              <a href="https://github.com/hectorgonzalezo/thesis">here</a>.
            </p>
            <br />

            <p>
              I've always been interested in web development since I was a
              teenager, discovering how easy it was to make simple websites
              using basic HTML and CSS. I went crazy and started creating random
              websites and sharing them with friends. Ever since, I've been
              passionate about expressing my creativity through code, whether
              it's music, instruments, or webpages.
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
