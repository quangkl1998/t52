import React from "react";
import { NavLink } from "react-router-dom";

const Action = () => {
  return (
    <div className="bg-red-600">
      <div className="container mx-auto">
        <div className="  shadow-md lg:px-5 border-b-4 border-solid border-yellow-500">
          <div className="grid md:grid-cols-2 grid-cols-1 px-5 md:px-10 lg:px-16 py-5  text-white">
            <NavLink to={"/"}>
              <div className="flex  items-center justify-between md:px-5 mb-2 md:mb-0">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <circle cx="20" cy="20" r="20" fill="white" />
                    <path
                      d="M7.37305 14.3623V23.5019L9.55432 24.5729C9.97017 24.7782 10.4684 24.597 10.6685 24.1702L13.3872 18.304C13.5834 17.8812 13.4108 17.3699 12.9988 17.1646L7.37305 14.3623Z"
                      stroke="rgb(220 38 38)"
                      strokeMiterlimit="{10}"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.7271 24.0337C10.7271 24.0337 11.7863 25.1047 11.9628 26.236"
                      stroke="rgb(220 38 38)"
                      strokeMiterlimit="{10}"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.4233 18.2678C14.4233 18.2678 14.8196 18.5335 16.3261 17.5954C17.8326 16.6573 18.8055 16.7539 20.669 17.9497"
                      stroke="rgb(220 38 38)"
                      strokeMiterlimit="{10}"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M32.6259 14.9097L26.702 17.8448C26.4156 17.9857 26.2979 18.3441 26.4391 18.6339L29.4364 24.7901C29.5777 25.0759 29.9151 25.1967 30.1936 25.0558L32.622 23.86V14.9097H32.6259Z"
                      stroke="rgb(220 38 38)"
                      strokeMiterlimit="{10}"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.4395 18.6381C26.4395 18.6381 25.2665 18.8878 24.3759 18.304C23.4854 17.7202 22.332 17.088 20.4292 18.0865C18.5265 19.0851 16.4826 19.3468 16.0079 19.3266C15.4939 19.9587 16.6238 22.1128 18.3068 21.4847C19.9938 20.8526 20.39 21.3236 21.6179 22.5637C22.8459 23.8038 25.9413 25.4143 27.1692 26.0625C28.3971 26.7148 28.0794 28.7883 26.7337 28.6273C25.3842 28.4662 24.7918 27.4274 23.5207 26.9805"
                      stroke="rgb(220 38 38)"
                      strokeMiterlimit="{10}"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.3809 25.1323C28.3809 25.1323 27.9298 25.8852 27.9102 27.073"
                      stroke="rgb(220 38 38)"
                      strokeMiterlimit="{10}"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.5239 28.4419C21.5239 28.4419 23.3482 29.5209 24.1603 30.0081C24.9724 30.4953 25.706 29.9074 26.0238 29.5813"
                      stroke="rgb(220 38 38)"
                      strokeMiterlimit="{10}"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.8098 30.4751C20.8098 30.4751 23.0735 32.1702 24.3014 30.0806"
                      stroke="rgb(220 38 38)"
                      strokeMiterlimit="{10}"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.7117 31.8536C19.7117 31.8536 20.551 32.3476 21.52 30.874"
                      stroke="rgb(220 38 38)"
                      strokeMiterlimit="{10}"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.4263 28.8407C12.0065 28.4945 11.9438 27.8624 12.2812 27.4315L12.8422 26.7229C13.1796 26.2921 13.7955 26.2277 14.2153 26.574C14.635 26.9202 14.6978 27.5523 14.3604 27.9831L13.7994 28.6918C13.462 29.1226 12.8461 29.187 12.4263 28.8407Z"
                      stroke="rgb(220 38 38)"
                      strokeMiterlimit="{10}"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.2073 29.8073C13.7718 29.445 13.7051 28.7927 14.0582 28.3458L14.8546 27.3393C15.2077 26.8923 15.8433 26.8239 16.2787 27.1863C16.7142 27.5486 16.7809 28.2009 16.4278 28.6478L15.6314 29.6543C15.2783 30.1013 14.6428 30.1697 14.2073 29.8073Z"
                      stroke="rgb(220 38 38)"
                      strokeMiterlimit="{10}"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.6946 32.4362C17.2591 32.0739 17.1925 31.4216 17.5455 30.9747L18.3419 29.9682C18.695 29.5212 19.3306 29.4528 19.766 29.8152C20.2015 30.1775 20.2682 30.8298 19.9151 31.2767L19.1187 32.2833C18.7656 32.7261 18.1301 32.7946 17.6946 32.4362Z"
                      stroke="rgb(220 38 38)"
                      strokeMiterlimit="{10}"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.7294 31.4095C15.239 30.9989 15.1605 30.2621 15.5607 29.7547L17.2045 27.6732C17.6047 27.1699 18.3226 27.0894 18.8169 27.5001C19.3073 27.9107 19.3858 28.6475 18.9856 29.1548L17.3418 31.2364C16.9417 31.7397 16.2198 31.8202 15.7294 31.4095Z"
                      stroke="rgb(220 38 38)"
                      strokeMiterlimit="{10}"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="11.4817"
                      y1="9.75616"
                      x2="14.9015"
                      y2="14.1531"
                      stroke="url(#paint0_linear_756_2494)"
                      strokeLinecap="round"
                    />
                    <line
                      x1="28.627"
                      y1="9.77377"
                      x2="25.869"
                      y2="14.6134"
                      stroke="url(#paint1_linear_756_2494)"
                      strokeLinecap="round"
                    />
                    <line
                      x1="20.5764"
                      y1="8.44572"
                      x2="20.5062"
                      y2="14.0156"
                      stroke="url(#paint2_linear_756_2494)"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_756_2494"
                        x1="10.3854"
                        y1="9.97543"
                        x2="14.4191"
                        y2="15.1617"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFCB05" />
                        <stop offset="1" stopColor="#FCAF17" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_756_2494"
                        x1="28.0058"
                        y1="8.84423"
                        x2="24.7526"
                        y2="14.5527"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFCB05" />
                        <stop offset="1" stopColor="#FCAF17" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_756_2494"
                        x1="19.5828"
                        y1="7.93315"
                        x2="19.5"
                        y2="14.503"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFCB05" />
                        <stop offset="1" stopColor="#FCAF17" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="text-white text-2xl pl-6">
                    Trở thành đối tác của T52
                  </div>
                </div>
                <svg
                  className="text-white text-2xl "
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="arrow-right"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
                </svg>
              </div>
            </NavLink>
            <NavLink to={"/"}>
              <div className="flex  items-center justify-between md:px-5">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <circle cx="30" cy="30" r="30" fill="white" />
                    <path
                      d="M21 35.15L15 44.15C20 41.1499 26.5 43.1501 29.5 45.1501C34.7 41.1501 41.3333 43.1501 44 44.6501L38.5 35.6501C37.3333 35.1501 34 34.35 30 35.15C27.6 33.55 23 34.4834 21 35.15Z"
                      stroke="rgb(220 38 38)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M37.1843 29.4218C38.324 27.9139 39 26.0359 39 24C39 19.0294 34.9706 15 30 15C25.0294 15 21 19.0294 21 24C21 26.0294 21.6717 27.9019 22.8048 29.4073L29.9998 39.3004L37.1843 29.4218Z"
                      fill="white"
                    />
                    <path
                      d="M37.1843 29.4218L36.5858 28.9695L36.5777 28.9806L37.1843 29.4218ZM22.8048 29.4073L23.4115 28.9661L23.404 28.9563L22.8048 29.4073ZM29.9998 39.3004L29.3933 39.7415C29.5344 39.9356 29.7599 40.0504 29.9998 40.0504C30.2398 40.0504 30.4652 39.9356 30.6064 39.7415L29.9998 39.3004ZM38.25 24C38.25 25.8671 37.6307 27.5873 36.5859 28.9695L37.7826 29.874C39.0173 28.2404 39.75 26.2047 39.75 24H38.25ZM30 15.75C34.5563 15.75 38.25 19.4437 38.25 24H39.75C39.75 18.6152 35.3848 14.25 30 14.25V15.75ZM21.75 24C21.75 19.4437 25.4437 15.75 30 15.75V14.25C24.6152 14.25 20.25 18.6152 20.25 24H21.75ZM23.404 28.9563C22.3654 27.5763 21.75 25.8611 21.75 24H20.25C20.25 26.1976 20.978 28.2274 22.2056 29.8583L23.404 28.9563ZM22.1983 29.8484L29.3933 39.7415L30.6064 38.8593L23.4114 28.9662L22.1983 29.8484ZM30.6064 39.7415L37.7908 29.8629L36.5777 28.9806L29.3933 38.8593L30.6064 39.7415Z"
                      fill="#FFB800"
                    />
                    <circle
                      cx="30"
                      cy="23.6504"
                      r="2.25"
                      stroke="#FFB800"
                      strokeWidth="1.5"
                    />
                  </svg>

                  <div className="text-white text-2xl pl-6">
                    Tìm kiếm cửa hàng gần bạn
                  </div>
                </div>
                <svg
                  className="text-white text-2xl "
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="arrow-right"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
                </svg>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
