import React from "react";
import { Link } from "react-router-dom";

function Jobs() {
  return (
    <>
      <div className="bg-slate-900 h-screen">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Explore Jobs</span>
            <span className="block text-indigo-600">
              Discover your next career opportunity
            </span>
          </h2>
          <h1 className="text-2xl font-bold text-white">
            Pending page..
            <br />
            Design this page to give the recommendations to the user to show the
            content for all the given options ( Blue color option's ) to click
            ... In this page here is to working like... Fetch the random data
            from the database and show the content to the user..
          </h1>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to=""
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Search Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
