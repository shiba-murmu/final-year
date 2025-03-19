import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import CarouselTrans from "../components/CarouselTransition/CarouselTrans";
// import Card from "../components/Card/Card";

function WhyShouldChoose() {
  return (
    <>
      <div className="min-h-96">
        <span className="text-3xl m-4 mt-4 font-semibold">
         why should we choose us ?
        </span>
        <br />
        <span className="text-6xl m-4 mt-4 font-semibold">
          Pending work..
        </span>
        
      </div>
    </>
  );
}

function LocalCard(props) {
  // This card is used here as local because it is only used here
  // it is not used in any other page
  // And this card work as to show the content to the user that what types of services we provide
  return (
    <>
      <div className="mb-11 text-black max-w-96 p-4 shadow-lg rounded-lg border hoverAnimation">
        {/* main heading of the card written here */}
        <h2 className="text-2xl text-start font-semibold">{props.heading}</h2>
        <p>{props.content}</p>
      </div>
    </>
  );
}

function WebsiteWorking(props) {
  return (
    <>
      <div className="mb-11 bg-transparent text-white max-w-96 p-4 shadow-lg rounded-lg border hoverAnimation">
        <span className="text-2xl  mt-4 font-semibold">{props.heading}</span>
        <p>{props.content}</p>
      </div>
    </>
  );
}
function PageDesignAndContent() {
  return (
    <>
      <div className="min-h-80 bg-slate-100 flex flex-row justify-evenly flex-wrap pt-16">
        <LocalCard
          heading="Personalized Career Advice"
          content="Get help here to learn the career options here to bring the self adjustments here to imporve the situations."
        />
        <LocalCard
          heading="Course Recommendations"
          content="Dicover courses to improve your skills and boost your career."
        />
        <LocalCard
          heading="Job Opportunities"
          content="Find jobs based on your qualifications and location."
        />
        <LocalCard
          heading="AI Assistant"
          content="Get help with our AI assistant, boost your future with us."
        />
      </div>
      {/* 
      
          Working part to show the working of the website
      
      */}

      <div>
        <div className="text-center p-4 h-30 flex justify-center items-center bg-indigo-950 ">
          <span className="text-3xl text-teal-100 m-4 mt-4 font-semibold">
            How it works 
          </span>
        </div>
        <div className="min-h-80 websiteWorkingContainerBackground flex flex-row justify-evenly flex-wrap pt-16">
          <WebsiteWorking
            heading="Step 1"
            content="Create an account or login to your account , so that you can use our services."
          />
          <WebsiteWorking
            heading="Step 2"
            content="Select the services you want to use and get started."
          />
          <WebsiteWorking
            heading="Step 3"
            content="Get help with our AI assistant, boost your future with us."
          />
          <WebsiteWorking
            heading="Step 4"
            content="Search for job opportunities based on your qualifications and location."
          />
          <WebsiteWorking
            heading="Step 5"
            content="Get help to take our Skill Test to find out which career path is best for you."
          />
        </div>
      </div>
    </>
  );
}

function Homepage() {
  /**
   * Main function for
   * for this page to render..
   */
  return (
    <>
      <CarouselTrans />
      {/* above tag is used here to show the image slider */}
      {/* why should you choose use content */}
      <WhyShouldChoose />
      {/* Above componennt here is used for to show the user 
          that why should you choose us and what are the features of this website */}
      <PageDesignAndContent />
      {/* This tag is used here to write the content for the homepage of this website. */}
    </>
  );
}

export default Homepage;
