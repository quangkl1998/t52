import Action from "Components/Action/Action";
import Banner from "Components/Banner/Banner";
import FeaturedNews from "Components/FeaturedNews/FeaturedNews";
import FinancialSolution from "Components/FinancialSolution/FinancialSolution";
import OutStandingService from "Components/OutStandingService/OutStandingService";
import Partner from "Components/Partner/Partner";
import Prize from "Components/Prize/Prize";
import ReView from "Components/ReView/ReView";
import React from "react";

const Home = () => {
    return (
        <div>
            <div className="h-32"></div>
            <Banner />
            <OutStandingService />
            <FinancialSolution />
            <FeaturedNews />
            <div className="flex">
                <ReView />
                <Prize />
            </div>
            <Partner />
            <Action />
        </div>
    );
};

export default Home;
