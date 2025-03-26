import React from "react";
import { Link, NavLink } from "react-router-dom";
import Card from "../../../../components/Card/Card";
import "../../Landingpage.css";

// importing matriculation page
// import Matriculation from "../Matriculation/Matriculation";
// Import personal css files
import "./ExploreCareer.css";
// Import icons here
import { TbArrowBigDownLinesFilled } from "react-icons/tb";

function ContentsPart() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="bg-green-950">
          <p className="text-justify text-white">
            Choosing a career path after matriculation can be a daunting task
            for many students. With so many options available, it can be
            difficult to decide which path to take. At Career Lift, we
            understand the importance of making an informed decision about your
            career. That's why we've created a comprehensive guide to help you
            explore different career paths and find the one that suits you best.
            Whether you're interested in pursuing a career in science, commerce,
            arts, or vocational courses, we've got you covered. Our guide
            provides detailed information about each career path, including the
            job prospects, salary ranges, and growth opportunities. We also
            provide information about the skills and qualifications required for
            each career path, so you can make an informed decision about which
            path to take. With our guide, you'll be able to make a confident
            decision about your career and start working towards your goals.
          </p>
        </div>
        <div className="items-center flex justify-end bg-slate-700">
          <Card
            width={"w-full"}
            backgroundColor="bg-black"
            Big_Text="After Matriculation"
            Small_Description="Explore different career paths and find the one that suits you best after 10th grade. Career Lift provides you with a wide range of career options to choose from, including Science, Commerce, Arts, Vocational courses, and many more. Take our Skill Test to find out which career path is best for you. Find out more about the courses and colleges that offer them. Explore different career paths and find the one that suits you best after 10th grade."
          />
        </div>
      </div>
    </>
  );
}
function ExplanationForContent() {
  return (
    <>
      <div className="flex flex-col">
        <div className=" bg-[#dedada] p-10">
          {/* This part has the some explanations */}
          <p className="text-justify bg-white text-md text-black shadow-xl p-10 ">
            Choosing the right career path is a crucial decision that can impact
            your entire life. At Career Lift, we understand the importance of
            making an informed decision about your career. That's why we've
            created a comprehensive guide to help you explore different career
            paths and find the one that suits you best. Whether you're
            interested in pursuing a career in science, commerce, arts, or
            vocational courses, we've got you covered. Our guide provides
            detailed information about each career path, including the job
            prospects, salary ranges, and growth opportunities. We also provide
            information about the skills and qualifications required for each
            career path, so you can make an informed decision about which path
            to take.
            <br />
            <br />
            The buttons below are just a few examples of the many career paths
            that you can explore. By clicking on each button, you'll be taken to
            a page that provides more detailed information about that particular
            career path. You'll also have the opportunity to take our Skill Test
            to find out which career path is best for you. So, take the first
            step towards your dream career today!
          </p>
        </div>

        <div>{/* Some animation part here */}</div>
      </div>
    </>
  );
}

function ExploreCareer() {
  /*
  This is the main function for the file to 
  render the content.
  */
  return (
    <>
      <div className="flex flex-wrap bg-gradient-to-r imageBackground p-6 md:p-10">
        <div className="w-full md:w-1/2 p-4 md:p-10 ">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="girl coding"
            className="rounded-lg shadow-lg shadow-slate-300 w-full"
          />
        </div>

        <div className="w-full text-center md:w-1/2 p-4 md:p-10">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Explore Different Career Paths
          </h1>
          <p className="text-lg md:text-xl text-black">
            Choosing the right career path is a crucial decision that can impact
            your entire life. At Career Lift, we understand the importance of
            making an informed decision about your career. That's why we've
            created a comprehensive guide to help you explore different career
            paths and find the one that suits you best.
          </p>
          <div className="flex justify-center mt-6 md:mt-10">
            <Link
              to="/Skill Test"
              className="bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-0"
            >
              Take Our Skill Test
            </Link>
          </div>
        </div>
      </div>

      {/* adding other design */}
      {/* <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
          How to Use This Page
        </h2>
        <p className="text-md md:text-lg text-center mb-6">
          Welcome to the Career Lift Explore Page! Follow these steps to make the most out of your experience:
        </p>
        <ol className="list-decimal list-inside text-md md:text-lg text-center space-y-2">
          <li>Read through the career path options provided.</li>
          <li>Take the Skill Test to identify your strengths and interests.</li>
          <li>Click on "View Path" buttons to explore detailed information about each career path.</li>
          <li>Use the resources provided to make informed decisions about your future.</li>
          <li>Contact us if you have any questions or need further guidance.</li>
        </ol>
        <div className="flex justify-center mt-6">
          <NavLink to="/Contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </NavLink>
        </div>
      </div> */}

      {/* This is the main content for the page.. */}
      <div>
        {/* Suppose video content addition here  */}
        <div>
          <div className="video-background-container p-6">
            <video autoPlay muted loop className="background-video">
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Content over the video */}
            <div>
              <div className="text-white bg-opacity-40  bg-slate-900 text-center p-6 md:p-10 rounded-lg shadow-lg w-full md:w-1/2 my-10 mr-auto ml-0">
                <h1 className="text-2xl md:text-4xl font-bold">
                  What will you do after Graduation
                </h1>
                <p className="text-md  md:text-lg md:px-10">
                  After graduation, you have a wide range of options to choose
                  from. You can opt for further studies, vocational training, or
                  enter the workforce. Whatever path you choose, it's essential
                  to have a clear understanding of your strengths and interests.
                  At Career Lift, we provide you with the tools and resources
                  you need to make informed decisions about your future. Take
                  our Skill Test to discover your strengths and interests, and
                  explore different career paths that align with them. Our
                  comprehensive guide will help you make a confident decision
                  about your career and set you on the path to success.
                </p>
                <div className="flex justify-center mt-6 md:mt-10">
                  <NavLink to="/ContentWindow/3">
                    <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-0">
                      View path
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* This contents are the cards contents here... */}

        {/* For graduation level */}
        {/* In level some more design will be added... */}

        {/* <div className="bg-slate-950 p-6 md:p-10 rounded-lg shadow-lg w-full">
          <div className="bg-sky-400 text-center p-6 md:p-10 rounded-lg shadow-lg w-full md:w-1/2 my-10 mr-auto ml-0">
            <h1 className="text-2xl md:text-4xl font-bold">
              What will you do after Graduation
            </h1>
            <p className="text-md  md:text-lg md:px-10">
              After graduation, you have a wide range of options to choose from.
              You can opt for further studies, vocational training, or enter the
              workforce. Whatever path you choose, it's essential to have a
              clear understanding of your strengths and interests. At Career
              Lift, we provide you with the tools and resources you need to make
              informed decisions about your future. Take our Skill Test to
              discover your strengths and interests, and explore different
              career paths that align with them. Our comprehensive guide will
              help you make a confident decision about your career and set you
              on the path to success.
            </p>
            <div className="flex justify-center mt-6 md:mt-10">
              <NavLink to="/ContentWindow/3">
                <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-0">
                  View path
                </button>
              </NavLink>
            </div>
          </div>
        </div> */}

        {/* Add another one for Intermediate level*/}
        <div className="imageBackground p-12">
          <div className="bg-slate-900 text-white border-2  shadow-slate-300 text-center p-6 md:p-10 mb-10 rounded-lg shadow-lg w-full md:w-1/2  mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold">
              What will you do after 12th
            </h1>
            <p className="text-md md:text-lg md:px-10">
              After 12th, you have a wide range of options to choose from. You
              can opt for higher education, vocational training, or even enter
              the workforce directly. Whatever path you choose, it's essential
              to have a clear understanding of your strengths and interests. At
              Career Lift, we provide you with the tools and resources you need
              to make informed decisions about your future. Take our Skill Test
              to discover your strengths and interests, and explore different
              career paths that align with them. Our comprehensive guide will
              help you make a confident decision about your career and set you
              on the path to success.
            </p>
            <div className="flex justify-center mt-6 md:mt-10">
              <NavLink to="/ContentWindow/2">
                <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-0">
                  View path
                </button>
              </NavLink>
            </div>
          </div>

          {/* Add one for matriculation level */}

          <div className="bg-gray-900 text-white shadow-slate-300 border-2  p-6 md:p-10 rounded-lg mb-10  shadow-lg w-full md:w-1/2 ml-auto mr-0">
            <h1 className="text-2xl md:text-4xl font-bold text-center">
              What will you do after Matriculation
            </h1>
            <p className="text-md md:text-lg text-center md:px-10">
              After matriculation, you have a wide range of options to choose
              from. You can opt for higher education, vocational training, or
              even enter the workforce directly. Whatever path you choose, it's
              essential to have a clear understanding of your strengths and
              interests. At Career Lift, we provide you with the tools and
              resources you need to make informed decisions about your future.
              Take our Skill Test to discover your strengths and interests, and
              explore different career paths that align with them. Our
              comprehensive guide will help you make a confident decision about
              your career and set you on the path to success.
            </p>
            <div className="flex justify-center mt-6 md:mt-10">
              <NavLink to={"/ContentWindow/1"}>
                <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-0">
                  View path
                </button>
              </NavLink>
            </div>
          </div>

          <div className="text-white border-2 border-white shadow-slate-300  bg-gray-800 p-6 md:p-10 mb-10  rounded-lg shadow-lg w-full md:w-1/2 mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-center">
              Explore job Opportunities
            </h1>
            <p className="text-md md:text-lg text-center md:px-10">
              As a job seeker, you have a wide range of options to choose from.
              You can search for jobs, internships, and volunteer opportunities
              on various job portals. At Career Lift, we provide you with the
              tools and resources you need to make informed decisions about your
              future. Take a look at our extensive list of job portals and
              explore different career paths that align with them. Our
              comprehensive guide will help you make a confident decision about
              your career and set you on the path to success.
            </p>
            <div className="flex justify-center mt-6 md:mt-10">
              <NavLink to={"/ContentWindow/4"}>
                <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-0">
                  Explore opportunities
                </button>
              </NavLink>
            </div>
          </div>

          {/* card for competitive exams */}

          <div className="border-2 border-white bg-slate-900  shadow-slate-300 text-white p-6 md:p-10 mb-10 rounded-lg shadow-lg w-full md:w-1/2 mr-auto ml-0">
            <h1 className="text-2xl md:text-4xl font-bold text-center">
              Competitive Exams
            </h1>
            <p className="text-md md:text-lg text-center md:px-10">
              Are you preparing for a competitive exam? At Career Lift, we
              provide you with the tools and resources you need to succeed. Take
              a look at our extensive list of competitive exams and explore
              different career paths that align with them. Whether you're
              preparing for a government exam, a management entrance exam, or a
              technical exam, we've got you covered. Our comprehensive guide
              will help you make a confident decision about your career and set
              you on the path to success. With our expert advice and guidance,
              you'll be able to prepare for your exam with confidence and
              achieve your goals. So why wait? Start exploring your options
              today and take the first step towards a successful career.
            </p>
            <div className="flex justify-center mt-6 md:mt-10">
              <NavLink to={"/ContentWindow/5"}>
                <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-0">
                  Explore competitive exams
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="py-6 landingBackground ">
        <h2 className="text-8xl flex text-blue-300 justify-center flex-col items-center   pl-2 font-bold">
          <span className="text-white">Explore Your Next </span>
          <span style={{ color: "yellow" }} className="pl-1">
            {" "}
            Career Path{" "}
          </span>
          <div>
            <TbArrowBigDownLinesFilled size={80} />
          </div>
        </h2>
      </div>

      <ExplanationForContent />

      <div className="w-full grid place-content-center bg-[#0A2540] h-[50rem] md:h-[40rem] lg:h-[40rem]">
        <div className=" w-full md:w-[75vw]">
          <div className="imageBackground  flex flex-col sm:flex-row justify-evenly font-normal text-3xl p-10 m-2 text-black">
            <NavLink  className="bg-[#ffffff] p-9 shadow-2xl transition transform duration-500 ease-in-out  hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
              After Matriculation
            </NavLink>
            <NavLink className="bg-[#ffffff] p-9 shadow-2xl transition transform duration-500 ease-in-out  hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
              After Intermediate
            </NavLink>
            <NavLink className="bg-[#ffffff] p-9 shadow-2xl transition transform duration-500 ease-in-out  hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
              After Graduation
            </NavLink>
          </div>
          <div className="imageBackground bg-black flex justify-evenly flex-col  sm:flex-row  font-normal text-3xl p-10 m-2 text-black">
            <NavLink className="bg-[#ffffff] p-9 shadow-2xl transition transform duration-500 ease-in-out  hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
              Competitive Exams
            </NavLink>
            <NavLink className="bg-[#ffffff] p-9 shadow-2xl transition transform duration-500 ease-in-out  hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
              Find your job
            </NavLink>
          </div>
        </div>
      </div>

      <hr /> */}
    </>
  );
}

export default ExploreCareer;

{
  /* <div className="bg-green-600 flex flex-col">
        <ContentsPart />
        <div>
          <Card
            width={"w-1/2"}
            backgroundColor="bg-black"
            Big_Text="After Intermediate"
            Small_Description="Discover a plethora of career opportunities available to you after completing 12th grade. Career Lift guides you through streams like Engineering, Medicine, Law, Management, and more. Whether you are inclined towards Science, Arts, or Commerce, we help you explore courses, colleges, and career paths that align with your interests and abilities. Equip yourself with the right knowledge and skills for a successful future by understanding the diverse options and making informed decisions."
          />
        </div>
        <div>
          <Card
            width={"w-1/2"}
            backgroundColor="bg-black"
            Big_Text="After Graduation"
            Small_Description="Explore different career paths and find the one that suits you bestExplore different career paths and find the one that suits you bestExplore different career paths and find the one that suits you best."
          />
        </div>
        <div>
          <Card
            width={"w-1/2"}
            backgroundColor="bg-black"
            Big_Text="Others Competitive Exams"
            Small_Description="Explore different career paths and find the one that suits you bestExplore different career paths and find the one that suits you bestExplore different career paths and find the one that suits you best."
          />
        </div>

        <div>
          <Card
            width={"w-1/2"}
            backgroundColor="bg-black"
            Big_Text="Explore Jobs in your area"
            Small_Description="Explore different career paths and find the one that suits you best in your area.Explore different career paths and find the one that suits you best in your area.Explore different career paths and find the one that suits you best in your area.Explore different career paths and find the one that suits you best in your area.Explore different career paths and find the one that suits you best in your area.Explore different career paths and find the one that suits you best in your area.Explore different career paths and find the one that suits you best in your area."
          />
        </div>
      </div> */
}
