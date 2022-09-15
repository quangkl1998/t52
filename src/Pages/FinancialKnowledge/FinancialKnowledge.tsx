import Action from "Components/Action/Action";
import Activities from "Components/Activities/Activities";
import FormFindOffice from "Components/FormFindOffice/FormFindOffice";
import Outstanding from "Components/Outstanding/Outstanding";
import Questions from "Components/Questions/Questions";
import React from "react";

const FinancialKnowledge = () => {
    return (
        <div>
            <div className="lg:h-28 h-20"></div>
            <Outstanding />
            <Activities />
            <Action />
            <Questions />
        </div>
    );
};

export default FinancialKnowledge;
