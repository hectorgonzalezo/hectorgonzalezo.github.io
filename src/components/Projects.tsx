import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

function Projects() {
  const [visible, setVisible] = useState(false);
  return (
       <InView
      as="section"
      onChange={(inView: boolean) => setVisible(inView)}
      id="projects"
    >
      {visible ? 
      <>
      <h1><span>Projects</span></h1>
      <div>
      </div>
      </>
      :null}
      </InView>
  )
}

export default Projects;
