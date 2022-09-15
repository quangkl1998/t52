import Questions from "Components/Questions/Questions";
import Transaction from "Components/Transaction/Transaction";
import React from "react";

const StoresNearYou = () => {
    return (
        <div>
            <div className="lg:h-28 h-20"></div>
            <Transaction />
            <Questions />
        </div>
    );
};

export default StoresNearYou;
