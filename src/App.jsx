import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Landingpage from "./pages/Landing/Landingpage.jsx";
import Signup from "./pages/Landing/Security/SignUp/Signup.jsx";
// import Login from "./pages/Landing/Security/login/Login.jsx";
import Login from "./pages/Landing/Security/Login/Login.jsx";
import ExploreCareer from "./pages/Landing/Security/ExploreCareer/ExploreCareer.jsx";
import SkillTest from "./pages/Landing/Security/SkillTest/SkillTest.jsx";
import Content from "./pages/Landing/Security/AISuggestion/Content.jsx";
import UserProfile from "./pages/Landing/Security/SignUp/User/UserProfile.jsx";
import ContentWindow from "./pages/Landing/Security/ExploreCareer/ContentWindow.jsx";

/*
  SCROLLING ISSUE FOR THE AFTER REDIRECT TO THE DIFFERENT ROUTES
  Explanation:
  ScrollToTop uses the useLocation hook to detect when the URL path changes.
  The useEffect hook is triggered whenever the pathname changes, and it scrolls the window to the top (window.scrollTo(0, 0)).
  Adding this component ensures that when you navigate to a new page, it automatically scrolls to the top of the page, solving the issue you're facing.
*/

const UseScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
    /**
     * Means this page will render at the top of the page 
     * automatically whenever the routes changes 
     */
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <UseScrollToTop />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Sign Up" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Explore Career" element={<ExploreCareer />} />
          <Route path="/Skill test" element={<SkillTest />} />
          <Route path="/Profile" element={<UserProfile />} />
          <Route path="/AI suggestion" element={<Content />} />
          <Route path="/ContentWindow/:id" element={<ContentWindow />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
