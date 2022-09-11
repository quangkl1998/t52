import AdvantageBond from "Components/AdvantageBond/AdvantageBond";
import BuyBond from "Components/BuyBond/BuyBond";
import CorporateBond from "Components/CorporateBond/CorporateBond";
import FinancialPartner from "Components/FinancialPartner/FinancialPartner";
import HotBond from "Components/HotBond/HotBond";
import Questions from "Components/Questions/Questions";
import RegisterInvestor from "Components/RegisterInvestor/RegisterInvestor";
import React from "react";

const InvestorRelations = () => {
    return (
        <div>
            <CorporateBond />
            <HotBond />
            <FinancialPartner />
            <AdvantageBond />
            <BuyBond />
            <Questions />
            <RegisterInvestor />
        </div>
    );
};

export default InvestorRelations;
