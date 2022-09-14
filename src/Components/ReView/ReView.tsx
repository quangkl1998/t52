import React from "react";
import { Avatar } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import chihoaithuong from "Assets/items/chi_hoai_thuong.jpg";
import anh_hung from "Assets/items/anh_hung.jpg";
import ba_mai_huong from "Assets/items/ba_mai_huong.jpg";
import chi_trang from "Assets/items/chi_trang.jpg";
import tran_trong_phu from "Assets/items/tran_trong_phu.jpg";
const ReView = () => {
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
              /*    autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                waitForTransition: true,
              }} */
              pagination={{
                clickable: true,
              }}
              modules={[/* Autoplay, */ Pagination]}
              className="mySwipe"
            >
              <SwiperSlide className="flex-col  relative ">
                <h1 className="text-xl font-bold">Chị Hoài Thương</h1>

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
                  Tôi đã vay 10 triệu bằng đăng ký xe máy để đóng học phí đầu
                  năm cho con sau khi được chị đồng nghiệp giới thiệu về T52.
                  Tôi cảm thấy các bước vay tại hệ thống T52 rất dễ dàng và
                  nhanh chóng. Mọi thủ tục đều được nhân viên giải đáp đầy đủ.
                  Tôi rất hài lòng vì chỉ chờ 5 phút đã có khoản giải ngân để
                  đóng học phí cho con.
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
                <Avatar size={180} src={chihoaithuong} />

                <span className="pb-8 italic text-gray-500 pt-2">
                  Tiểu thương
                </span>
              </SwiperSlide>
              <SwiperSlide className="flex-col  relative ">
                <h1 className="text-xl font-bold">Bà Mai Hương</h1>
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
                  Cần tầm 5, 10 triệu để buôn bán mà chẳng biết lấy đâu ra tiền!
                  Ngân hàng thì ai cho vay! Có mỗi cái xe wave làm chân để đi
                  chợ búa mua hàng. Đến tiệm cầm đồ thì sợ giữ lại xe coi như
                  cụt chân. May quá Hệ thống T52 đã giúp tôi giải pháp tuyệt
                  vời, vừa có tiền làm vốn, vừa có xe đi. Tôi thật biết ơn T52
                  nhiều lắm!”
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
                <Avatar size={180} src={ba_mai_huong} />
                <span className="pb-8 italic text-gray-500 pt-2">
                  Kinh doanh tạp hoá
                </span>
              </SwiperSlide>
              <SwiperSlide className="flex-col  relative ">
                <h1 className="text-xl font-bold">Trần Trọng Phú</h1>
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
                  Cái khó bó cái khôn! Suýt tí lại phải đi vay tín dụng đen với
                  lãi suất cao rồi! May có thằng bạn giới thiệu đến Hệ thống T52
                  được tư vấn và giải quyết ngay tức thì, xem như nhẹ cả người,
                  có tiền đóng tiền học cho con mà vẫn có xe chạy kiếm tiền! Hay
                  thế cơ chứ
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
                <Avatar size={180} src={tran_trong_phu} />

                <span className="pb-8 italic text-gray-500 pt-2">
                  Công nhân
                </span>
              </SwiperSlide>

              <SwiperSlide className="flex-col  relative">
                <h1 className="text-xl font-bold">Chị Trang</h1>
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
                  Tôi đang là tài xế công nghệ và đang thuê nhà ở quận Gò Vấp.
                  Tháng 6 trời ngoài Bắc quá nắng nóng nên tôi muốn gửi tiền về
                  cho gia đình lắp máy lạnh. Bạn cùng phòng có giới thiệu tôi
                  đến T52 để vay nhanh 7 triệu bằng đăng ký xe máy. Tôi rất vui
                  vì có dịch vụ hỗ trợ tài chính đáng tin cậy như T52. Mọi thủ
                  tục và giải ngân được tiến hành nhanh chóng mà tôi vẫn có xe
                  để tiếp tục kiếm sống.!
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
                <Avatar size={180} src={chi_trang} />
                <span className="pb-8 italic text-gray-500 pt-2">
                  lái xe công nghệ
                </span>
              </SwiperSlide>
              <SwiperSlide className="flex-col  relative">
                <h1 className="text-xl font-bold">Vợ chồng anh Hùng</h1>
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
                  Hai vợ chồng mới cưới. Tài sản duy nhất là chiếc xe AB để đi
                  làm và chở vợ đi bán. Dịch covid ập đến, cả hai đều thất
                  nghiệp. Lúc đó Hệ thống T52 đã mua lại xe của tôi với giá cao
                  còn cho tôi thuê lại xe với giá rất rẻ, và tôi đã có điều kiện
                  mua lại xe của mình với giá đã bán sau đó. Thực sự T52 đã cứu
                  vớt gia đình tôi trong lúc khó khăn nhất. Vô cùng biết ơn!
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
                <Avatar size={180} src={anh_hung} />
                <span className="pb-8 italic text-gray-500 pt-2">
                  Công nhân
                </span>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default ReView;
