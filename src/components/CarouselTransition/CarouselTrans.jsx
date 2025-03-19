import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './crouselStyles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

/**
 * 
 * @returns this carousel is used here to show the animation
 * like interface in the hompage of the app...
 */
function CarouselTrans() {
  return (
    <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="/images/book-6957870.jpg" className='w-full' alt="Highlight website intro by using image" />
            < TextInsideTheCarousel color='blue' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/wallpaper.jpg" className='w-full' alt="Highlight website intro by using image" />
            < TextInsideTheCarousel color='white' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/pexels-pixabay-356079.jpg" className='w-full' alt="Highlight website intro by using image" />
            < TextInsideTheCarousel color='white' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/pexels-leeloothefirst-5428830.jpg" className='w-full' alt="Highlight website intro by using image" />
            < TextInsideTheCarousel color={'blue'} />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/loop-circular-collage-concept.jpg" className='w-full' alt="Highlight website intro by using image" />
            < TextInsideTheCarousel color='white' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/2148459910.jpg" className='w-full' alt="Highlight website intro by using image" />
            < TextInsideTheCarousel color='white' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/man-hitchhiking-road.jpg" className='w-full' alt="Highlight website intro by using image" />
            < TextInsideTheCarousel color='white' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/120021.jpg" className='w-full' alt="Highlight website intro by using image" />
            < TextInsideTheCarousel color='black' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/7323.jpg" className='w-full' alt="Highlight website intro by using image" />
            < TextInsideTheCarousel color='white' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default CarouselTrans

function TextInsideTheCarousel(props){
  return(
    <>
      <span className='text-4xl sm:text-6xl md:text-3xl lg:text-6xl xl:text-9xl font-serif font-bold absolute'>
        {"CAREER LIFT".split('').map((letter, index) => (
          <span
            key={index}
            style={{
              color: props.color,
              animation: `otherAnimationVisible${index} 1s ease-in-out infinite alternate`,
              animationDelay: `${index * 0.1}s`,
              transformOrigin: 'center',
              marginRight: letter === ' ' ? '0.6em' : '0.1em',
            }}
            className="inline-block"
          >
            {letter}
          </span>
        ))}
      </span>
      <style>
        {(() => {
          let styles = "";
          "Career Lift System".split('').forEach((letter, index) => {
            styles += `
              @keyframes otherAnimationVisible${index} {
                from {
                  transform: translateY(0px);
                }
                to {
                  transform: translateY(5px);
                }
              }
            `;
          });
          return styles;
        })()}
      </style>
    </>
  )
}