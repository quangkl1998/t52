import React, { useEffect } from "react";
import { Avatar } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import chihoaithuong from "Assets/items/chi_hoai_thuong.jpg";
import anh_hung from "Assets/items/anh_hung.jpg";
import ba_mai_huong from "Assets/items/ba_mai_huong.jpg";
import chi_trang from "Assets/items/chi_trang.jpg";
import tran_trong_phu from "Assets/items/tran_trong_phu.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { getFeedbackList } from "Slices/feedback";
const ReView = () => {
    const { list: listFeedback } = useSelector(
        (state: RootState) => state.feedback,
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getFeedbackList());
    }, []);

    return (
        <div className="">
            <div className="container mx-auto py-5">
                <h2 className="text-center text-red-600 md:text-3xl font-bold text-2xl mb-7 md:leading-6  ">
                    T52 Thấu hiểu nỗi lo tài chính của bạn
                </h2>
                <div className="md:px-20 px-5 rounded-lg">
                    <>
                        <Swiper
                            centeredSlides={true}
                            spaceBetween={30}
                            mousewheel={true}
                            height={53}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                waitForTransition: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwipe"
                        >
                            {listFeedback?.map((item, index) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className="flex-col  relative "
                                    >
                                        <h1 className="text-xl font-bold">
                                            {item?.name}
                                        </h1>

                                        <div className="md:flex-shrink-0 absolute top-0 left-0 md:left-24">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={90}
                                                height={68}
                                                viewBox="0 0 90 68"
                                                fill="none"
                                            >
                                                <path
                                                    opacity="0.1"
                                                    d="M21.75 68C17.75 68 14.3333 67.25 11.5 65.75C8.83333 64.25 6.66667 62.1667 5 59.5C3.33333 57 2.08333 54 1.25 50.5C0.416667 46.8333 1.04308e-07 43.4167 1.04308e-07 40.25C1.04308e-07 31.9167 2.08333 24.3333 6.25 17.5C10.5833 10.5 17.1667 4.91666 26 0.749994L28.25 5.25C23.4167 7.24999 19.1667 10.4167 15.5 14.75C12 19.0833 9.91667 23.5 9.25 28C8.75 31.1667 8.83333 34.0833 9.5 36.75C12.8333 33.4167 17.0833 31.75 22.25 31.75C27.5833 31.75 32 33.3333 35.5 36.5C39 39.6667 40.75 44.1667 40.75 50C40.75 55.3333 38.9167 59.6667 35.25 63C31.5833 66.3333 27.0833 68 21.75 68ZM70.25 68C66.25 68 62.8333 67.25 60 65.75C57.3333 64.25 55.1667 62.1667 53.5 59.5C51.8333 57 50.5833 54 49.75 50.5C48.9167 46.8333 48.5 43.4167 48.5 40.25C48.5 31.9167 50.5833 24.3333 54.75 17.5C59.0833 10.5 65.6667 4.91666 74.5 0.749994L76.75 5.25C71.9167 7.24999 67.6667 10.4167 64 14.75C60.5 19.0833 58.4167 23.5 57.75 28C57.25 31.1667 57.3333 34.0833 58 36.75C61.3333 33.4167 65.5833 31.75 70.75 31.75C76.0833 31.75 80.5 33.3333 84 36.5C87.5 39.6667 89.25 44.1667 89.25 50C89.25 55.3333 87.4167 59.6667 83.75 63C80.0833 66.3333 75.5833 68 70.25 68Z"
                                                    fill="#5C5C5C"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-center pb-6 md:px-10 text-gray-500">
                                            {item?.content}
                                        </p>
                                        <div className="md:flex-shrink-0 absolute bottom-0 md:right-24 right-0 rotate-180 skew-x-1 rotate ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={90}
                                                height={68}
                                                viewBox="0 0 90 68"
                                                fill="none"
                                            >
                                                <path
                                                    opacity="0.1"
                                                    d="M21.75 68C17.75 68 14.3333 67.25 11.5 65.75C8.83333 64.25 6.66667 62.1667 5 59.5C3.33333 57 2.08333 54 1.25 50.5C0.416667 46.8333 1.04308e-07 43.4167 1.04308e-07 40.25C1.04308e-07 31.9167 2.08333 24.3333 6.25 17.5C10.5833 10.5 17.1667 4.91666 26 0.749994L28.25 5.25C23.4167 7.24999 19.1667 10.4167 15.5 14.75C12 19.0833 9.91667 23.5 9.25 28C8.75 31.1667 8.83333 34.0833 9.5 36.75C12.8333 33.4167 17.0833 31.75 22.25 31.75C27.5833 31.75 32 33.3333 35.5 36.5C39 39.6667 40.75 44.1667 40.75 50C40.75 55.3333 38.9167 59.6667 35.25 63C31.5833 66.3333 27.0833 68 21.75 68ZM70.25 68C66.25 68 62.8333 67.25 60 65.75C57.3333 64.25 55.1667 62.1667 53.5 59.5C51.8333 57 50.5833 54 49.75 50.5C48.9167 46.8333 48.5 43.4167 48.5 40.25C48.5 31.9167 50.5833 24.3333 54.75 17.5C59.0833 10.5 65.6667 4.91666 74.5 0.749994L76.75 5.25C71.9167 7.24999 67.6667 10.4167 64 14.75C60.5 19.0833 58.4167 23.5 57.75 28C57.25 31.1667 57.3333 34.0833 58 36.75C61.3333 33.4167 65.5833 31.75 70.75 31.75C76.0833 31.75 80.5 33.3333 84 36.5C87.5 39.6667 89.25 44.1667 89.25 50C89.25 55.3333 87.4167 59.6667 83.75 63C80.0833 66.3333 75.5833 68 70.25 68Z"
                                                    fill="#5C5C5C"
                                                />
                                            </svg>
                                        </div>
                                        <Avatar size={180} src={item?.img} />

                                        <span className="pb-8 italic text-gray-500 pt-2">
                                            {item?.job}
                                        </span>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    );
};

export default ReView;
