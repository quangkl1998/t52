import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "Components/Banner/Banner.css";
import { Autoplay, Pagination } from "swiper";
import { useSelector } from "react-redux";
import { RootState } from "configStore";

const Banner = () => {
  const { listBanner, isLoading, error } = useSelector(
    (state: RootState) => state.banner,
  );
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
        {listBanner?.map((banner: any) => {
          return (
            <SwiperSlide key={banner?.id}>
              <img src={banner?.img} alt="Vay bằn ô tô" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Banner;
