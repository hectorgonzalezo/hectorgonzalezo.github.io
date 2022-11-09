import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import ProjectDisplay from './ProjectDisplay';
import redditGif from '../assets/gifs/reddit.gif';
import battleshipGif from '../assets/gifs/battleship.gif';
import storeGif from '../assets/gifs/store.gif';
import memoryGif from '../assets/gifs/memory.gif';
import ticGif from '../assets/gifs/tic.gif';

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
              img={redditGif}
              name="Reddit clone"
              info="A reddit clone made with react, redux and firebase"
              liveUrl='https://reddit-clone-83ce9.web.app/'
              repoUrl='https://github.com/hectorgonzalezo/reddit-clone'
            />
            <ProjectDisplay
              img={battleshipGif}
              name="Battleship Game"
              info="Game made using vanilla javascript"
              liveUrl='https://hectorgonzalezo.github.io/battleship/'
              repoUrl='https://github.com/hectorgonzalezo/battleship'
            />
            <ProjectDisplay
              img={storeGif}
              name="Shopping Cart App"
              info="Online store made with React"
              liveUrl='https://hectorgonzalezo.github.io/shopping-cart/'
              repoUrl='https://github.com/hectorgonzalezo/shopping-cart'
            />
             <ProjectDisplay
              img={storeGif}
              name="Shopping Cart App"
              info="Online store made with React"
              liveUrl='https://hectorgonzalezo.github.io/shopping-cart/'
              repoUrl='https://github.com/hectorgonzalezo/shopping-cart'
            />
             <ProjectDisplay
              img={memoryGif}
              name="Memory Card Game"
              info="Rick and Morty card game made with React"
              liveUrl='https://hectorgonzalezo.github.io/memory-card/'
              repoUrl='https://github.com/hectorgonzalezo/memory-card'
            />
             <ProjectDisplay
              img={ticGif}
              name="Tic-Tac-Toe"
              info="Tic-Tac-Toe game made with vanilla Javascript."
              liveUrl='https://hectorgonzalezo.github.io/tic-tac-toe/'
              repoUrl='https://github.com/hectorgonzalezo/tic-tac-toe'
            />
          </div>
        </>
      ) : null}
    </InView>
  );
}

export default Projects;
