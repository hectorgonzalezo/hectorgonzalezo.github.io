import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import ProjectDisplay from './ProjectDisplay';
import '../styles/projectsStyle.scss';

function Projects() {
  const [visible, setVisible] = useState(false);
  return (
    <InView
      as="section"
      onChange={(inView: boolean) => setVisible(inView)}
      id="projects"
    >
      {visible ? (
        <>
          <h1>
            <span>Projects</span>
          </h1>
          <div>
            <ProjectDisplay
              img="https://getflywheel.com/wp-content/uploads/2017/07/min-tour-example-1.png"
              name="Reddit clone"
              info="A reddit clone made with react, redux and firebase"
              liveUrl='https://reddit-clone-83ce9.web.app/'
              repoUrl='https://github.com/hectorgonzalezo/reddit-clone'
            />
          </div>
        </>
      ) : null}
    </InView>
  );
}

export default Projects;
