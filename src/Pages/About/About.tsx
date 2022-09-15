import AboutT52 from "Components/AboutT52/AboutT52";
import Advantage from "Components/Advantage/Advantage";
import CoreValues from "Components/CoreValues/CoreValues";
import FinancialService from "Components/FinancialService/FinancialService";
import Future from "Components/Future/Future";
import React from "react";

const About = () => {
    return (
        <div className="bg-gray-100">
            <div className="lg:h-28 h-20"></div>
            <AboutT52 />
            <CoreValues />
            <Advantage />
            <Future />
            <FinancialService />
        </div>
    );
};

export default About;
