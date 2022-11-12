import AboutT52 from "Components/AboutT52/AboutT52";

import CoreValues from "Components/CoreValues/CoreValues";

import Future from "Components/Future/Future";
import Questions from "Components/Questions/Questions";

const About = () => {
    return (
        <div className="bg-gray-100">
            <div className="lg:h-28 h-20"></div>
            <h2 className=" text-red-600 md:text-3xl uppercase font-bold text-2xl mb-0 md:mb-3 md:leading-6 text-center py-10">
                Về T52
            </h2>
            <AboutT52 />
            <CoreValues />
            <Future />
            <Questions />
        </div>
    );
};

export default About;
