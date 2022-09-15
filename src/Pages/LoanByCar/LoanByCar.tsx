import FormLoan from "Components/FormLoan/FormLoan";
import InfoLoanByCar from "Components/InfoLoanByCar/InfoLoanByCar";
import Questions from "Components/Questions/Questions";
import WhyChoose from "Components/WhyChoose/WhyChoose";

const LoanByCar = () => {
    return (
        <div>
            <div className="lg:h-28 h-20"></div>
            <div className="bg-gray-100 mt-3">
                <h1 className="text-center p-5 font-bold text-2xl">
                    Thông tin đăng ký vay tiền bằng ô tô
                </h1>
                <FormLoan />
                <div className="container mx-auto px-16 italic text-gray-500 font-semibold text-lg mt-3">
                    <p>
                        Thời hạn khoản vay tối thiểu 3 tháng và tối đa 12 tháng.
                    </p>
                    <p>Lãi suất vay trong hạn hàng năm tối đa 13,2%/năm</p>
                    <p>
                        Ví dụ: Khách hàng vay bằng đăng ký ô tô 50.000.000đ
                        trong 12 tháng với lãi suất vay là 1.1%/ tháng (chưa bao
                        gồm các phí khác)
                    </p>
                </div>
                <InfoLoanByCar />
                <WhyChoose />
                <Questions />
            </div>
        </div>
    );
};

export default LoanByCar;
