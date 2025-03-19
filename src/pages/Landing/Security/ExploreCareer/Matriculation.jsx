import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import AfterMatricCourse from "./MatriculationData/MatriculationCourse";
import MatriculationExams from "./MatriculationData/MatriculationExams";
import MatriculationJobs from "./MatriculationData/MatriculationJobs";

function Matriculation() {
  const [showContent, setShowContent] = useState("Exams");

  const handleOptionClick = (option) => {
    setShowContent(option);
  };

  // handleOptionClick("Exams");

  const renderContent = (option) => {
    switch (showContent) {
      case "home":
        return (
          <>
            <AfterMatricCourse />
          </>
        );
      case "Exams":
        // return <MatriculationExams />;
        return (
          <>
            <MatriculationExams />
          </>
        );

      case "Jobs":
        return <MatriculationJobs />;
      default:
        return null;
    }
  };

  return (
    <>
      <div>
        {/* < MatriculationContentChange/> */}

        {/* Here show other parts for the page */}
        {/* To understand the person to what to do here for the page */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-blue-950">
            <p className="text-white text-sm md:text-base mt-4">
              Above navlinks are used for to navigate to the different parts of
              the page. By clicking on the Join courses you will be redirected
              to the page where you can join courses related to the career you
              want to persue. By clicking on the Compitative exams you will be
              redirected to the page where you can see the compitative exams
              related to the career you want to persue. By clicking on the Jobs
              vacancies you will be redirected to the page where you can see the
              jobs vacancies related to the career you want to persue.
            </p>
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              Pending page..
              <br />
              Design this page to give the recommendations to the user to show
              the content for all the given options ( Blue color option's ) to
              click ... In this page here is to working like... Fetch the random
              data from the database and show the content to the user..
            </h1>
          </div>
        </div>
        {/*dynamic contents for this page here...  */}
        <main>{renderContent()}</main>
      </div>
    </>
  );
}

export default Matriculation;
