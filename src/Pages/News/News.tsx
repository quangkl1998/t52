import Activities from "Components/Activities/Activities";
import FormFindOffice from "Components/FormFindOffice/FormFindOffice";
import Outstanding from "Components/Outstanding/Outstanding";
import Story from "Components/Story/Story";
import React from "react";

const News = () => {
    return (
        <div>
            <Outstanding />
            <Activities />
            <Story />
            <FormFindOffice />
        </div>
    );
};

export default News;
