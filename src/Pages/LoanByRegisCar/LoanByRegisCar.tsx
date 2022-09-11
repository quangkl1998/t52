import FormLoan from "Components/FormLoan/FormLoan";
import InfoLoanRegisByCar from "Components/InfoLoanRegisByCar/InfoLoanRegisByCar";
import Questions from "Components/Questions/Questions";
import WhyChoose from "Components/WhyChoose/WhyChoose";
import React from "react";

const LoanByRegisCar = () => {
    return (
        <div>
            <h1>Thông tin đăng ký vay tiền bằng Xe ô tô</h1>
            <FormLoan />
            <InfoLoanRegisByCar />
            <WhyChoose />
            <Questions />
        </div>
    );
};

export default LoanByRegisCar;
