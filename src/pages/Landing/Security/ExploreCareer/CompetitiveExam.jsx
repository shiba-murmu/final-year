import React from "react";

function CompetitiveExam() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Pending page..
        <br />
        Design this page to give the recommendations to the user to show the
        content for all the given options ( Blue color option's ) to click ...
        In this page here is to working like... Fetch the random data from the
        database and show the content to the user..
      </h1>
      <h1 className="text-4xl font-bold mb-4">Competitive Exams</h1>
      <ul className="list-disc">
        <li>JEE Main</li>
        <li>JEE Advanced</li>
        <li>NEET</li>
        <li>UPSC</li>
        <li>SSC</li>
        <li>IBPS</li>
        <li>CLAT</li>
        <li>NDA</li>
        <li>CTET</li>
      </ul>
    </div>
  );
}

export default CompetitiveExam;
