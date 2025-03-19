import React from "react";

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
      <div className="bg-gradient-bg2 h-auto  shadow-lg p-8 flex flex-col items-center justify-center">
        <div className="text-5xl  font-bold text-blue-300 mb-4">
          About Career Lift
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            heading="Our Mission "
            className="md:col-start-1 md:row-start-1"
            text="Explore different career paths and find the one that suits you best.Our mission is to provide a platform where students can explore their career options and get the best possible guidance for their future."
            text2="Take our skill test to find out your strengths and weaknesses in different areas. We believe that the best way to succeed in life is to learn from our mistakes and take action"
          />
          <Card
            heading="Our Vision"
            className="md:col-start-3 md:row-start-1"
            text="Our vision is to be the most trusted and widely used career guidance platform in the world."
            text2=" We want to be the first place that students go to when they are
              trying to figure out what to do with their lives. We want to
              provide a platform that is free, open source, and accessible to
              everyone. We want to make it easy for students to find the
              information they need to make informed decisions about their
              future."
          />
          < Card
            heading="Our Values"
            className="md:col-start-1 md:row-start-2"
            text="Our values are to provide a platform that is free, open source, and accessible to everyone."
            text2=" We value the importance of providing a platform that is
              accessible to everyone, regardless of their background or
              socio-economic status. We believe that everyone should have
              access to the resources and information they need to make
              informed decisions about their future."
          />
        </div>
      </div>
    </>

  );
}

export default About;
