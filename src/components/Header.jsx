import React from "react";

import { Link, NavLink } from "react-router-dom";
import "./styleComponents/StyleHeader.css";
import Login from "../pages/Landing/Security/login/Login";
import Signup from "../pages/Landing/Security/SignUp/Signup";

import { useEffect, useRef } from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

// Create a functional component that receives `text` and ```path``` as a prop
const TextAnimation = ({ text, path }) => {
  const textRef = useRef(null); // Reference for the text container

  useEffect(() => {
    const elements = textRef.current.querySelectorAll(".letter");

    // Add hover event for rotating letters
    elements.forEach((span, index) => {
      span.style.transitionDelay = `${index * 0.1}s`; // Add delay to each letter
      span.addEventListener("mouseenter", () => {
        span.style.transform = "rotate(360deg)"; // Rotate on hover
      });
      span.addEventListener("mouseleave", () => {
        setTimeout(() => {
          span.style.transform = "rotate(0deg)"; // Reset after delay
        }, 500); // Let animation complete before resetting
      });
    });

    return () => {
      elements.forEach((span) => {
        span.removeEventListener("mouseenter", null);
        span.removeEventListener("mouseleave", null);
      });
    };
  }, [text]);

  // Split text into words and letters
  const words = text.split(" ").map((word, wordIndex) => (
    <span key={wordIndex} className="word">
      {word.split("").map((letter, letterIndex) => (
        <span key={letterIndex} className="letter">
          {letter}
        </span>
      ))}
      &nbsp; {/* Add a space between words */}
    </span>
  ));

  return (
    <NavLink
      ref={textRef}
      to={path}
      className="text-white font-thin animated-text  px-2 inline-block hover:text-blue-300"
    >
      {words}
    </NavLink>
  );
};
const navigation = [
  /**
   * Whenever you add a new page, add it here
   * and this will be shown in the header options
   */
  { name: "CAREER LIFT", to: "/", current: true },
  { name: "HOME", to: "/Home", current: false },
  { name: "EXPLORE CAREER", to: "/Explore Career", current: false },
  { name: "SKILL TEST", to: "/Skill test", current: false },
  { name: "AI SUGGESTION", to: "/AI suggestion", current: false },
  { name: "ABOUT US", to: "/About", current: false },
  { name: "CONTACT US", to: "/Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HeaderOptionsParts() {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-950 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-14 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="sm:hidden block shrink-0 items-center">
                {/* <img
                  alt="Your Company"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                /> */}
                <div className="text-3xl font-extrabold text-center text-white">
                  Career Lift
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block md:block md:ml-8 ">
                <div className="flex  space-x-4 justify-center">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      aria-current={item.current ? "page" : undefined}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? " bg-blue-500 text-white"
                            : "text-gray-300 hover:bg-blue-500 hover:text-white",
                          "px-4 py-2 text-sm"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Below navlink we'll add some functionality to hide when the user sign in into
            their account,. */}
            {/* Here some backend functionality will be applied to the page. */}
            <div className=" font-semibold flex justify-end text-white ">
              {/* <NavLink className="" to="/Profile">
                <div className="relative group">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    className="w-12 h-12"
                    alt=""
                  />
                </div>
              </NavLink> */}

              {/* In the above part we have used here profile icon and below part is the sign in and sign up  */}

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-3 p-1 border-r-2 bg-blue-500"
                    : "px-3 p-1 border-r-2  hover:bg-blue-500"
                }
                to="/Login"
              >
                SIGN IN
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-l-2 p-1 px-3 bg-blue-500"
                    : "border-l-2 p-1 px-3 hover:bg-blue-500"
                }
                to="/Sign Up"
              >
                SIGN UP
              </NavLink>
            </div>

            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button> */}

            {/* Profile dropdown */}
            {/* <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu> */}
            {/* </div> */}
          </div>
        </div>
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                aria-current={item.current ? "page" : undefined}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "text-white hover:bg-gray-700"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}

/**
 *
 * @returns This is the main function
 * which will be exported to show the header
 * to the app..
 */
function Header() {
  return (
    <>
      <HeaderOptionsParts />
    </>
  );
}

export default Header;

/**
 * Below code is for header code which is designed by owned
 * hand but the problem is not to used in this bacause it is not
 * responsive as per the screens.
 *
 * It stored here as comment because the it for the use of
 * future reference of this app..
 */

{
  /* <nav className="bg-gradient-bg p-2">
        <div className="container flex justify-between items-center">
          <div className="text-md bg-slate-800 p-2 px-4 rounded text-white font-bold">
            <Link to="/">Career Lift </Link>
          </div>
          <div className="flex min-[320px]:text-center max-[600px]:bg-sky-300 justify-center items-center space-x-20">
            <NavLink
              to="/homepage"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 bg-slate-600 p-1 px-2 rounded"
                  : "text-white font-thin hover:text-blue-300"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/ExploreCareer"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 bg-slate-600 p-1 px-2 rounded"
                  : "text-white font-thin hover:text-blue-300"
              }
            >
              Explore Careers
            </NavLink>

            <NavLink
              to="/SkillTest"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 bg-slate-600 p-1 px-2 rounded"
                  : "text-white font-thin hover:text-blue-300"
              }
            >
              Skill Test
            </NavLink>

            <div className="relative group">
              <div className="text-white font-thin hover:text-blue-300 flex justify-center items-center relative group">
                Search
                <svg
                  className="w-6  transition-transform duration-300 group-hover:rotate-180 pl-1 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 25 4"
                  stroke="currentColor"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              </div> */
}

{
  /* This is the dropdown and below inside the div just calling the text animation component
                and passing the text and path as props */
}

{
  /* <div className="hidden text-start gap-2 group-hover:flex-col group-hover:flex absolute bg-gradient-bg p-2 text-white w-60 rounded z-10">
                <TextAnimation text="Nearby Colleges" path="/Colleges" />
                <hr />

                <TextAnimation
                  text="Nearby Universities"
                  path="/Universities"
                />
                <hr />

                <TextAnimation text="Nearby Schools" path="/Schools" />
              </div>

            </div>

            <NavLink
              to="/Artificial"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 bg-slate-600 p-1 px-2 rounded"
                  : "text-white font-thin hover:text-blue-300"
              }
            >
              AI Suggestion
            </NavLink>

            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 bg-slate-600 p-1 px-2 rounded"
                  : "text-white font-thin hover:text-blue-300"
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 bg-slate-600 p-1 px-2 rounded"
                  : "text-white font-thin hover:text-blue-300"
              }
            >
              Contact Us
            </NavLink>
          </div>
          <div className="flex space-x-10 justify-center items-center">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 bg-slate-600 p-1 px-2 rounded"
                  : "text-white font-thin hover:text-blue-300"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 bg-slate-600 p-1 px-2 rounded"
                  : "text-white font-thin hover:text-blue-300"
              }
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </nav> */
}
