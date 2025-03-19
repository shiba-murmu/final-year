import React from "react";
import { Link, NavLink } from "react-router-dom";

function Card( props ) {

    /**
     * Here we have created a card function
     * 
     * the props are used to pass the values from the parent component as object
     * to the child component
     * here we have used props.Big_Text and props.Small_Description to access the 
     * content for specific cards
     */

    /**
     * In this card function it takes two arguments
     * 
     * 1. BigText
     * 2. SmallDescription
     * 3. width
     * 
     * to pass some values in it so it will render text in the card
     * as per the situations where it is used..
     */

    return (
      <>
        <div className={`w-full sm:w-1/2 md:w-1/3 xl:${props.width} p-6 m-3  bg-white   shadow-lg dark:bg-gradient-bg2 dark:border-gray-700 `}>
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-yellow-400 animate-bounce">
              {props.Big_Text}
            </h5>
          </div>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.Small_Description}
          </p>
          <NavLink
            to=''
            className="inline-flex items-center px-3 py-2 text-sm font-thin text-center text-white bg-blue-700 hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {/* 
            Here in this read more button we can add the link to the page
            where the user can read more about the specific card
  
            So the idea is that we have to prove ourself to the user 
            that why they will take our services and why they should choose us.
            
            */}
            Explore
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </NavLink>
        </div>
      </>
    );
  }

export default Card