import React from "react";
import "./about.css";
function Card(props) {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="text-2xl font-bold mb-2">{props.heading}</div>
        <p className="text-gray-600">{props.text}</p>
        <p className="text-gray-600 mt-6">{props.text2}</p>
      </div>
    </>
  );
}
function About() {
  return (
    <>
      <div className="back  w-full h-auto  shadow-lg p-8 flex flex-col justify-center">
        <div className="text-9xl font-thin text-white  mb-4">About Us</div>

        <div className="flex">
          <div className="w-1/2">{/* Content for the first half */}</div>
          <div className="w-1/2">
            <span className="text-7xl text-white font-thin">OUR MISSION</span>
            <div className="bg-transparent p-8">
              <p className="text-white text-xl leading-relaxed">
                Our mission is to provide a platform for students to explore
                their career options after completing their education. We aim to
                provide a comprehensive guide for students to make informed
                decisions about their future careers. Our platform will provide
                information about various career options, the skills and
                qualifications required, the job market and the opportunities
                available in different fields.
              </p>
              <p className="text-white text-xl leading-relaxed">
                We believe that every individual has the potential to excel in
                their chosen career, and our platform will provide them with the
                necessary tools and resources to achieve their goals. We will
                provide a platform for students to connect with industry
                professionals, entrepreneurs, and thought leaders in their
                chosen field, providing them with valuable insights and
                mentorship.
              </p>
              <p className="text-white text-xl leading-relaxed">
                Our mission is to empower students to make informed decisions
                about their future careers, and to provide them with the
                necessary skills and knowledge to succeed in their chosen field.
                We believe that by providing students with access to the right
                information and resources, we can help them achieve their full
                potential and make a positive impact in the world.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div>
            <span className="text-7xl text-white font-thin">OUR VISION</span>
            <div>
              <p className="text-white text-xl leading-relaxed">
                Our vision is to create a world where every individual has the
                opportunity to achieve their full potential, regardless of their
                background or circumstances. We believe that education should be
                accessible to all, and that everyone should have the opportunity
                to pursue their dreams and make a positive impact in the world.
              </p>
              <p className="text-white text-xl leading-relaxed">
                We envision a world where students are empowered to make
                informed decisions about their future careers, and have access
                to the resources and support they need to succeed. We see a
                world where students are not limited by their circumstances, but
                are able to reach their full potential and make a positive
                impact in the world.
              </p>
              <p className="text-white text-xl leading-relaxed">
                Our vision is to create a platform that is accessible to all
                students, regardless of their background or circumstances. We
                believe that every student deserves the opportunity to succeed,
                and that our platform can provide them with the necessary tools
                and resources to achieve their goals.
              </p>
              <p className="text-white text-xl leading-relaxed">
                We envision a world where students are able to connect with
                industry professionals, entrepreneurs, and thought leaders in
                their chosen field, and have access to valuable insights and
                mentorship. We see a world where students are able to learn from
                their peers, and are able to share their own experiences and
                insights with others.
              </p>
              <p className="text-white text-xl leading-relaxed">
                Our vision is to create a platform that is user-friendly,
                intuitive, and easy to use. We believe that technology should be
                accessible to all, and that our platform should be able to be
                used by anyone, regardless of their technical skills.
              </p>
              <p className="text-white text-xl leading-relaxed">
                We envision a world where education is not limited to the
                classroom, but is accessible to all, at any time and from any
                place. We see a world where students are able to learn at their
                own pace, and are able to access the resources and support they
                need to succeed, whenever and wherever they want.
              </p>
              <p className="text-white text-xl leading-relaxed">
                Our vision is to create a platform that is constantly evolving
                and improving, and that is able to adapt to the changing needs
                of students. We believe that our platform should be able to
                provide students with the latest information and resources, and
                should be able to provide them with the support and guidance
                they need to succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
