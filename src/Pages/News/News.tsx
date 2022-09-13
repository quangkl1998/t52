import Activities from "Components/Activities/Activities";
import FormFindOffice from "Components/FormFindOffice/FormFindOffice";
import Outstanding from "Components/Outstanding/Outstanding";
import Story from "Components/Story/Story";
import React from "react";

const News = () => {
    return (
        <div>
            <div className="lg:h-32 h-20"></div>
            <Outstanding />
            <Activities />
            <Story />
            <FormFindOffice />
        </div>
    );
};

export default News;
