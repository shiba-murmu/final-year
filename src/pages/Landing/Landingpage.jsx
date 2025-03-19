import React, { useRef, useState, useEffect } from "react";

// import react icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { Link } from "react-router-dom";
// import required modules
import { EffectCards } from "swiper/modules";

{
  /* <From>
  </From> */
}
// import styles from './ComponentName.module.css'
import "./Landingpage.css";

function SomeAnimation() {
  return (
    <>
      {/* This component is used here as carousel animation effects. */}
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper swiper2 mt-12"
      >
        <SwiperSlide className=" slide"></SwiperSlide>
        <SwiperSlide className=" slide"></SwiperSlide>
        <SwiperSlide className=" slide"></SwiperSlide>
        <SwiperSlide className=" slide"></SwiperSlide>
        <SwiperSlide className=" slide"></SwiperSlide>
        <SwiperSlide className=" slide"></SwiperSlide>
        <SwiperSlide className=" slide"></SwiperSlide>
        <SwiperSlide className=" slide"></SwiperSlide>
        <SwiperSlide className=" slide"></SwiperSlide>
      </Swiper>
    </>
  );
}

function HeadingAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const elements = textRef.current.querySelectorAll(".letter");
    const intervalId = setInterval(() => {
      if (elements.length > 0) {
        elements[currentIndex].style.transform = "rotate(0deg)";
        setTimeout(() => {
          elements[currentIndex].style.transform = "rotate(360deg)";
        }, 200);
        setCurrentIndex((currentIndex + 1) % elements.length);
      }
    }, 400);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <>
      <h1
        className="text-4xl md:text-6xl font-bold text-white mb-6"
        ref={textRef}
      >
        {[...String("Career Lift")].map((letter, index) => (
          <span
            key={index}
            className="letter"
            style={{
              transitionDelay: `${index * 0.2}s`,
              marginRight: letter === " " ? "0.3em" : "0.1em",
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </>
  );
}

function DesignedDemo() {
  return (
    <>
      <section className="relative landingBackground  h-screen">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-center h-screen">
            <div className="w-full lg:w-1/2">
              <div className="mt-20 lg:mt-0">
                <HeadingAnimation />
                <h2 className="text-2xl  md:text-4xl font-semibold text-white mb-6">
                  Your Career Guidance Partner
                </h2>
                <p className="text-md font-thin md:text-xl text-white mb-12">
                  Find your next career opportunity today, with Career Lift. Our
                  AI-powered platform helps you discover the best career paths
                  based on your strengths, interests, and skills. Get started
                  today and take your career to the next level!
                </p>
                <Link
                  to="/home"
                  className="px-6 py-3 text-lg font-bold text-white bg-transparent items-center w-48 flex border-blue-600 border-2  hover:bg-blue-700 focus:outline-none "
                >
                  <div className="">Get started</div>
                  <div>
                    <HiOutlineArrowNarrowRight className="ml-2 m-0" size={27} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative w-1/2">
              {/* Adding some animation here.../ */}

              <SomeAnimation />

              {/* <h2>hello world</h2> */}
              {/* <img
                    src="https://evaltest.com/static/media/career-after-12th.332a1409.jpg"
                    alt="Motivated student"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * This component is the main component of the landing page.
 * where it will be export as default.
 * @returns
 */
function Landingpage() {
  return (
    <>
      <DesignedDemo />

      {/* <div className="bg-gradient-to-r from-gray-900 to-cyan-900 h-screen flex justify-center items-center shadow-lg">
        <div className="container mx-auto p-6 md:p-16 md:w-2/3 rounded-lg bg-opacity-75 ">
          <h1 className="text-6xl text-center font-extrabold text-yellow-300">
            Welcome to Career Lift
          </h1>
          <p className="text-2xl text-center text-white mt-6">
            Find your next career opportunity today
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              to="/homepage"
              className="bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full"
            >
              Get started →
            </Link>
          </div>
        </div>
      </div> */}
      {/* < PageIntro /> */}
      {/* Used Minor components for the landing page */}
      {/* <LandingPageContent /> */}
    </>
  );
}

export default Landingpage;
