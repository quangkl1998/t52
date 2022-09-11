import FormLoan from "Components/FormLoan/FormLoan";
import InfoLoanByOther from "Components/InfoLoanByOther/InfoLoanByOther";
import Questions from "Components/Questions/Questions";
import WhyChoose from "Components/WhyChoose/WhyChoose";
import React from "react";

const LoanByOther = () => {
    return (
        <div>
            <h1>Thông tin đăng ký Cầm tài sản khác</h1>
            <FormLoan />
            <InfoLoanByOther />
            <WhyChoose />
            <Questions />
        </div>
    );
};

export default LoanByOther;
