import React, { useState } from 'react';
import SwiperCore, { EffectCoverflow, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { InView } from 'react-intersection-observer';
import Button from './Button';
import ProjectDisplay from './ProjectDisplay';
import redditGif from '../assets/gifs/reddit.gif';
import blogGif from '../assets/gifs/blog.gif';
import battleshipGif from '../assets/gifs/battleship.gif';
import storeGif from '../assets/gifs/store.gif';
import waldoGif from '../assets/gifs/waldo.gif';
import memoryGif from '../assets/gifs/memory.gif';
import ticGif from '../assets/gifs/tic.gif';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import '../styles/projectsStyle.scss';

function Projects() {
  const [visible, setVisible] = useState(false);
  const [liveSiteUrl, setLiveSiteUrl] = useState('');
  const [codeUrl, setCodeUrl] = useState('');

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
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor
            loop
            centeredSlides
            slideToClickedSlide={true}
            spaceBetween={30}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              scale: 0.6,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            className="mySwiper"
            onSlideChange={(swiperCore) => {
              // Extract data for live site and code buttons
              const { realIndex } = swiperCore;
              const projectElement = swiperCore.slides[realIndex].children[0];
              const liveSite = projectElement.getAttribute('data-live-site-url');
              const codeSite = projectElement.getAttribute('data-code-url');
              
              if(typeof liveSite === 'string' && typeof codeSite === 'string'){
                setLiveSiteUrl(liveSite);
                setCodeUrl(codeSite);
              }
          }}
          >
            <SwiperSlide>
              <ProjectDisplay
                img={redditGif}
                name="Reddit clone"
                stack={['TypeScript', 'React', 'Redux', 'Node', 'Express', 'MongoDB', 'Jest']}
                liveUrl="https://reddit-clone-52.netlify.app/"
                repoUrl="https://github.com/hectorgonzalezo/reddit-clone"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectDisplay
                img={blogGif}
                name="Personal Blog"
                stack={['TypeScript', 'React', 'Redux', 'Node', 'Express', 'MongoDB']}
                liveUrl="https://blog-client-mern.netlify.app/"
                repoUrl="https://github.com/hectorgonzalezo/blog-client"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectDisplay
                img={storeGif}
                name="Shopping Cart App"
                stack={['React', 'Jest']}
                liveUrl="https://hectorgonzalezo.github.io/shopping-cart/"
                repoUrl="https://github.com/hectorgonzalezo/shopping-cart"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectDisplay
                img={memoryGif}
                name="Memory Card Game"
                stack={['React', 'Jest']}
                liveUrl="https://hectorgonzalezo.github.io/memory-card/"
                repoUrl="https://github.com/hectorgonzalezo/memory-card"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectDisplay
                img={battleshipGif}
                name="Battleship Game"
                stack={['JavaScript', 'Jest', 'Webpack']}
                liveUrl="https://hectorgonzalezo.github.io/battleship/"
                repoUrl="https://github.com/hectorgonzalezo/battleship"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectDisplay
                img={ticGif}
                name="Tic-Tac-Toe"
                stack={['JavaScript', 'Webpack']}
                liveUrl="https://hectorgonzalezo.github.io/tic-tac-toe/"
                repoUrl="https://github.com/hectorgonzalezo/tic-tac-toe"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectDisplay
                img={waldoGif}
                name="Photo Tagging Game"
                stack={['React', 'TypeScript', 'Node', 'Express', 'MongoDB', 'Jest']}
                liveUrl="https://tagging-game.netlify.app/"
                repoUrl="https://github.com/hectorgonzalezo/tagging-game"
              />
            </SwiperSlide>
          </Swiper>
          <div className="buttons">
          <Button text="Live Site" href={liveSiteUrl} small/>
        <Button text="Code" href={codeUrl} small/>
          </div>
        </>
      ) : null}
    </InView>
  );
}

export default Projects;
