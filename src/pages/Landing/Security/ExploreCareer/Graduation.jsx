import React from "react";


function Recommendation(props) {
  const CompetitiveExams = [
    {
      name: "JEE",
      description: "Joint Entrance Examination",
    },
    {
      name: "NEET",
      description: "National Eligibility cum Entrance Test",
    },
    {
      name: "UPSC",
      description: "Union Public Service Commission",
    },
    {
      name: "SSC",
      description: "Secondary School Certificate",
    },
    {
      name: "CBSE",
      description: "Central Board of Secondary Education",
    },
    {
      name: "ICSE",
      description: "Indian Certificate of Secondary Education",
    },
    {
      name: "IGCSE",
      description: "International General Certificate of Secondary Education",
    },
  ];

  const courses = [
    {
      name: "B.Tech",
      description: "Bachelor of Technology",
    },
    {
      name: "M.Tech",
      description: "Master of Technology",
    },
    {
      name: "BBA",
      description: "Bachelor of Business Administration",
    },
    {
      name: "MBA",
      description: "Master of Business Administration",
    },
    {
      name: "BCA",
      description: "Bachelor of Computer Applications",
    },
    {
      name: "MCA",
      description: "Master of Computer Applications",
    },
    {
      name: "B.Com",
      description: "Bachelor of Commerce",
    },
    {
      name: "M.Com",
      description: "Master of Commerce",
    },

    {
      name: "M.Sc",
      description: "Master of Science",
    },
  ];

  const jobs = [
    {
      name: "Software Engineer",
      description: "Software  Engineer",
    },
    {
      name: "Data Scientist",
      description: "Data Scientist",
    },
    {
      name: "Product Manager",
      description: "Product Manager",
    },
    {
      name: "UX Designer",
      description: "UX Designer",
    },
    {
      name: "UI Designer",
      description: "UI Designer",
    },
    {
      name: "Frontend Developer",
      description: "Frontend Developer",
    },
    {
      name: "Backend Developer",
      description: "Backend Developer",
    },
    {
      name: "Full Stack Developer",
      description: "Full Stack Developer",
    },
  ];

  const RenderCards = ({ heading, description }) => {
    /**
     * main component in this srcipt
     */
    return (
      <>
        <div className="w-60 m-5">
          <div className="bg-white rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-40"
              src="/images/engineering-image.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-4 py-2">
              <div className="font-bold text-lg mb-1">{heading}</div>
              <p className="text-gray-700 text-xs pt-1 h-5 overflow-y-hidden">{description}</p>
            </div>
            <div className=" pt-2 ">
              <span className="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 mr-1 mb-1">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 mr-1 mb-1">
                #travel
              </span>
              {/* <span className="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 mr-1 mb-1">
                #winter
              </span>  */}
              <button className="bg-blue-500 w-full m-0">
                <span className="text-md text-white">Explore</span>
                 {/* Redirect to other page so that it will explore the details for 
                this career.!! */}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  const renderJobs = () => {
    return (
      <>
        <RenderCards
          heading={jobs[0].name}
          description={jobs[0].description}
        />
        <RenderCards
          heading={jobs[1].name}
          description={jobs[1].description}
        />
        <RenderCards
          heading={jobs[2].name}
          description={jobs[2].description}
        />
        <RenderCards
          heading={jobs[3].name}
          description={jobs[3].description}
        />
        <RenderCards
          heading={jobs[4].name}
          description={jobs[4].description}
        />
        <RenderCards
          heading={jobs[5].name}
          description={jobs[5].description}
        />
        <RenderCards
          heading={jobs[6].name}
          description={jobs[6].description}
        />
        <RenderCards
          heading={jobs[7].name}
          description={jobs[7].description}
        />
      </>
    );
  }
  const renderExams = () => {
    return (
      <>
        <RenderCards
          heading={CompetitiveExams[0].name}
          description={CompetitiveExams[0].description}
        />
        <RenderCards
          heading={CompetitiveExams[1].name}
          description={CompetitiveExams[1].description}
        />
        <RenderCards
          heading={CompetitiveExams[2].name}
          description={CompetitiveExams[2].description}
        />
        <RenderCards
          heading={CompetitiveExams[3].name}
          description={CompetitiveExams[3].description}
        />
        <RenderCards
          heading={CompetitiveExams[4].name}
          description={CompetitiveExams[4].description}
        />
        <RenderCards
          heading={CompetitiveExams[5].name}
          description={CompetitiveExams[5].description}
        />
        <RenderCards    
          heading={CompetitiveExams[6].name}
          description={CompetitiveExams[6].description}
        />
      </>
    );
  }
  const renderCourses = () => {
    return (
      <>
        <RenderCards
          heading={courses[0].name}
          description={courses[0].description}
        />
        <RenderCards
          heading={courses[1].name}
          description={courses[1].description}
        />
        <RenderCards
          heading={courses[2].name}
          description={courses[2].description}
        />
        <RenderCards
          heading={courses[3].name}
          description={courses[3].description}
        />
        <RenderCards
          heading={courses[4].name}
          description={courses[4].description}
        />
        <RenderCards
          heading={courses[5].name}
          description={courses[5].description}
        />
        <RenderCards
          heading={courses[6].name}
          description={courses[6].description}
        />
        <RenderCards
          heading={courses[7].name}
          description={courses[7].description}
        />
        <RenderCards
          heading={courses[8].name}
          description={courses[8].description}
        />
        {/* < RenderCourseCards heading={courses[9].name} description={courses[9].description}/> */}
        {/* More courses can be added here to explore the courses */}
      </>
    );
  };
  const render = (props) => {
    if (props.service === "Graduation") {
      return renderCourses();
    } else if (props.service === "CompetitiveExams") {
      return renderExams();
    } else {
      return renderJobs();
    }
  };
  return <>{render(props)}</>;
}
function Graduation() {
  /**
   * Main functions here/....
   */
  return (
    <>
      <div>
        {/* <h2></h2> */}
        <div className="bg-gray-300 text-2xl">
          <span className="text-2xl font-semibold bg-yellow-600 px-10 rounded-br-md pb-1">
            Higher studies
          </span>
        </div>
        <div className="bg-slate-300 flex flex-wrap items-center justify-center">
          <Recommendation service="Graduation" />
        </div>

        <div className="bg-slate-300  flex justify-end items-center pr-5 py-5">
          <span className="bg-yellow-500 px-5 py-2 rounded-md" >
            More..
          </span>
        </div>

        <div className="bg-gray-300 text-2xl">
          <span className="text-2xl font-semibold bg-yellow-600 px-10 rounded-br-md pb-1">
            Competitive Exams
          </span>
        </div>
        <div className="bg-slate-300 flex flex-wrap items-center justify-center">
          <Recommendation service="CompetitiveExams" />
        </div>

        <div className="bg-slate-300  flex justify-end items-center pr-5 py-5">
          <span className="bg-yellow-500 px-5 py-2 rounded-md" >
            More..
          </span>
        </div>

        <div className="bg-gray-300 text-2xl">
          <span className="text-2xl font-semibold bg-yellow-600 px-10 rounded-br-md pb-1">
            Job Opportunities
          </span>
        </div>
        <div className="bg-slate-300 flex flex-wrap items-center justify-center">
          <Recommendation service="Jobs" />
        </div>

        <div className="bg-slate-300  flex justify-end items-center pr-5 py-5">
          <a src="#" alt="Explore more contents"  className="bg-yellow-500 px-5 py-2 rounded-md" >
            More..
          </a>
        </div>

      </div>
    </>
  );
}
export default Graduation;


