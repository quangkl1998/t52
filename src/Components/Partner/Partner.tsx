import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "Components/Partner/Partner.css";
import { Pagination, Navigation } from "swiper";
import vietcombank from "Assets/items/vietcombank.jpg";
import sacombank from "Assets/items/sacombank.jpg";
import ACB from "Assets/items/ACB.jpg";
import MB from "Assets/items/MB.jpg";
const Partner = () => {
  return (
    <div className="text-center  p-10">
      <h2 className="text-red-600 md:text-3xl font-bold text-2xl mb-3 md:leading-6 pb-3">
        Đối tác chiến lược
      </h2>
      <div className="container mx-auto">
        <div>
          <>
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              slidesPerGroup={2}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                  slidesPerGroup: 4,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                  slidesPerGroup: 4,
                },
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              className="mySwiper h-full"
            >
              <SwiperSlide>
                <img
                  src={vietcombank}
                  alt="vietcombank"
                  className="object-cover  lg:px-20"
                />
              </SwiperSlide>

              <SwiperSlide>
                {" "}
                <img
                  src={ACB}
                  alt="sacombank"
                  className="object-cover lg:px-20"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={sacombank}
                  alt="sacombank"
                  className="object-cover lg:px-20"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  src={MB}
                  alt="sacombank"
                  className="object-cover lg:px-20"
                />
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default Partner;
