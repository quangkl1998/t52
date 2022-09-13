import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
const ReView = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-5">
        <h2 className="text-center text-red-600 md:text-3xl font-bold text-2xl mb-7 md:leading-6  ">
          T52 Thấu hiểu nỗi lo tài chính của bạn
        </h2>
        <div className="mx-14 bg-white rounded-lg shadow-xl">
          <>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              cssMode={true}
              mousewheel={true}
              /*  autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              waitForTransition: true,
            }} */
              pagination={{
                clickable: true,
              }}
              modules={[/* Autoplay, */ Pagination]}
              className="mySwipe "
            >
              <SwiperSlide className="flex-col mb-10">
                <h1>Chị Hoài Thương</h1>
                <p className="text-center">
                  Tôi thật sự hài lòng với dịch vụ của Hệ thống TIỀN NHANH T52.
                  Chỉ cần xác minh cà vẹt xe chính chủ, tôi đã có ngay số tiền
                  mình cần để giải quyết công việc cá nhân. Nhanh thật! Cảm ơn
                  T52
                </p>
              </SwiperSlide>
              <SwiperSlide>a</SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default ReView;
