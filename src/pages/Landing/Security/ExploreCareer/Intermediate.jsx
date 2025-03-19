import React from "react";
import { Link } from "react-router-dom";

function Intermediate() {
  return (
    <>
      <div className="bg-green-300 flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-bold">Career Path After 12th</h1>
        <p className="text-lg text-justify">
          After completing 12th grade, students can pursue various career paths
          depending on their interests, skills, and aptitudes. Some popular
          career paths include engineering, medicine, law, management, and more.
          Students can also choose to pursue vocational courses, diplomas, or
          certifications in a specific field. Additionally, they can explore
          fields like data science, artificial intelligence, cybersecurity, and
          environmental science, which are in high demand in the job market.
        </p>
        <p className="text-lg text-justify">
          Apart from these, students can also opt for online courses, MOOCs, and
          certification programs that can help them develop skills and gain
          knowledge in a specific area. Furthermore, they can also consider
          pursuing higher education in fields like business, finance, or
          international relations.
        </p>
        <h1 className="text-2xl font-bold">
          Pending page..
          <br />
          Design this page to give the recommendations to the user to show the
          content for all the given options ( Blue color option's ) to click ...
          In this page here is to working like... Fetch the random data from the
          database and show the content to the user..
        </h1>
        <Link to="/ExploreCareer/Graduation" className="text-blue-500">
          Explore different career paths and find the one that suits you best
        </Link>
      </div>
    </>
  );
}

export default Intermediate;
