import React, { useState } from 'react';
import SwiperCore, { EffectCoverflow, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { InView } from 'react-intersection-observer';
import ProjectDisplay from './ProjectDisplay';
import redditGif from '../assets/gifs/reddit.gif';
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

  // SwiperCore.use([EffectCoverflow, Pagination]);

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
              rotate: 65,
              scale: 0.8,
              stretch: 0,
              depth: 10,
              modifier: 1,
              slideShadows: false,
            }}
            navigation
            className="mySwiper"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <ProjectDisplay
                img={redditGif}
                name="Reddit clone"
                info="A reddit clone made with react, redux and firebase"
                liveUrl="https://reddit-clone-83ce9.web.app/"
                repoUrl="https://github.com/hectorgonzalezo/reddit-clone"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectDisplay
                img={battleshipGif}
                name="Battleship Game"
                info="Game made using vanilla javascript"
                liveUrl="https://hectorgonzalezo.github.io/battleship/"
                repoUrl="https://github.com/hectorgonzalezo/battleship"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectDisplay
                img={storeGif}
                name="Shopping Cart App"
                info="Online store made with React"
                liveUrl="https://hectorgonzalezo.github.io/shopping-cart/"
                repoUrl="https://github.com/hectorgonzalezo/shopping-cart"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectDisplay
                img={waldoGif}
                name="Find me"
                info={`Character finding game based on "Where's Waldo?".\n
                Made with React.`}
                liveUrl="https://hectorgonzalezo.github.io/shopping-cart/"
                repoUrl="https://github.com/hectorgonzalezo/shopping-cart"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectDisplay
                img={memoryGif}
                name="Memory Card Game"
                info="Rick and Morty card game made with React"
                liveUrl="https://hectorgonzalezo.github.io/memory-card/"
                repoUrl="https://github.com/hectorgonzalezo/memory-card"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectDisplay
                img={ticGif}
                name="Tic-Tac-Toe"
                info="Tic-Tac-Toe game made with vanilla Javascript."
                liveUrl="https://hectorgonzalezo.github.io/tic-tac-toe/"
                repoUrl="https://github.com/hectorgonzalezo/tic-tac-toe"
              />
            </SwiperSlide>
          </Swiper>
        </>
      ) : null}
    </InView>
  );
}

export default Projects;
