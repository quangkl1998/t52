import React from "react";
import T52lagi from "Assets/img/T52/1a_T52_la_gi.png";
import T52lagiweb from "Assets/img/T52/1a_T52_la_gi_(ZALO).png";
const AboutT52 = () => {
  return (
    <div className="container mx-auto">
      <div className="py-10 px-10 lg:px-20">
        <h2 className=" text-red-600 md:text-3xl font-bold text-2xl mb-0 md:mb-3 md:leading-6 text-center">
          Về T52
        </h2>
        <div className="bg-white rounded-lg shadow-md text-left p-5">
          <h2 className=" text-red-600 md:text-xl font-bold text-2xl mb-0 md:mb-3 md:leading-6 ">
            Giới thiệu về T52
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <img
              src={T52lagi}
              alt="T52lagi"
              className="lg:hidden block mt-2 rounded-lg"
            />

            <div className="px-5 mt-2 text-base font-medium leading-snug ">
              <p className="mt-2">
                Kính thưa quý vị kính mến, lời đầu tiên cho tôi xin gửi đến quý
                vị lời chúc sức khỏe và lời chào trân trọng nhất!
              </p>
              <p className="mt-2">
                Thưa quý vị, ngày 07 tháng 5 nằm 2022 vừa qua, chúng tôi đã hân
                hoan ra mắt{" "}
                <span className="text-red-600">
                  Công ty TNHH THƯƠNG MẠI DỊCH VỤ TÀI CHÍNH THẮNG LỢI
                </span>{" "}
                cùng các Chi nhánh thuộc{" "}
                <span className="text-red-600">
                  HỆ THỐNG TIỀN NHANH T52 – GIẢI PHÁP TÀI CHÍNH CÁ NHÂN
                </span>
                .
              </p>

              <p className="mt-2">
                <span className="text-red-600">
                  Công ty TNHH THƯƠNG MẠI DỊCH VỤ TÀI CHÍNH THẮNG LỢI
                </span>{" "}
                cùng các Chi nhánh thuộc HỆ THỐNG TIỀN NHANH T52 của chúng tôi
                ra đời nhằm cung cấp GIẢI PHÁP TÀI CHÍNH CÁ NHÂN cho từng đối
                tượng khách hàng. Mục tiêu chính là chia sẻ và giải quyết nhanh
                nhất với khách hàng về nhu cầu tài chính cá nhân mà vẫn duy trì
                được mọi sinh hoạt thường nhật của họ, giúp họ tháo được nút
                thắt khó khăn về tài chính.
              </p>
            </div>

            <img
              src={T52lagiweb}
              alt="T52lagi"
              className="lg:block hidden mt-2 rounded-lg"
            />
          </div>
          <div>a</div>
        </div>
      </div>
    </div>
  );
};

export default AboutT52;
