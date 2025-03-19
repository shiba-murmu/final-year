// Main comment for the whole file
/*
This is the window like component for the matriculation, intermediate and graduation content
to show as per user onclick the options.

this component work like container and this container 
will show only that part user wants to see.

Here we have created a function named renderContent
which will render the contents based on the id
*/

/**
 * This file is used for to show the contents to the page
 * for different situations here..
 */
import React from "react";
import { useParams } from "react-router-dom";
import Matriculation from "./Matriculation";
import Intermediate from "./Intermediate";
import Graduation from "./Graduation";
import CompetitiveExam from "./CompetitiveExam";
import Jobs from "./Jobs";
import { HiArrowRight } from "react-icons/hi"; // this for icons used here

function heading() {
  /**
   * This heading is the background heading where we have 
   * some background images...
   */
  const { id } = useParams();
  const HeadingUI = (props) => {
    return (
      <>
        {/* last time code generated here.. */}
        <div>
          {/* this div is used for style the heading part of this page
           */}
          <div
            className="background  p-2 h-28 md:h-80 flex items-center justify-center text-center shadow-lg"
            style={{ backgroundImage: `url(${props.bgimg})` }}
          >
            <h3 className="text-4xl md:text-6xl font-bold text-white">
              {props.stage}
            </h3>
          </div>
        </div>
      </>
    );
  };
  const renderContentsForHeading = (id) => {
    /**
     * In this function we will render the contents
     * based on the id
     * also passing image path as props to update dynamically
     * background images.
     * In future we can add more images as per the requirement or
     * we can manage it dynamically from the database.
     */
    switch (id) {
      case "1":
        // matriculation
        return (
          <HeadingUI
            stage="CAREER AFTER MATRICULATION"
            bgimg="/images/mart.jpg"
          />
        );
      case "2":
        // intermediate
        return (
          <HeadingUI
            stage="CAREER AFTER INTERMEDIATE"
            bgimg="/images/study1.jpg"
          />
        );
      case "3":
        // graduation
        return (
          <HeadingUI
            stage="CAREER AFTER GRADUATION"
            bgimg="/images/study6.jpg"
          />
        );
      case "4":
        // jobs
        return <HeadingUI stage="JOBS VACANCIES" bgimg="/images/wall.jpg" />;
      case "5":
        // competitive exams
        return (
          <HeadingUI stage="COMPETITIVE EXAMS" bgimg="/images/wallpaper.jpg" />
        );
    }
  };

  return <>{renderContentsForHeading(id)}</>;
}

// *********************************************Blue option for every page *************************************************
function optionsOfThePage() {
  /**
   * Here also implement id based rendering
   * because we have to change the options dynamically
   * based on the id...
   * 
   * In this component we can add more options as per 
   * the id's requirement.
   */
  const { id } = useParams();

  const RenderOptions = (id) => {
    switch (id) {
      case "1":
        // matriculation
        return (
          <>
            <div className="bg-blue-500 flex px-4 justify-evenly md:flex-row flex-col gap-4 md:gap-0 ">
              <button  className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">

                EXPLORE HIGHER COURSES
                <HiArrowRight size={20} />
              </button>

              <button className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">
                COMPETITIVE EXAMS
                <HiArrowRight size={20} />
              </button>

              <button className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white  font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">
                JOBS VACANCIES
                <HiArrowRight size={20} />
              </button>
            </div>
          </>
        );
      case "2":
        // intermediate
        /**
         * These option redering for intermadiate page..
         */
        return (
          <>
            <div className="bg-blue-500 flex px-4 justify-evenly md:flex-row flex-col gap-4 md:gap-0 ">
              <button className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">
                EXPLORE HIGHER COURSES
                <HiArrowRight size={20} />
              </button>

              <button className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">
                COMPETITIVE EXAMS
                <HiArrowRight size={20} />
              </button>

              <button className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white  font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">
                JOBS VACANCIES
                <HiArrowRight size={20} />
              </button>
            </div>
          </>
        );
      case "3":
        // graduation
        /**
         * This options rendering for graduation page
         */
        return (
          <>
            <div className="bg-blue-500 flex px-4 justify-evenly md:flex-row flex-col gap-4 md:gap-0 ">
              <button className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">
                EXPLORE HIGHER COURSES
                <HiArrowRight size={20} />
              </button>

              <button className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">
                COMPETITIVE EXAMS
                <HiArrowRight size={20} />
              </button>

              <button className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white  font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">
                JOBS VACANCIES
                <HiArrowRight size={20} />
              </button>
            </div>
          </>
        );
      case "4":
        // jobs
        /**
         * This options rendering for jobs page
         */
        return (
          <>
            <div className="bg-blue-500 flex px-4 justify-evenly md:flex-row flex-col gap-4 md:gap-0 ">
              <button className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">
                LOCATION BASED JOBS
                <HiArrowRight size={20} />
              </button>

              <button className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">
                OTHER JOBS SEARCH
                <HiArrowRight size={20} />
              </button>

              <button className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white  font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">
                JOBS VACANCIES
                <HiArrowRight size={20} />
              </button>
            </div>
          </>
        );
      case "5":
        // Competitive exams
        /**
         * This options rendering for competitive exams here...
         */
        return (
          <>
            <div className="bg-blue-500 flex px-4 justify-evenly md:flex-row flex-col gap-4 md:gap-0 ">
              <button className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">
                GOVERNMENT EXAMS
                <HiArrowRight size={20} />
              </button>

              <button className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">
                PRIVATE EXAMS
                <HiArrowRight size={20} />
              </button>

              <button className="bg-blue-500 flex items-center gap-4 hover:bg-blue-700 hover:scale-105 transition duration-300 text-white  font-medium text-lg py-3 px-8 rounded-0 md:w-1/3 w-full">
                OTHERS
                <HiArrowRight size={20} />
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <>
      {/* This function will show the options */}
      {RenderOptions(id)}
    </>
  );
}

// *********************************************************************************************************************




// ********************************************* Main function *******************************************************
/**
 * 
 * @param {Main functions for this file...} param0 
 * @returns 
 */
export default function ContentWindow() {
// main function of this page here all the content will render from according to
// the id's passed.../

  // This function will show the content based on the id's
  const { id } = useParams();

  const renderContent = (id) => {
    switch (id) {
      case "1":
        /**
         * Here id is 1
         * this is the matriculation page rendering function
         * ..
         */
        return (
          // This is the main content
          // heading
          <>
            {heading(id)}
            {optionsOfThePage()}
            <Matriculation />
          </>
        );
      case "2":
        /**
         * Here id is 2
         * this is the intermediate page rendering function
         * ...
         */
        return (
          <>
            {heading(id)}
            {optionsOfThePage()}
            <Intermediate />
          </>
        );
      case "3":
        /**
         * Here id is 3
         * this is the graduation page rendering function
         * ...
         */
        return (
          <>
            {heading(id)}
            {optionsOfThePage()}
            <Graduation />
          </>
        );
      case "4":
        /**
         * Here id is 4
         * this is the jobs page rendering function
         * ...
         */
        return (
          <>
            {heading(id)}
            {optionsOfThePage()}
            <Jobs />
          </>
        );
      case "5":
        /**
         * Here id is 5
         * this is the competitive exams page rendering function
         * ...
         */
        return (
          <>
            {heading()}
            {optionsOfThePage()}
            <CompetitiveExam />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* this navbar for the content to change as per user click the options */}
      {/* Here in this part we can write some logic 
      to show the content based on the id above the main content to show. */}
      {renderContent(id)}
    </>
  );
}
// **************************************************************************************************