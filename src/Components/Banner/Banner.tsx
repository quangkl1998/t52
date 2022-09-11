import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "Components/Banner/Banner.css";
import { Autoplay, Pagination } from "swiper";
import banner1 from "Assets/Banner/banner-1.jpg";
import banner1Mobile from "Assets/Banner/Banner1-mobile.jpg";
import banner2 from "Assets/Banner/Banner2.jpg";
import banner2Mobile from "Assets/Banner/Banner2-mobile.jpg";
import banner3 from "Assets/Banner/Banner3.jpg";
import banner3Mobile from "Assets/Banner/Banner3-mobile.jpg";
import banner4 from "Assets/Banner/Banner4.jpg";
import banner4Mobile from "Assets/Banner/Banner4-mobile.jpg";
const Banner = () => {
    return (
        <>
            <Swiper
                autoHeight={true}
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
                    <img
                        src={banner1}
                        alt="Vay bằn ô tô"
                        className="md:block hidden"
                    />
                    <img
                        src={banner1Mobile}
                        alt="Vay bằn ô tô"
                        className="md:hidden block"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={banner2}
                        alt="Vay bằn ô tô"
                        className="md:block hidden"
                    />
                    <img
                        src={banner2Mobile}
                        alt="Vay bằn ô tô"
                        className="md:hidden block"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={banner3}
                        alt="Vay bằn ô tô"
                        className="md:block hidden"
                    />
                    <img
                        src={banner3Mobile}
                        alt="Vay bằn ô tô"
                        className="md:hidden block"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={banner4}
                        alt="Vay bằn ô tô"
                        className="md:block hidden"
                    />
                    <img
                        src={banner4Mobile}
                        alt="Vay bằn ô tô"
                        className="md:hidden block"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
