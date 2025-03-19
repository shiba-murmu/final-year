import React from "react";
import { useState, useRef } from "react";

// import icons here
import { FaRobot } from "react-icons/fa";
// importing other components here
import Aichat from "./Aichat/Aichat";
// importing icons
import { IoCloseSharp } from "react-icons/io5";
const AIroom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClick = (e) => {
    if (ref.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="bg-yellow-400 rounded-full fixed top-[90vh] left-[93vw] transform -translate-x-1/2 -translate-y-1/2 grid place-content-start hover:scale-105 transition duration-300 ease-in-out hover:bg-blue-700 text-white font-bold p-3"
        onClick={() => setIsOpen(!isOpen)}
      >
       <FaRobot size={40}/>
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
          onClick={handleClick}
        >
          <div
            ref={ref}
            className="bg-white shadow-lg rounded-lg p-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div>
              {/* This div will be shown in the center */}
              
              < Aichat />

            </div>
            <button
              className="bg-gray-500 absolute top-1 right-1 hover:bg-gray-700 text-white font-bold p-1 rounded"
              onClick={() => setIsOpen(false)}
            >
             <IoCloseSharp size={25} />
            </button>
          </div>
        </div>
      )}    
    </>
  );
};
// export default OffcanvasComponent;

function Content() {
  return (
    <>
      <AIroom />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 to-gray-900">
        <div className="container mx-auto p-4 md:p-12 lg:p-24">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-3xl font-bold mb-4">AI Suggestion</h2>
            <p className="text-gray-600 text-lg mb-8">
              Leverage AI to receive personalized suggestions for your career path. Our AI analyzes your skills, interests, and goals to provide tailored guidance.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Your Suggestion
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
