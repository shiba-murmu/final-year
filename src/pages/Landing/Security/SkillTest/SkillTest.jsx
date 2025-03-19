import React from "react";
import { Link } from "react-router-dom";
function SkillTest() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold">Skill Test</h1>
        <div className="grid grid-cols-3 gap-4 p-4">
          <Link to="/Landing/Security/SkillTest/Programming">
            <div className="bg-white rounded-md p-4 shadow-md">
              <h2 className="text-2xl font-bold">Programming</h2>
              <p>Test your programming skills</p>
            </div>
          </Link>
          <Link to="/Landing/Security/SkillTest/DataScience">
            <div className="bg-white rounded-md p-4 shadow-md">
              <h2 className="text-2xl font-bold">Data Science</h2>
              <p>Test your data science skills</p>
            </div>
          </Link>
          <Link to="/Landing/Security/SkillTest/CyberSecurity">
            <div className="bg-white rounded-md p-4 shadow-md">
              <h2 className="text-2xl font-bold">Cyber Security</h2>
              <p>Test your cyber security skills</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SkillTest;
