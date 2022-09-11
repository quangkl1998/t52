import Activities from "Components/Activities/Activities";
import FormFindOffice from "Components/FormFindOffice/FormFindOffice";
import Outstanding from "Components/Outstanding/Outstanding";
import React from "react";

const FinancialKnowledge = () => {
    return (
        <div>
            <Outstanding />
            <Activities />
            <FormFindOffice />
        </div>
    );
};

export default FinancialKnowledge;
