import FormLoan from "Components/FormLoan/FormLoan";
import InfoLoanRegisByMoto from "Components/InfoLoanRegisByMoto/InfoLoanRegisByMoto";
import Questions from "Components/Questions/Questions";
import WhyChoose from "Components/WhyChoose/WhyChoose";
import React from "react";

const LoanByRegisMoto = () => {
    return (
        <div>
            <h1>Thông tin đăng ký vay tiền bằng xe máy</h1>
            <FormLoan />
            <InfoLoanRegisByMoto />
            <WhyChoose />
            <Questions />
        </div>
    );
};

export default LoanByRegisMoto;
