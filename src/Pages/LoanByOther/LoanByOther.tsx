import FormLoan from "Components/FormLoan/FormLoan";
import InfoLoanByOther from "Components/InfoLoanByOther/InfoLoanByOther";
import Questions from "Components/Questions/Questions";
import WhyChoose from "Components/WhyChoose/WhyChoose";

const LoanByOther = () => {
    return (
        <div>
            <div className="lg:h-28 h-20"></div>
            <div className="bg-gray-100 mt-3">
                <h1 className="text-center p-5 font-bold text-2xl">
                    Thông tin đăng ký Cầm tài sản khác
                </h1>
                <FormLoan />
                <InfoLoanByOther />
                <WhyChoose />
                <Questions />
            </div>
        </div>
    );
};

export default LoanByOther;
