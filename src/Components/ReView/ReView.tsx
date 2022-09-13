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
              height={53}
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
              <SwiperSlide className="flex-col m-10">
                <h1>Chị Hoài Thương</h1>
                <p className="text-center pb-6 px-5">
                  Tôi đã vay 10 triệu bằng đăng ký xe máy để đóng học phí đầu
                  năm cho con sau khi được chị đồng nghiệp giới thiệu về T52.
                  Tôi cảm thấy các bước vay tại hệ thống T52 rất dễ dàng và
                  nhanh chóng. Mọi thủ tục đều được nhân viên giải đáp đầy đủ.
                  Tôi rất hài lòng vì chỉ chờ 5 phút đã có khoản giải ngân để
                  đóng học phí cho con.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-52 h-32 w-32 md:w-52 mb-2"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 35.3239C28.0155 35.3239 35.3239 28.0155 35.3239 19C35.3239 9.98454 28.0155 2.67606 19 2.67606C9.98454 2.67606 2.67606 9.98454 2.67606 19C2.67606 28.0155 9.98454 35.3239 19 35.3239ZM19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38Z"
                    fill="rgb(220 38 38) "
                  />
                  <mask
                    id="mask0_110_445"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={5}
                    y={5}
                    width={28}
                    height={28}
                  >
                    <path
                      d="M32.1544 19C32.1544 26.2647 26.2652 32.1539 19.0005 32.1539C11.7359 32.1539 5.84668 26.2647 5.84668 19C5.84668 11.7354 11.7359 5.84619 19.0005 5.84619C26.2652 5.84619 32.1544 11.7354 32.1544 19Z"
                      fill="#C4C4C4"
                    />
                  </mask>
                  <g mask="url(#mask0_110_445)">
                    <path
                      d="M8.76953 28.2566C8.76953 25.5659 11.1803 23.3848 14.1541 23.3848H23.8465C26.8203 23.3848 29.2311 25.5659 29.2311 28.2566V33.6155H8.76953V28.2566Z"
                      fill="url(#paint1_linear_110_445)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.9993 19.0003C21.1518 19.0003 22.8968 17.2554 22.8968 15.1029C22.8968 12.9504 21.1518 11.2054 18.9993 11.2054C16.8469 11.2054 15.1019 12.9504 15.1019 15.1029C15.1019 17.2554 16.8469 19.0003 18.9993 19.0003ZM18.9993 21.4362C22.4972 21.4362 25.3327 18.6007 25.3327 15.1029C25.3327 11.6051 22.4972 8.76953 18.9993 8.76953C15.5015 8.76953 12.666 11.6051 12.666 15.1029C12.666 18.6007 15.5015 21.4362 18.9993 21.4362Z"
                      fill="url(#paint1_linear_110_445)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_110_445"
                      x1={19}
                      y1={0}
                      x2={19}
                      y2={38}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#10975B" />
                      <stop offset={1} stopColor="#00833E" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_110_445"
                      x1="8.76953"
                      y1="28.5002"
                      x2="29.2311"
                      y2="28.5002"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFCB05" />
                      <stop offset={1} stopColor="#FCAF17" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_110_445"
                      x1="18.9993"
                      y1="8.76953"
                      x2="18.9993"
                      y2="21.4362"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#10975B" />
                      <stop offset={1} stopColor="#00833E" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>Tiểu thương</span>
              </SwiperSlide>
              <SwiperSlide className="flex-col m-10">
                <h1>Bà Mai Hương</h1>
                <p className="text-center pb-6 px-5">
                  Cần tầm 5, 10 triệu để buôn bán mà chẳng biết lấy đâu ra tiền!
                  Ngân hàng thì ai cho vay! Có mỗi cái xe wave làm chân để đi
                  chợ búa mua hàng. Đến tiệm cầm đồ thì sợ giữ lại xe coi như
                  cụt chân. May quá Hệ thống T52 đã giúp tôi giải pháp tuyệt
                  vời, vừa có tiền làm vốn, vừa có xe đi. Tôi thật biết ơn T52
                  nhiều lắm!”
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-52 h-32 w-32 md:w-52 mb-2"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 35.3239C28.0155 35.3239 35.3239 28.0155 35.3239 19C35.3239 9.98454 28.0155 2.67606 19 2.67606C9.98454 2.67606 2.67606 9.98454 2.67606 19C2.67606 28.0155 9.98454 35.3239 19 35.3239ZM19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38Z"
                    fill="rgb(220 38 38) "
                  />
                  <mask
                    id="mask0_110_445"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={5}
                    y={5}
                    width={28}
                    height={28}
                  >
                    <path
                      d="M32.1544 19C32.1544 26.2647 26.2652 32.1539 19.0005 32.1539C11.7359 32.1539 5.84668 26.2647 5.84668 19C5.84668 11.7354 11.7359 5.84619 19.0005 5.84619C26.2652 5.84619 32.1544 11.7354 32.1544 19Z"
                      fill="#C4C4C4"
                    />
                  </mask>
                  <g mask="url(#mask0_110_445)">
                    <path
                      d="M8.76953 28.2566C8.76953 25.5659 11.1803 23.3848 14.1541 23.3848H23.8465C26.8203 23.3848 29.2311 25.5659 29.2311 28.2566V33.6155H8.76953V28.2566Z"
                      fill="url(#paint1_linear_110_445)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.9993 19.0003C21.1518 19.0003 22.8968 17.2554 22.8968 15.1029C22.8968 12.9504 21.1518 11.2054 18.9993 11.2054C16.8469 11.2054 15.1019 12.9504 15.1019 15.1029C15.1019 17.2554 16.8469 19.0003 18.9993 19.0003ZM18.9993 21.4362C22.4972 21.4362 25.3327 18.6007 25.3327 15.1029C25.3327 11.6051 22.4972 8.76953 18.9993 8.76953C15.5015 8.76953 12.666 11.6051 12.666 15.1029C12.666 18.6007 15.5015 21.4362 18.9993 21.4362Z"
                      fill="url(#paint1_linear_110_445)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_110_445"
                      x1={19}
                      y1={0}
                      x2={19}
                      y2={38}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#10975B" />
                      <stop offset={1} stopColor="#00833E" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_110_445"
                      x1="8.76953"
                      y1="28.5002"
                      x2="29.2311"
                      y2="28.5002"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFCB05" />
                      <stop offset={1} stopColor="#FCAF17" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_110_445"
                      x1="18.9993"
                      y1="8.76953"
                      x2="18.9993"
                      y2="21.4362"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#10975B" />
                      <stop offset={1} stopColor="#00833E" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>Kinh doanh tạp hoá</span>
              </SwiperSlide>
              <SwiperSlide className="flex-col m-10">
                <h1>Trần Trọng Phú</h1>
                <p className="text-center pb-6 px-5">
                  Cái khó bó cái khôn! Suýt tí lại phải đi vay tín dụng đen với
                  lãi suất cao rồi! May có thằng bạn giới thiệu đến Hệ thống T52
                  được tư vấn và giải quyết ngay tức thì, xem như nhẹ cả người,
                  có tiền đóng tiền học cho con mà vẫn có xe chạy kiếm tiền! Hay
                  thế cơ chứ
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-52 h-32 w-32 md:w-52 mb-2"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 35.3239C28.0155 35.3239 35.3239 28.0155 35.3239 19C35.3239 9.98454 28.0155 2.67606 19 2.67606C9.98454 2.67606 2.67606 9.98454 2.67606 19C2.67606 28.0155 9.98454 35.3239 19 35.3239ZM19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38Z"
                    fill="rgb(220 38 38) "
                  />
                  <mask
                    id="mask0_110_445"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={5}
                    y={5}
                    width={28}
                    height={28}
                  >
                    <path
                      d="M32.1544 19C32.1544 26.2647 26.2652 32.1539 19.0005 32.1539C11.7359 32.1539 5.84668 26.2647 5.84668 19C5.84668 11.7354 11.7359 5.84619 19.0005 5.84619C26.2652 5.84619 32.1544 11.7354 32.1544 19Z"
                      fill="#C4C4C4"
                    />
                  </mask>
                  <g mask="url(#mask0_110_445)">
                    <path
                      d="M8.76953 28.2566C8.76953 25.5659 11.1803 23.3848 14.1541 23.3848H23.8465C26.8203 23.3848 29.2311 25.5659 29.2311 28.2566V33.6155H8.76953V28.2566Z"
                      fill="url(#paint1_linear_110_445)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.9993 19.0003C21.1518 19.0003 22.8968 17.2554 22.8968 15.1029C22.8968 12.9504 21.1518 11.2054 18.9993 11.2054C16.8469 11.2054 15.1019 12.9504 15.1019 15.1029C15.1019 17.2554 16.8469 19.0003 18.9993 19.0003ZM18.9993 21.4362C22.4972 21.4362 25.3327 18.6007 25.3327 15.1029C25.3327 11.6051 22.4972 8.76953 18.9993 8.76953C15.5015 8.76953 12.666 11.6051 12.666 15.1029C12.666 18.6007 15.5015 21.4362 18.9993 21.4362Z"
                      fill="url(#paint1_linear_110_445)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_110_445"
                      x1={19}
                      y1={0}
                      x2={19}
                      y2={38}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#10975B" />
                      <stop offset={1} stopColor="#00833E" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_110_445"
                      x1="8.76953"
                      y1="28.5002"
                      x2="29.2311"
                      y2="28.5002"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFCB05" />
                      <stop offset={1} stopColor="#FCAF17" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_110_445"
                      x1="18.9993"
                      y1="8.76953"
                      x2="18.9993"
                      y2="21.4362"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#10975B" />
                      <stop offset={1} stopColor="#00833E" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>Công nhân</span>
              </SwiperSlide>

              <SwiperSlide className="flex-col m-10">
                <h1>Chị Trang</h1>
                <p className="text-center pb-6 px-5">
                  Tôi đang là tài xế công nghệ và đang thuê nhà ở quận Gò Vấp.
                  Tháng 6 trời ngoài Bắc quá nắng nóng nên tôi muốn gửi tiền về
                  cho gia đình lắp máy lạnh. Bạn cùng phòng có giới thiệu tôi
                  đến T52 để vay nhanh 7 triệu bằng đăng ký xe máy. Tôi rất vui
                  vì có dịch vụ hỗ trợ tài chính đáng tin cậy như T52. Mọi thủ
                  tục và giải ngân được tiến hành nhanh chóng mà tôi vẫn có xe
                  để tiếp tục kiếm sống.!
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-52 h-32 w-32 md:w-52 mb-2"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 35.3239C28.0155 35.3239 35.3239 28.0155 35.3239 19C35.3239 9.98454 28.0155 2.67606 19 2.67606C9.98454 2.67606 2.67606 9.98454 2.67606 19C2.67606 28.0155 9.98454 35.3239 19 35.3239ZM19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38Z"
                    fill="rgb(220 38 38) "
                  />
                  <mask
                    id="mask0_110_445"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={5}
                    y={5}
                    width={28}
                    height={28}
                  >
                    <path
                      d="M32.1544 19C32.1544 26.2647 26.2652 32.1539 19.0005 32.1539C11.7359 32.1539 5.84668 26.2647 5.84668 19C5.84668 11.7354 11.7359 5.84619 19.0005 5.84619C26.2652 5.84619 32.1544 11.7354 32.1544 19Z"
                      fill="#C4C4C4"
                    />
                  </mask>
                  <g mask="url(#mask0_110_445)">
                    <path
                      d="M8.76953 28.2566C8.76953 25.5659 11.1803 23.3848 14.1541 23.3848H23.8465C26.8203 23.3848 29.2311 25.5659 29.2311 28.2566V33.6155H8.76953V28.2566Z"
                      fill="url(#paint1_linear_110_445)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.9993 19.0003C21.1518 19.0003 22.8968 17.2554 22.8968 15.1029C22.8968 12.9504 21.1518 11.2054 18.9993 11.2054C16.8469 11.2054 15.1019 12.9504 15.1019 15.1029C15.1019 17.2554 16.8469 19.0003 18.9993 19.0003ZM18.9993 21.4362C22.4972 21.4362 25.3327 18.6007 25.3327 15.1029C25.3327 11.6051 22.4972 8.76953 18.9993 8.76953C15.5015 8.76953 12.666 11.6051 12.666 15.1029C12.666 18.6007 15.5015 21.4362 18.9993 21.4362Z"
                      fill="url(#paint1_linear_110_445)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_110_445"
                      x1={19}
                      y1={0}
                      x2={19}
                      y2={38}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#10975B" />
                      <stop offset={1} stopColor="#00833E" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_110_445"
                      x1="8.76953"
                      y1="28.5002"
                      x2="29.2311"
                      y2="28.5002"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFCB05" />
                      <stop offset={1} stopColor="#FCAF17" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_110_445"
                      x1="18.9993"
                      y1="8.76953"
                      x2="18.9993"
                      y2="21.4362"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#10975B" />
                      <stop offset={1} stopColor="#00833E" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>lái xe công nghệ</span>
              </SwiperSlide>
              <SwiperSlide className="flex-col m-10">
                <h1>Vợ chồng anh Hùng</h1>
                <p className="text-center pb-6 px-5">
                  Hai vợ chồng mới cưới. Tài sản duy nhất là chiếc xe AB để đi
                  làm và chở vợ đi bán. Dịch covid ập đến, cả hai đều thất
                  nghiệp. Lúc đó Hệ thống T52 đã mua lại xe của tôi với giá cao
                  còn cho tôi thuê lại xe với giá rất rẻ, và tôi đã có điều kiện
                  mua lại xe của mình với giá đã bán sau đó. Thực sự T52 đã cứu
                  vớt gia đình tôi trong lúc khó khăn nhất. Vô cùng biết ơn!
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-52 h-32 w-32 md:w-52 mb-2"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 35.3239C28.0155 35.3239 35.3239 28.0155 35.3239 19C35.3239 9.98454 28.0155 2.67606 19 2.67606C9.98454 2.67606 2.67606 9.98454 2.67606 19C2.67606 28.0155 9.98454 35.3239 19 35.3239ZM19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38Z"
                    fill="rgb(220 38 38) "
                  />
                  <mask
                    id="mask0_110_445"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={5}
                    y={5}
                    width={28}
                    height={28}
                  >
                    <path
                      d="M32.1544 19C32.1544 26.2647 26.2652 32.1539 19.0005 32.1539C11.7359 32.1539 5.84668 26.2647 5.84668 19C5.84668 11.7354 11.7359 5.84619 19.0005 5.84619C26.2652 5.84619 32.1544 11.7354 32.1544 19Z"
                      fill="#C4C4C4"
                    />
                  </mask>
                  <g mask="url(#mask0_110_445)">
                    <path
                      d="M8.76953 28.2566C8.76953 25.5659 11.1803 23.3848 14.1541 23.3848H23.8465C26.8203 23.3848 29.2311 25.5659 29.2311 28.2566V33.6155H8.76953V28.2566Z"
                      fill="url(#paint1_linear_110_445)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.9993 19.0003C21.1518 19.0003 22.8968 17.2554 22.8968 15.1029C22.8968 12.9504 21.1518 11.2054 18.9993 11.2054C16.8469 11.2054 15.1019 12.9504 15.1019 15.1029C15.1019 17.2554 16.8469 19.0003 18.9993 19.0003ZM18.9993 21.4362C22.4972 21.4362 25.3327 18.6007 25.3327 15.1029C25.3327 11.6051 22.4972 8.76953 18.9993 8.76953C15.5015 8.76953 12.666 11.6051 12.666 15.1029C12.666 18.6007 15.5015 21.4362 18.9993 21.4362Z"
                      fill="url(#paint1_linear_110_445)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_110_445"
                      x1={19}
                      y1={0}
                      x2={19}
                      y2={38}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#10975B" />
                      <stop offset={1} stopColor="#00833E" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_110_445"
                      x1="8.76953"
                      y1="28.5002"
                      x2="29.2311"
                      y2="28.5002"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFCB05" />
                      <stop offset={1} stopColor="#FCAF17" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_110_445"
                      x1="18.9993"
                      y1="8.76953"
                      x2="18.9993"
                      y2="21.4362"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#10975B" />
                      <stop offset={1} stopColor="#00833E" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>Công nhân</span>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default ReView;
