import React from "react";
import { Tabs } from "antd";
import check from "Assets/icons/check.png";
import homeimage1 from "Assets/img/Loan/19bT52tiennhanh3.png";
import homeimage2 from "Assets/img/Loan/19aT52tiennhanh(ZALO).png";

import homeimage3 from "Assets/img/Loan/18bT52aicungthich(ZALO).png";
import homeimage4 from "Assets/img/Loan/21a,T52(ZALO).png";

import homeimage6 from "Assets/img/Loan/18aT52aicungthich(ZALO).jpg";
const OutStandingService = () => {
  const item = [
    {
      label: (
        <div>
          <div className="justify-center  flex  ">
            <svg
              className="h-20"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={49}
              viewBox="0 0 40 49"
              fill="none"
            >
              <path
                d="M26.7002 15.7C34.4002 23.44 32.0102 33.52 30.8202 38.58C27.9602 40.33 25.1202 41.19 22.4902 41.51"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M17.3705 41.5C12.3705 40.89 8.92047 38.78 8.92047 38.78C8.92047 38.78 7.73047 36.3 7.73047 28.16C7.73047 20.02 12.6505 15.7 12.6505 15.7"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M22.4794 38.05V45.65C22.4794 47.06 21.3294 48.21 19.9194 48.21C18.5094 48.21 17.3594 47.06 17.3594 45.65V38.02"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M14.3203 30.54V37.19C14.3203 37.19 19.6803 39.57 25.5403 37.19C25.5403 33.07 25.5403 30.54 25.5403 30.54C25.5403 30.54 20.3903 26.33 14.3203 30.54Z"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M20.6797 21.11C20.6797 20.6958 20.3439 20.36 19.9297 20.36C19.5155 20.36 19.1797 20.6958 19.1797 21.11H20.6797ZM19.1797 28.67C19.1797 29.0842 19.5155 29.42 19.9297 29.42C20.3439 29.42 20.6797 29.0842 20.6797 28.67H19.1797ZM19.1797 21.11V28.67H20.6797V21.11H19.1797Z"
                fill="rgb(220 38 38)"
              />
              <path
                d="M28.0999 22.941C27.8243 22.6318 27.3502 22.6045 27.041 22.8801C26.7318 23.1557 26.7045 23.6298 26.9802 23.939L28.0999 22.941ZM27.8401 28.7774C27.7724 29.186 28.0488 29.5722 28.4574 29.6399C28.866 29.7076 29.2522 29.4313 29.3199 29.0226L27.8401 28.7774ZM27.54 23.44C26.9802 23.939 26.9799 23.9387 26.9796 23.9384C26.9795 23.9383 26.9793 23.938 26.9791 23.9378C26.9788 23.9375 26.9785 23.9371 26.9782 23.9368C26.9776 23.9362 26.9772 23.9357 26.9768 23.9352C26.9761 23.9344 26.9757 23.934 26.9757 23.934C26.9758 23.9341 26.9773 23.9358 26.9801 23.9393C26.9858 23.9462 26.9969 23.9599 27.0125 23.9803C27.0437 24.0213 27.0927 24.0893 27.1524 24.184C27.2719 24.3735 27.4336 24.6694 27.581 25.071C27.874 25.8692 28.1176 27.103 27.8401 28.7774L29.3199 29.0226C29.6424 27.077 29.366 25.5808 28.9891 24.554C28.8015 24.0431 28.5907 23.6528 28.4214 23.3842C28.3367 23.2498 28.2623 23.1457 28.2062 23.0719C28.1781 23.035 28.1545 23.0056 28.1365 22.9838C28.1275 22.9729 28.1198 22.9639 28.1137 22.9568C28.1106 22.9532 28.1079 22.9501 28.1056 22.9475C28.1045 22.9461 28.1034 22.9449 28.1025 22.9439C28.102 22.9433 28.1016 22.9428 28.1011 22.9423C28.1009 22.9421 28.1006 22.9417 28.1005 22.9416C28.1002 22.9413 28.0999 22.941 27.54 23.44Z"
                fill="#FDB813"
              />
              <path
                d="M12.6704 23.939C12.946 23.6298 12.9187 23.1557 12.6095 22.8801C12.3003 22.6045 11.8262 22.6318 11.5506 22.941L12.6704 23.939ZM10.3306 29.0226C10.3983 29.4313 10.7845 29.7076 11.1931 29.6399C11.6018 29.5722 11.8781 29.186 11.8104 28.7774L10.3306 29.0226ZM12.1105 23.44C11.5506 22.941 11.5503 22.9413 11.55 22.9416C11.5499 22.9418 11.5496 22.9421 11.5494 22.9423C11.549 22.9428 11.5485 22.9433 11.548 22.9439C11.5471 22.9449 11.546 22.9461 11.5449 22.9475C11.5426 22.9501 11.5399 22.9532 11.5368 22.9568C11.5307 22.9639 11.523 22.9729 11.514 22.9838C11.496 23.0056 11.4725 23.035 11.4444 23.0719C11.3882 23.1457 11.3138 23.2498 11.2291 23.3842C11.0598 23.6528 10.849 24.0431 10.6614 24.554C10.2845 25.5808 10.0081 27.077 10.3306 29.0226L11.8104 28.7774C11.5329 27.103 11.7765 25.8692 12.0695 25.071C12.2169 24.6694 12.3787 24.3735 12.4981 24.184C12.5578 24.0893 12.6068 24.0213 12.638 23.9803C12.6536 23.9599 12.6647 23.9462 12.6704 23.9393C12.6732 23.9358 12.6747 23.9341 12.6748 23.934C12.6748 23.934 12.6744 23.9344 12.6737 23.9352C12.6733 23.9357 12.6729 23.9362 12.6723 23.9368C12.672 23.9371 12.6717 23.9375 12.6714 23.9378C12.6713 23.938 12.671 23.9383 12.6709 23.9384C12.6706 23.9387 12.6704 23.939 12.1105 23.44Z"
                fill="#FDB813"
              />
              <path
                d="M24.4003 10.64H27.8803C28.6803 10.64 29.3303 11.29 29.3303 12.09V14.26C29.3303 15.06 28.6803 15.71 27.8803 15.71H23.3203"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M15.3803 10.64H11.5203C10.7203 10.64 10.0703 11.29 10.0703 12.09V14.26C10.0703 15.06 10.7203 15.71 11.5203 15.71H16.4603"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M29.1895 11.48H35.1795C36.1095 11.48 36.8695 12.24 36.8695 13.17C36.8695 13.64 36.6795 14.06 36.3795 14.36C36.0795 14.67 35.6495 14.85 35.1895 14.85H29.1995"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M10.1995 14.85H4.20953C3.27953 14.85 2.51953 14.09 2.51953 13.16C2.51953 12.7 2.70953 12.27 3.00953 11.97C3.30953 11.66 3.73953 11.48 4.19953 11.48H10.1995"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M27.8799 10.64C27.8799 10.64 28.3099 8.01 29.1899 7.19C30.0699 6.37 33.7899 4.73 33.7899 4.73"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M36.0192 6.14C37.4386 6.14 38.5892 4.98937 38.5892 3.57C38.5892 2.15063 37.4386 1 36.0192 1C34.5998 1 33.4492 2.15063 33.4492 3.57C33.4492 4.98937 34.5998 6.14 36.0192 6.14Z"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M11.7198 10.64C11.7198 10.64 11.2898 8.01 10.4098 7.19C9.5298 6.37 5.7998 4.73 5.7998 4.73"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M3.57 6.14C4.98937 6.14 6.14 4.98937 6.14 3.57C6.14 2.15063 4.98937 1 3.57 1C2.15063 1 1 2.15063 1 3.57C1 4.98937 2.15063 6.14 3.57 6.14Z"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M19.8903 17.14C22.5523 17.14 24.7103 14.982 24.7103 12.32C24.7103 9.65799 22.5523 7.5 19.8903 7.5C17.2283 7.5 15.0703 9.65799 15.0703 12.32C15.0703 14.982 17.2283 17.14 19.8903 17.14Z"
                stroke="#FDB813"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
            </svg>
          </div>
          <div>Xe máy</div>
        </div>
      ),
      key: "1",
      children: (
        <div className="md:w-3/4 w-full m-auto p-8 border-b ">
          <div className="grid lg:grid-cols-10 grid-cols-1">
            <div className="block md:hidden lg:col-span-6 col-span-1 mt-2">
              <div>
                <img src={homeimage1} alt="home-image-1" />
              </div>
            </div>
            <div className=" lg:col-span-4 col-span-1 ">
              <h2 className="font-bold text-xl text-red-600 mt-2 text-left">
                GÓI VAY BẰNG CÀ VẸT XE MÁY
              </h2>
              <div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4 ">
                    Không giữ, tài sản vẫn được sử dụng
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Giải ngân lên đến 100 triệu
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Có tiền trong 05 phút
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Không thu phí dịch vụ
                  </p>
                </div>
              </div>
              <div className="flex">
                <button className="rounded-md font-medium text-base cursor-pointer p-2  text-white  bg-red-600">
                  Vay ngay
                </button>
              </div>
            </div>
            <div className=" lg:col-span-6 col-span-1 hidden md:block mt-2 ">
              <div className="lg:ml-5">
                <img src={homeimage1} alt="home-image-1" />
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      label: (
        <div className="items-center">
          <div className="justify-center  flex  ">
            <svg
              version="1.1"
              width="50"
              viewBox="0 0 512 512"
              fill="none"
              className="h-20"
            >
              <g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m435.043 60.652v-60.652h-90v60.652h-54.647l-33.761-42.86-33.761 42.86h-222.874v130.881h30v290.467h-30v30h512v-30h-30v-290.467h30v-130.881zm-60-30.652h30v30.652h-30zm-345.043 60.652h169.245l-55.832 70.881h-113.413zm211 391.348v-110.733h30v110.733zm211 0h-151v-140.733h-90v140.733h-151v-290.467h97.971l98.665-125.259 98.665 125.259h96.699zm-82.141-320.467-55.832-70.881h167.973v70.881z"
                    fill="rgb(220 38 38)"
                    data-original="#000000"
                  />
                  <path
                    d="m256 221.267c-24.813 0-45 20.187-45 45v45h90v-45c0-24.814-20.187-45-45-45zm15 60h-30v-15c0-8.271 6.729-15 15-15s15 6.729 15 15z"
                    fill="rgb(220 38 38)"
                    data-original="#000000"
                  />
                  <path
                    d="m136.783 221.267c-24.813 0-45 20.187-45 45v45h90v-45c0-24.814-20.187-45-45-45zm15 60h-30v-15c0-8.271 6.729-15 15-15s15 6.729 15 15z"
                    fill="rgb(220 38 38)"
                    data-original="#000000"
                  />
                  <path
                    d="m330.783 266.267v45h90v-45c0-24.813-20.187-45-45-45s-45 20.186-45 45zm30 0c0-8.271 6.729-15 15-15s15 6.729 15 15v15h-30z"
                    fill="rgb(220 38 38)"
                    data-original="#000000"
                  />
                  <path
                    d="m91.783 431.267h90v-90h-90zm30-60h30v30h-30z"
                    fill="rgb(220 38 38)"
                    data-original="#000000"
                  />
                  <path
                    d="m330.783 431.267h90v-90h-90zm30-60h30v30h-30z"
                    fill="rgb(220 38 38)"
                    data-original="#000000"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div>Bất động sản</div>
        </div>
      ),
      key: "2",
      children: (
        <div className="md:w-3/4 w-full m-auto p-8 border-b ">
          <div className="grid lg:grid-cols-10 grid-cols-1">
            <div className="block md:hidden lg:col-span-6 col-span-1 mt-2">
              <div>
                <img src={homeimage2} alt="home-image-1" />
              </div>
            </div>
            <div className=" lg:col-span-4 col-span-1 ">
              <h2 className="font-bold text-xl text-red-600 mt-2 text-left">
                GÓI VAY BẰNG BẤT ĐỘNG SẢN
              </h2>
              <div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4 ">
                    Không giữ, tài sản vẫn được sử dụng
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Giải ngân lên đến 5 tỉ
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Có tiền trong 05 phút
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Không thu phí dịch vụ
                  </p>
                </div>
              </div>
              <div className="flex">
                <button className="rounded-md font-medium text-base cursor-pointer p-2  text-white  bg-red-600">
                  Vay ngay
                </button>
              </div>
            </div>
            <div className=" lg:col-span-6 col-span-1 hidden md:block mt-2 ">
              <div className="lg:ml-5">
                <img src={homeimage2} alt="home-image-1" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: (
        <div className="items-center">
          <div className="justify-center  flex  ">
            <svg
              className="h-20"
              xmlns="http://www.w3.org/2000/svg"
              width={45}
              height={37}
              viewBox="0 0 45 37"
              fill="none"
            >
              <path
                d="M1 29.67V19.92C1 19.57 1.09 19.23 1.25 18.92L3.13 15.5C3.24 15.31 3.32 15.1 3.37 14.88L6.24 3.92C6.69 2.2 8.24 1 10.01 1H34.56C36.34 1 37.9 2.21 38.34 3.93L41.27 15.32C41.33 15.57 41.43 15.8 41.56 16.02L43.23 18.84C43.42 19.16 43.52 19.52 43.52 19.89V29.67C43.52 30.06 43.2 30.38 42.81 30.38H1.71C1.32 30.38 1 30.06 1 29.67Z"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.0498 15.52H38.3298"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M40.7996 25.42H38.1996C36.4896 25.42 35.0996 24.03 35.0996 22.32C35.0996 21.46 35.4496 20.69 36.0096 20.13C36.5696 19.57 37.3496 19.22 38.1996 19.22H40.4396"
                stroke="#FDB813"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.19008 19.22H6.43008C7.29008 19.22 8.06008 19.57 8.62008 20.13C9.18008 20.69 9.53008 21.47 9.53008 22.32C9.53008 24.03 8.14008 25.42 6.43008 25.42H3.83008"
                stroke="#FDB813"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29.2694 25.69H15.2494C14.6594 25.69 14.1294 26.08 13.9594 26.65L12.8594 30.38H31.6394L30.5394 26.65C30.3894 26.08 29.8594 25.69 29.2694 25.69Z"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42.8102 30.38V36.15H35.4102V33.27"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.80957 30.38V36.15H9.20957V33.27"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M40.3301 11.64H42.5101"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.01953 11.64H4.19953"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>Ô tô</div>
        </div>
      ),
      key: "3",
      children: (
        <div className="md:w-3/4 w-full m-auto p-8 border-b ">
          <div className="grid lg:grid-cols-10 grid-cols-1">
            <div className="block md:hidden lg:col-span-6 col-span-1 mt-2">
              <div>
                <img src={homeimage3} alt="home-image-4" />
              </div>
            </div>
            <div className=" lg:col-span-4 col-span-1 ">
              <h2 className="font-bold text-xl text-red-600 mt-2 text-left">
                GÓI VAY BẰNG CÀ VẸT Ô TÔ
              </h2>
              <div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4 ">
                    Không giữ, tài sản vẫn được sử dụng
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Giải ngân lên đến 2 tỉ
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Có tiền trong 05 phút
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Không thu phí dịch vụ
                  </p>
                </div>
              </div>
              <div className="flex">
                <button className="rounded-md font-medium text-base cursor-pointer p-2  text-white  bg-red-600">
                  Vay ngay
                </button>
              </div>
            </div>
            <div className=" lg:col-span-6 col-span-1 hidden md:block mt-2 ">
              <div className="lg:ml-5">
                <img src={homeimage3} alt="home-image-4" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: (
        <div className="items-center">
          <div className="justify-center  flex  ">
            <svg
              className="h-20"
              xmlns="http://www.w3.org/2000/svg"
              width={37}
              height={43}
              viewBox="0 0 37 43"
              fill="none"
            >
              <path
                d="M29.992 26.79C29.992 26.79 29.992 5.37 29.992 3.38C29.992 1.4 29.152 1 27.522 1C25.892 1 10.842 1 9.34203 1C7.84203 1 6.83203 1.4 6.83203 2.85C6.83203 3.1 6.83203 4.28 6.83203 6.07C6.83203 7.97 6.83203 10.56 6.83203 13.46C6.83203 13.69 6.83203 13.92 6.83203 14.15"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M6.83203 30.14C6.83203 30.08 6.83203 30.01 6.83203 29.95"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M6.83203 38.13C6.83203 39.11 6.83203 39.74 6.83203 39.92C6.83203 41.42 7.76203 41.69 8.95203 41.69C10.142 41.69 24.572 41.69 24.572 41.69C24.572 41.69 24.612 36.13 24.572 32.91C24.532 29.69 30.042 26.8 30.042 26.8C30.042 26.8 30.022 23.43 30.022 21.44C30.022 13.01 35.472 14.87 35.472 14.87V41.7"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M9.21597 16.9821C9.17847 17.3946 9.48248 17.7594 9.89499 17.7969C10.3075 17.8344 10.6723 17.5304 10.7098 17.1179L9.21597 16.9821ZM11.9082 21.9259C11.6795 21.5806 11.2142 21.486 10.8688 21.7147C10.5235 21.9434 10.4289 22.4087 10.6576 22.7541L11.9082 21.9259ZM10.7098 17.1179C11.055 13.3208 14.2442 10.35 18.1329 10.35V8.85001C13.4616 8.85001 9.63078 12.4192 9.21597 16.9821L10.7098 17.1179ZM18.1329 10.35C22.2493 10.35 25.5929 13.6848 25.5929 17.81H27.0929C27.0929 12.8552 23.0765 8.85001 18.1329 8.85001V10.35ZM25.5929 17.81C25.5929 21.9358 22.2587 25.27 18.1329 25.27V26.77C23.0871 26.77 27.0929 22.7642 27.0929 17.81H25.5929ZM18.1329 25.27C15.5344 25.27 13.2449 23.9445 11.9082 21.9259L10.6576 22.7541C12.2609 25.1755 15.0114 26.77 18.1329 26.77V25.27Z"
                fill="#FDB813"
              />
              <path
                d="M6.83203 22.18C6.83203 22.1 6.83203 22.01 6.83203 21.93"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M11.2623 22.36C10.1523 23.47 8.3623 23.47 7.2523 22.36L3.6323 18.74C2.5223 17.63 2.5223 15.84 3.6323 14.73C4.7423 13.62 6.5323 13.62 7.6423 14.73L11.2623 18.35C12.3723 19.46 12.3723 21.25 11.2623 22.36Z"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M6.8325 13.47C6.3225 13.36 5.8425 13.11 5.4525 12.71L1.8325 9.09C0.7225 7.98 0.7225 6.19 1.8325 5.08C2.3825 4.53 3.1125 4.25 3.8325 4.25C4.5625 4.25 5.2825 4.53 5.8325 5.08L6.8225 6.07"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M11.2623 30.38C10.1523 31.49 8.3623 31.49 7.2523 30.38L3.6323 26.76C2.5223 25.65 2.5223 23.86 3.6323 22.75C4.7423 21.64 6.5323 21.64 7.6423 22.75L11.2623 26.37C12.3723 27.48 12.3723 29.27 11.2623 30.38Z"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M10.6422 37.95C9.53219 39.06 7.74219 39.06 6.63219 37.95L3.01219 34.33C1.90219 33.22 1.90219 31.43 3.01219 30.32C4.12219 29.21 5.91219 29.21 7.02219 30.32L10.6422 33.94C11.7522 35.05 11.7522 36.84 10.6422 37.95Z"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M11.3418 35.1H24.5818"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M16.0332 38.37H21.1532"
                stroke="rgb(220 38 38)"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
            </svg>
          </div>
          <div>Tài sản khác</div>
        </div>
      ),
      key: "4",
      children: (
        <div className="md:w-3/4 w-full m-auto p-8 border-b ">
          <div className="grid lg:grid-cols-10 grid-cols-1">
            <div className="block md:hidden lg:col-span-6 col-span-1 mt-2">
              <div>
                <img src={homeimage4} alt="home-image-1" />
              </div>
            </div>
            <div className=" lg:col-span-4 col-span-1 ">
              <h2 className="font-bold text-xl text-red-600 mt-2 text-left">
                VAY BẰNG TÀI SẢN KHÁC
              </h2>
              <div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4 ">
                    Không giữ, tài sản vẫn được sử dụng
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Giải ngân từ 3 triệu đến 1 tỉ
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Có tiền trong 05 phút
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Không thu phí dịch vụ
                  </p>
                </div>
              </div>
              <div className="flex">
                <button className="rounded-md font-medium text-base cursor-pointer p-2  text-white  bg-red-600">
                  Vay ngay
                </button>
              </div>
            </div>
            <div className=" lg:col-span-6 col-span-1 hidden md:block mt-2 ">
              <div className="lg:ml-5">
                <img src={homeimage4} alt="home-image-1" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: (
        <div>
          <div className="justify-center  flex  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="h-20"
              version="1.1"
              width={50}
              height={38}
              x={0}
              y={0}
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m89.762 168.817.238-.204v87.387c0 8.284 6.716 15 15 15h140c8.284 0 15-6.716 15-15v-87.387l.238.204c2.829 2.425 6.3 3.612 9.755 3.611 4.227 0 8.429-1.777 11.396-5.238 5.392-6.29 4.663-15.759-1.627-21.15l-95-81.429c-5.617-4.814-13.906-4.814-19.523 0l-95 81.429c-6.29 5.392-7.019 14.86-1.627 21.15 5.39 6.291 14.86 7.019 21.15 1.627zm85.238-73.061 55 47.143v98.101h-40v-25c0-8.284-6.716-15-15-15s-15 6.716-15 15v25h-40v-98.101z"
                    fill="rgb(220 38 38)"
                    data-original="#000000"
                  />
                  <path
                    d="m165 171h20c8.284 0 15-6.716 15-15s-6.716-15-15-15h-20c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
                    fill="rgb(220 38 38)"
                    data-original="#000000"
                  />
                  <path
                    d="m75 331h140c8.284 0 15-6.716 15-15s-6.716-15-15-15h-140c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
                    fill="rgb(220 38 38)"
                    data-original="#000000"
                  />
                  <path
                    d="m75 391h140c8.284 0 15-6.716 15-15s-6.716-15-15-15h-140c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
                    fill="rgb(220 38 38)"
                    data-original="#000000"
                  />
                  <path
                    d="m488.234 245.081 10.606-10.606c17.546-17.546 17.546-46.094 0-63.64-17.545-17.545-46.094-17.545-63.639 0l-21.214 21.214-63.987 63.987v-155.036h65c8.284 0 15-6.716 15-15v-30c0-30.327-24.673-55-55-55h-320c-30.327 0-55 24.673-55 55v400c0 30.327 24.673 55 55 55h320c30.327 0 55-24.673 55-55v-30c0-8.284-6.716-15-15-15h-65v-27.692c.115-.115.233-.226.348-.341l116.672-116.672 3.536 3.536c5.849 5.849 5.849 15.364.001 21.213l-77.782 77.782c-5.858 5.857-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.465 10.606-4.394l77.783-77.782c17.543-17.545 17.543-46.094-.001-63.639zm-113.234-214.081c13.785 0 25 11.215 25 25v15h-50v-15c0-13.785 11.215-25 25-25zm25 410v15c0 13.785-11.215 25-25 25s-25-11.215-25-25v-15zm-73.983 40h-271.017c-13.785 0-25-11.215-25-25v-400c0-13.785 11.215-25 25-25h271.017c-3.845 7.505-6.017 16.004-6.017 25v230.036l-33.291 33.291c-23.865 23.866-40.02 55.041-45.851 88.258l-13.416 13.415h-152.442c-8.284 0-15 6.716-15 15s6.716 15 15 15h158.655c4.143 0 7.894-1.68 10.609-4.396l17.776-17.776c20.512-3.594 40.244-11.126 57.96-21.981v49.153c0 8.996 2.172 17.495 6.017 25zm3.118-119.246c-15.166 15.165-33.937 26.529-54.298 33.084 6.555-20.36 17.919-39.132 33.084-54.298l116.673-116.672 21.214 21.213zm148.493-148.492-10.606 10.606-21.214-21.213 10.607-10.607c5.848-5.848 15.365-5.848 21.213 0s5.848 15.365 0 21.214z"
                    fill="rgb(220 38 38)"
                    data-original="#000000"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div>Mua bán cho thuê</div>
        </div>
      ),
      key: "5",
      children: (
        <div className="md:w-3/4 w-full m-auto p-8 border-b ">
          <div className="grid lg:grid-cols-10 grid-cols-1">
            <div className="block md:hidden lg:col-span-6 col-span-1 mt-2">
              <div>
                <img src={homeimage6} alt="home-image-1" />
              </div>
            </div>
            <div className=" lg:col-span-4 col-span-1">
              <h2 className="font-bold text-xl text-red-600 mt-2 text-left">
                MUA BÁN, CHO THUÊ XE MÁY, Ô-TÔ, BẤT ĐỘNG SẢN
              </h2>
              <div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4 ">
                    Linh động đáp ứng nhu cầu
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Mua bán với giá thị trường
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Có tiền trong 05 phút
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Không thu phí dịch vụ
                  </p>
                </div>
              </div>
              <div className="flex">
                <button className="rounded-md font-medium text-base cursor-pointer p-2  text-white  bg-red-600">
                  Vay ngay
                </button>
              </div>
            </div>
            <div className=" lg:col-span-6 col-span-1 hidden md:block mt-2 ">
              <div className="lg:ml-5">
                <img src={homeimage6} alt="home-image-1" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="text-center pt-5 md:pt-10 bg-gray-100">
      <div>
        <h2 className=" text-red-600 md:text-3xl font-bold text-2xl mb-3 md:leading-6">
          Dịch vụ nổi bật
        </h2>
        <p className=" text-gray-500 font-medium leading-4 md:text-base text-sm py-3">
          Khám phá các sản phẩm vay và bảo hiểm sức khỏe đang được nhiều khách
          hàng sử dụng tại F88
        </p>
        <div className="card-container">
          <Tabs centered type="card" items={item} />
        </div>
      </div>
    </div>
  );
};

export default OutStandingService;
