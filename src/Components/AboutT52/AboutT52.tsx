import React from "react";
import T52lagi from "Assets/img/T52/1a_T52_la_gi.png";
import T52lagiweb from "Assets/img/T52/1a_T52_la_gi_(ZALO).png";
const AboutT52 = () => {
    return (
        <div className="mb-8">
            <div className="container mx-auto px-5 lg:px-16">
                <div className="bg-white rounded-lg p-5">
                    <h2 className=" text-red-600 md:text-3xl font-bold text-2xl mb-3 md:leading-6">
                        Giới thiệu về T52
                    </h2>
                    <div className=" text-left p-5">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <img
                                src={T52lagi}
                                alt="T52lagi"
                                className="md:hidden block mt-2 rounded-lg"
                            />

                            <div className="px-5 mt-2 text-gray-500 leading-relaxed tracking-wide">
                                <p className="mt-2">
                                    Kính thưa quý vị kính mến, lời đầu tiên cho
                                    tôi xin gửi đến quý vị lời chúc sức khỏe và
                                    lời chào trân trọng nhất!
                                </p>
                                <p className="mt-2">
                                    Thưa quý vị, ngày 07 tháng 5 nằm 2022 vừa
                                    qua, chúng tôi đã hân hoan ra mắt{" "}
                                    <span className="text-red-600 font-bold">
                                        Công ty TNHH THƯƠNG MẠI DỊCH VỤ TÀI
                                        CHÍNH THẮNG LỢI
                                    </span>{" "}
                                    cùng các Chi nhánh thuộc{" "}
                                    <span className="text-red-600 font-bold">
                                        HỆ THỐNG TIỀN NHANH T52 – GIẢI PHÁP TÀI
                                        CHÍNH CÁ NHÂN
                                    </span>
                                    .
                                </p>

                                <p className="mt-2">
                                    <span className="text-red-600 font-bold">
                                        Công ty TNHH THƯƠNG MẠI DỊCH VỤ TÀI
                                        CHÍNH THẮNG LỢI
                                    </span>{" "}
                                    cùng các Chi nhánh thuộc{" "}
                                    <span className="text-red-600 font-bold">
                                        HỆ THỐNG TIỀN NHANH T52
                                    </span>{" "}
                                    của chúng tôi ra đời nhằm cung cấp{" "}
                                    <span className="text-red-600 font-bold">
                                        GIẢI PHÁP TÀI CHÍNH CÁ NHÂN
                                    </span>{" "}
                                    cho từng đối tượng khách hàng. Mục tiêu
                                    chính là chia sẻ và giải quyết nhanh nhất
                                    với khách hàng về nhu cầu tài chính cá nhân
                                    mà vẫn duy trì được mọi sinh hoạt thường
                                    nhật của họ, giúp họ tháo được nút thắt khó
                                    khăn về tài chính.
                                </p>
                            </div>

                            <img
                                src={T52lagiweb}
                                alt="T52lagi"
                                className="md:block hidden mt-2 rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutT52;
