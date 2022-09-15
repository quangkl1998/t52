import AboutT52 from "Components/AboutT52/AboutT52";

import CoreValues from "Components/CoreValues/CoreValues";

import Future from "Components/Future/Future";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="lg:h-36 h-20"></div>
      <AboutT52 />
      <CoreValues />

      <Future />
    </div>
  );
};

export default About;
