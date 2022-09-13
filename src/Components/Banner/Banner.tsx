import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "Components/Banner/Banner.css";
import { Autoplay, Pagination } from "swiper";
import banner1 from "Assets/Banner/NAMA1056.jpg";

import banner2 from "Assets/Banner/NAMA1291.jpg";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        cssMode={true}
        mousewheel={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="Vay bằn ô tô" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="Vay bằn ô tô" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
