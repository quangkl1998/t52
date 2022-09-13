import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "Components/Partner/Partner.css";
import { Pagination, Navigation } from "swiper";
const Partner = () => {
  return (
    <div className="text-center bg-gray-100 p-10">
      <h2 className="text-rose-600 md:text-3xl font-bold text-2xl mb-3 md:leading-6 pb-3">
        Đối tác chiến lược
      </h2>
      <div className="container mx-auto">
        <div>
          <>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  slidesPerGroup: 3,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                  slidesPerGroup: 6,
                },
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              className="mySwiper h-full"
            >
              <SwiperSlide className="h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={143}
                  height={22}
                  viewBox="0 0 143 22"
                  fill="none"
                >
                  <path d="M23.88 0H0V22H23.88V0Z" fill="#76111C" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.00879 3.83594H15.8022L22.1996 10.963L15.8022 18.7585H3.00879L8.73643 10.963L3.00879 3.83594Z"
                    fill="#EC2428"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.1996 10.963L15.8022 3.83594H3.00879L8.73643 10.963"
                    fill="white"
                  />
                  <path
                    d="M40.0525 7.91402C39.3943 7.13867 38.4401 6.69944 37.2091 6.69944C34.7063 6.69944 32.8604 8.70974 32.8604 11.4737C32.8604 14.2377 34.7063 16.248 37.1032 16.248C38.4401 16.248 39.5218 15.6611 40.2005 14.6566L42.9584 16.6886C41.707 18.448 39.5856 19.2641 37.528 19.2641C32.84 19.2641 29.4238 16.2277 29.4238 11.4737C29.4238 6.71981 32.84 3.68335 37.528 3.68335C39.2042 3.68335 41.3256 4.24863 42.5974 5.86043L40.0525 7.91275V7.91402Z"
                    fill="#76111C"
                  />
                  <path
                    d="M44.7188 4.06152H48.0278V18.8873H44.7188V4.06152Z"
                    fill="#76111C"
                  />
                  <path
                    d="M51.04 4.06152H56.0457L59.5039 13.7362H59.546L63.0247 4.06152H68.0099V18.8873H64.7009V7.51557H64.6588L60.7132 18.8873H58.1887L54.3924 7.51557H54.3491V18.8873H51.04V4.06152Z"
                    fill="#76111C"
                  />
                  <path
                    d="M71.0645 4.06152H76.6645C79.2949 4.06152 82.1587 4.60643 82.1587 7.83132C82.1587 9.48641 81.1191 10.617 79.5704 11.0982V11.1402C81.5426 11.3923 82.8577 12.8373 82.8577 14.7636C82.8577 17.8624 79.8881 18.8886 77.2156 18.8886H71.0645V4.06152ZM74.3735 9.98803H76.7704C77.7884 9.98803 78.8497 9.56916 78.8497 8.37495C78.8497 7.18074 77.6621 6.82553 76.6224 6.82553H74.3735V9.98803ZM74.3735 16.1233H77.3432C78.3828 16.1233 79.55 15.6841 79.55 14.3855C79.55 12.9825 77.9593 12.752 76.8775 12.752H74.3747V16.1233H74.3735Z"
                    fill="#76111C"
                  />
                  <path
                    d="M87.4424 4.06128H91.7694C94.0604 4.06128 96.6066 4.62656 96.6066 7.97748C96.6066 9.48489 95.6945 10.6995 93.9124 11.056V11.098C95.8846 11.2444 97.2648 12.669 97.2648 14.7417C97.2648 18.155 94.2735 18.8884 92.2375 18.8884H87.4424V4.06128ZM88.8418 10.469H91.7477C94.6536 10.469 95.2059 8.89797 95.2059 7.97748C95.2059 5.9048 93.7211 5.31788 91.939 5.31788H88.8418V10.469ZM88.8418 17.6305H92.0449C95.3335 17.6305 95.8629 15.8303 95.8629 14.7825C95.8629 12.5837 94.0387 11.7256 92.2567 11.7256H88.8405V17.6305H88.8418Z"
                    fill="#76111C"
                  />
                  <path
                    d="M105.41 4.06128H106.853L113.174 18.8871H111.605L109.972 14.9505H102.017L100.321 18.8871H98.8574L105.412 4.06128H105.41ZM106.067 5.56869L102.567 13.6939H109.461L106.066 5.56869H106.067Z"
                    fill="#76111C"
                  />
                  <path
                    d="M115.338 4.06128H117.141L126.283 17.0448H126.325V4.06128H127.726V18.8871H125.922L116.78 5.90352H116.736V18.8871H115.337V4.06128H115.338Z"
                    fill="#76111C"
                  />
                  <path
                    d="M131.841 4.06128H133.241V10.5951H133.369L140.645 4.06128H142.575L134.981 10.8459L143 18.8871H140.985L133.369 11.2227H133.241V18.8871H131.841V4.06128Z"
                    fill="#76111C"
                  />
                </svg>
              </SwiperSlide>
              <SwiperSlide className="h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={52}
                  height={45}
                  viewBox="0 0 52 45"
                  fill="none"
                >
                  <path
                    d="M40.9135 0C34.7904 0 29.8269 4.54245 29.8269 10.1462C29.8269 15.75 34.7904 20.2925 40.9135 20.2925C47.0366 20.2925 52 15.75 52 10.1462C52 4.54245 47.0366 0 40.9135 0ZM40.9135 14.4764C38.3158 14.4764 36.2052 12.5448 36.2052 10.1675C36.2052 7.79007 38.3158 5.85848 40.9135 5.85848C43.5112 5.85848 45.6218 7.79007 45.6218 10.1675C45.6218 12.5448 43.5112 14.4764 40.9135 14.4764ZM26.6262 7.62028V20.3137H20.248V7.55662C20.248 6.60139 19.413 5.83724 18.3693 5.83724C17.3256 5.83724 16.4906 6.60139 16.4906 7.55662V20.3137H10.1124V7.55662C10.1124 6.60139 9.27745 5.83724 8.23371 5.83724C7.19003 5.83724 6.35505 6.60139 6.35505 7.55662V20.3137H0V7.62028C0 3.41745 3.73417 0 8.3265 0C10.2052 0 11.9215 0.573111 13.3131 1.5283C14.7047 0.573111 16.4442 0 18.2997 0C22.8921 0 26.6262 3.41745 26.6262 7.62028ZM40.9135 24.6863C34.7904 24.6863 29.8269 29.2288 29.8269 34.8325C29.8269 40.4363 34.7904 44.9788 40.9135 44.9788C47.0366 44.9788 52 40.4363 52 34.8325C52 29.2288 47.0366 24.6863 40.9135 24.6863ZM40.9135 39.1627C38.3158 39.1627 36.2052 37.2311 36.2052 34.8538C36.2052 32.4764 38.3158 30.5448 40.9135 30.5448C43.5112 30.5448 45.6218 32.4764 45.6218 34.8538C45.6218 37.2311 43.5112 39.1627 40.9135 39.1627ZM26.6262 32.3066V45H20.248V32.2429C20.248 31.2877 19.413 30.5236 18.3693 30.5236C17.3256 30.5236 16.4906 31.2877 16.4906 32.2429V45H10.1124V32.2429C10.1124 31.2877 9.27745 30.5236 8.23371 30.5236C7.19003 30.5236 6.35505 31.2877 6.35505 32.2429V45H0V32.3066C0 28.1038 3.73417 24.6863 8.3265 24.6863C10.2052 24.6863 11.9215 25.2594 13.3131 26.2146C14.7047 25.2594 16.4211 24.6863 18.2997 24.6863C22.8921 24.6863 26.6262 28.1038 26.6262 32.3066Z"
                    fill="#AD006C"
                  />
                </svg>
              </SwiperSlide>
              <SwiperSlide className="h-full">Slide 3</SwiperSlide>
              <SwiperSlide className="h-full">Slide 4</SwiperSlide>
              <SwiperSlide className="h-full">Slide 5</SwiperSlide>
              <SwiperSlide className="h-full">Slide 6</SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default Partner;
