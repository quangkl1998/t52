import FormLoan from "Components/FormLoan/FormLoan";
import InfoLoanByMoto from "Components/InfoLoanByMoto/InfoLoanByMoto";
import Questions from "Components/Questions/Questions";
import WhyChoose from "Components/WhyChoose/WhyChoose";
import React from "react";

const LoanByMoto = () => {
    return (
        <div>
            <div className="lg:h-36 h-20"></div>
            <h1>Thông tin đăng ký vay tiền bằng đăng ký/ cà vẹt xe máy</h1>
            <FormLoan />
            <InfoLoanByMoto />
            <WhyChoose />
            <Questions />
        </div>
    );
};

export default LoanByMoto;
