import React from "react";
import { Tabs } from "antd";
import check from "Assets/icons/check.png";
import homeimage1 from "Assets/items/home-image-1.jpg";
import homeimage2 from "Assets/items/home-image-2.jpg";
import homeimage3 from "Assets/items/home-image-3.jpg";
import homeimage4 from "Assets/items/home-image-4.jpg";
import homeimage5 from "Assets/items/home-image-5.png";
import homeimage6 from "Assets/items/home-image-6.jpg";
const OutStandingService = () => {
  const item = [
    {
      label: (
        <div>
          <div className="justify-center  flex  ">
            <svg
              className="h-20"
              xmlns="http://www.w3.org/2000/svg"
              width={56}
              height={38}
              viewBox="0 0 56 38"
              fill="none"
            >
              <path
                d="M37.1147 26.9264H6.24208C3.34296 26.9264 1 24.5716 1 21.6843V6.24208C1 3.34296 3.35479 1 6.24208 1H37.1147C40.0138 1 42.3568 3.35479 42.3568 6.24208V21.6725C42.3686 24.5834 40.0138 26.9264 37.1147 26.9264Z"
                stroke="#E11D48"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M46.1559 11.1711H49.4692C52.3683 11.1711 54.7231 13.5259 54.7231 16.425V31.8554C54.7231 34.7545 52.3683 37.1093 49.4692 37.1093H18.5966C15.7093 37.1093 13.3545 34.7545 13.3545 31.8554V29.8793"
                stroke="#FDB813"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M20.7945 20.5958H19.9442C18.5516 20.5958 17.4238 19.4345 17.4238 18.0024V10.8418C17.4238 9.40966 18.5516 8.24835 19.9442 8.24835H22.0314H24.1186C25.5112 8.24835 26.6389 9.40966 26.6389 10.8418V18.0024C26.6389 19.4345 25.5112 20.5958 24.1186 20.5958H23.2682"
                stroke="#E11D48"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M22.0311 8.24836C23.1712 8.24836 24.0954 7.29734 24.0954 6.12418C24.0954 4.95103 23.1712 4 22.0311 4C20.891 4 19.9668 4.95103 19.9668 6.12418C19.9668 7.29734 20.891 8.24836 22.0311 8.24836Z"
                stroke="#E11D48"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M22.0308 24C21.348 24 20.7939 23.4299 20.7939 22.7273V19.1311C20.7939 18.4285 21.348 17.8584 22.0308 17.8584C22.7136 17.8584 23.2676 18.4285 23.2676 19.1311V22.7273C23.2676 23.4307 22.7136 24 22.0308 24Z"
                stroke="#E11D48"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M28.3399 5.73463H24.0596"
                stroke="#E11D48"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M20.0022 5.73463H15.6602"
                stroke="#E11D48"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
            </svg>
          </div>
          <div>Vay đăng ký xe máy</div>
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
              <h2 className="font-bold text-xl text-rose-600 mt-2 text-left">
                GÓI VAY ĐĂNG KÝ XE MÁY
              </h2>
              <div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4 ">
                    Vay bằng đăng ký xe máy, không thế chấp xe, vừa có tiền vừa
                    có xe đi
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    15 phút có tiền
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Khoản vay lên đến 30 triệu
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Chi phí vay hợp lý
                  </p>
                </div>
              </div>
              <div className="flex">
                <button className="rounded-md font-medium text-base cursor-pointer p-2  text-white  bg-rose-600">
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
        <div>
          <div className="justify-center  flex  ">
            <svg
              className="h-20"
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={49}
              viewBox="0 0 40 49"
              fill="none"
            >
              <path
                d="M26.7002 15.7C34.4002 23.44 32.0102 33.52 30.8202 38.58C27.9602 40.33 25.1202 41.19 22.4902 41.51"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M17.3705 41.5C12.3705 40.89 8.92047 38.78 8.92047 38.78C8.92047 38.78 7.73047 36.3 7.73047 28.16C7.73047 20.02 12.6505 15.7 12.6505 15.7"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M22.4794 38.05V45.65C22.4794 47.06 21.3294 48.21 19.9194 48.21C18.5094 48.21 17.3594 47.06 17.3594 45.65V38.02"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M14.3203 30.54V37.19C14.3203 37.19 19.6803 39.57 25.5403 37.19C25.5403 33.07 25.5403 30.54 25.5403 30.54C25.5403 30.54 20.3903 26.33 14.3203 30.54Z"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M20.6797 21.11C20.6797 20.6958 20.3439 20.36 19.9297 20.36C19.5155 20.36 19.1797 20.6958 19.1797 21.11H20.6797ZM19.1797 28.67C19.1797 29.0842 19.5155 29.42 19.9297 29.42C20.3439 29.42 20.6797 29.0842 20.6797 28.67H19.1797ZM19.1797 21.11V28.67H20.6797V21.11H19.1797Z"
                fill="#00833E"
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
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M15.3803 10.64H11.5203C10.7203 10.64 10.0703 11.29 10.0703 12.09V14.26C10.0703 15.06 10.7203 15.71 11.5203 15.71H16.4603"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M29.1895 11.48H35.1795C36.1095 11.48 36.8695 12.24 36.8695 13.17C36.8695 13.64 36.6795 14.06 36.3795 14.36C36.0795 14.67 35.6495 14.85 35.1895 14.85H29.1995"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M10.1995 14.85H4.20953C3.27953 14.85 2.51953 14.09 2.51953 13.16C2.51953 12.7 2.70953 12.27 3.00953 11.97C3.30953 11.66 3.73953 11.48 4.19953 11.48H10.1995"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M27.8799 10.64C27.8799 10.64 28.3099 8.01 29.1899 7.19C30.0699 6.37 33.7899 4.73 33.7899 4.73"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M36.0192 6.14C37.4386 6.14 38.5892 4.98937 38.5892 3.57C38.5892 2.15063 37.4386 1 36.0192 1C34.5998 1 33.4492 2.15063 33.4492 3.57C33.4492 4.98937 34.5998 6.14 36.0192 6.14Z"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M11.7198 10.64C11.7198 10.64 11.2898 8.01 10.4098 7.19C9.5298 6.37 5.7998 4.73 5.7998 4.73"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M3.57 6.14C4.98937 6.14 6.14 4.98937 6.14 3.57C6.14 2.15063 4.98937 1 3.57 1C2.15063 1 1 2.15063 1 3.57C1 4.98937 2.15063 6.14 3.57 6.14Z"
                stroke="#00833E"
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
          <div>Vay xe máy</div>
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
              <h2 className="font-bold text-xl text-rose-600 mt-2 text-left">
                GÓI VAY XE MÁY
              </h2>
              <div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4 ">
                    Khoản vay lên đến 80 triệu, chỉ cần xe máy chính chủ
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Định giá tài sản cao
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    15 phút có tiền
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Chi phí vay thấp
                  </p>
                </div>
              </div>
              <div className="flex">
                <button className="rounded-md font-medium text-base cursor-pointer p-2  text-white  bg-rose-600">
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
              style={{ flex: "0 0 40px" }}
              xmlns="http://www.w3.org/2000/svg"
              width={56}
              height={38}
              viewBox="0 0 56 38"
              fill="none"
            >
              <path
                d="M37.1147 26.9264H6.24208C3.34296 26.9264 1 24.5716 1 21.6843V6.24208C1 3.34296 3.35479 1 6.24208 1H37.1147C40.0138 1 42.3568 3.35479 42.3568 6.24208V21.6725C42.3686 24.5834 40.0138 26.9264 37.1147 26.9264Z"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M46.1559 11.1711H49.4692C52.3683 11.1711 54.7231 13.5259 54.7231 16.425V31.8554C54.7231 34.7545 52.3683 37.1093 49.4692 37.1093H18.5966C15.7093 37.1093 13.3545 34.7545 13.3545 31.8554V29.8793"
                stroke="#FDB813"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M27.6531 18.9875H15.9189"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M9.70731 18.9875H8.77686C7.76004 18.9875 6.95053 18.1099 7.00236 17.0633L7.13686 14.4077C7.17265 13.7142 7.61936 13.1148 8.26228 12.9001L13.1206 11.2846C13.3489 11.2097 13.5475 11.0599 13.687 10.8579L16.0476 7.44277C16.6745 6.53723 17.6876 6 18.7674 6H28.2495C29.5378 6 30.7237 6.72646 31.337 7.89236L32.6586 10.4058C32.9314 10.9252 33.3472 11.3494 33.8519 11.6276L35.8942 12.749C36.4989 13.0818 36.8765 13.7295 36.8765 14.4344V17.3135C36.8765 18.2381 36.1484 18.9875 35.2501 18.9875H33.8655"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M30.7588 21.873C32.483 21.873 33.8808 20.4344 33.8808 18.6598C33.8808 16.8852 32.483 15.4466 30.7588 15.4466C29.0345 15.4466 27.6367 16.8852 27.6367 18.6598C27.6367 20.4344 29.0345 21.873 30.7588 21.873Z"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M12.8135 21.873C14.5377 21.873 15.9355 20.4344 15.9355 18.6598C15.9355 16.8852 14.5377 15.4466 12.8135 15.4466C11.0892 15.4466 9.69141 16.8852 9.69141 18.6598C9.69141 20.4344 11.0892 21.873 12.8135 21.873Z"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
            </svg>
          </div>
          <div>Vay đăng ký ô tô</div>
        </div>
      ),
      key: "3",
      children: (
        <div className="md:w-3/4 w-full m-auto p-8 border-b ">
          <div className="grid lg:grid-cols-10 grid-cols-1">
            <div className="block md:hidden lg:col-span-6 col-span-1 mt-2">
              <div>
                <img src={homeimage3} alt="home-image-1" />
              </div>
            </div>
            <div className=" lg:col-span-4 col-span-1 ">
              <h2 className="font-bold text-xl text-rose-600 mt-2 text-left">
                GÓI VAY ĐĂNG KÝ Ô TÔ
              </h2>
              <div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4 ">
                    Khoản vay lên đến 1 tỷ. Chỉ cần đăng ký xe ô tô
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Vừa có tiền vừa có xe đi
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    15 phút có tiền
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Chi phí vay thấp
                  </p>
                </div>
              </div>
              <div className="flex">
                <button className="rounded-md font-medium text-base cursor-pointer p-2  text-white  bg-rose-600">
                  Vay ngay
                </button>
              </div>
            </div>
            <div className=" lg:col-span-6 col-span-1 hidden md:block mt-2 ">
              <div className="lg:ml-5">
                <img src={homeimage3} alt="home-image-1" />
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
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.0498 15.52H38.3298"
                stroke="#00833E"
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
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42.8102 30.38V36.15H35.4102V33.27"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.80957 30.38V36.15H9.20957V33.27"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M40.3301 11.64H42.5101"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.01953 11.64H4.19953"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>Vay ô tô</div>
        </div>
      ),
      key: "4",
      children: (
        <div className="md:w-3/4 w-full m-auto p-8 border-b ">
          <div className="grid lg:grid-cols-10 grid-cols-1">
            <div className="block md:hidden lg:col-span-6 col-span-1 mt-2">
              <div>
                <img src={homeimage4} alt="home-image-4" />
              </div>
            </div>
            <div className=" lg:col-span-4 col-span-1 ">
              <h2 className="font-bold text-xl text-rose-600 mt-2 text-left">
                GÓI VAY Ô TÔ
              </h2>
              <div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4 ">
                    Khoản vay lên đến 2 tỷ, chỉ cần xe ô tô chính chủ
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Định giá tài sản cao
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    30 phút có tiền
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Chi phí vay thấp
                  </p>
                </div>
              </div>
              <div className="flex">
                <button className="rounded-md font-medium text-base cursor-pointer p-2  text-white  bg-rose-600">
                  Vay ngay
                </button>
              </div>
            </div>
            <div className=" lg:col-span-6 col-span-1 hidden md:block mt-2 ">
              <div className="lg:ml-5">
                <img src={homeimage4} alt="home-image-4" />
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
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M6.83203 30.14C6.83203 30.08 6.83203 30.01 6.83203 29.95"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M6.83203 38.13C6.83203 39.11 6.83203 39.74 6.83203 39.92C6.83203 41.42 7.76203 41.69 8.95203 41.69C10.142 41.69 24.572 41.69 24.572 41.69C24.572 41.69 24.612 36.13 24.572 32.91C24.532 29.69 30.042 26.8 30.042 26.8C30.042 26.8 30.022 23.43 30.022 21.44C30.022 13.01 35.472 14.87 35.472 14.87V41.7"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M9.21597 16.9821C9.17847 17.3946 9.48248 17.7594 9.89499 17.7969C10.3075 17.8344 10.6723 17.5304 10.7098 17.1179L9.21597 16.9821ZM11.9082 21.9259C11.6795 21.5806 11.2142 21.486 10.8688 21.7147C10.5235 21.9434 10.4289 22.4087 10.6576 22.7541L11.9082 21.9259ZM10.7098 17.1179C11.055 13.3208 14.2442 10.35 18.1329 10.35V8.85001C13.4616 8.85001 9.63078 12.4192 9.21597 16.9821L10.7098 17.1179ZM18.1329 10.35C22.2493 10.35 25.5929 13.6848 25.5929 17.81H27.0929C27.0929 12.8552 23.0765 8.85001 18.1329 8.85001V10.35ZM25.5929 17.81C25.5929 21.9358 22.2587 25.27 18.1329 25.27V26.77C23.0871 26.77 27.0929 22.7642 27.0929 17.81H25.5929ZM18.1329 25.27C15.5344 25.27 13.2449 23.9445 11.9082 21.9259L10.6576 22.7541C12.2609 25.1755 15.0114 26.77 18.1329 26.77V25.27Z"
                fill="#FDB813"
              />
              <path
                d="M6.83203 22.18C6.83203 22.1 6.83203 22.01 6.83203 21.93"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M11.2623 22.36C10.1523 23.47 8.3623 23.47 7.2523 22.36L3.6323 18.74C2.5223 17.63 2.5223 15.84 3.6323 14.73C4.7423 13.62 6.5323 13.62 7.6423 14.73L11.2623 18.35C12.3723 19.46 12.3723 21.25 11.2623 22.36Z"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M6.8325 13.47C6.3225 13.36 5.8425 13.11 5.4525 12.71L1.8325 9.09C0.7225 7.98 0.7225 6.19 1.8325 5.08C2.3825 4.53 3.1125 4.25 3.8325 4.25C4.5625 4.25 5.2825 4.53 5.8325 5.08L6.8225 6.07"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M11.2623 30.38C10.1523 31.49 8.3623 31.49 7.2523 30.38L3.6323 26.76C2.5223 25.65 2.5223 23.86 3.6323 22.75C4.7423 21.64 6.5323 21.64 7.6423 22.75L11.2623 26.37C12.3723 27.48 12.3723 29.27 11.2623 30.38Z"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M10.6422 37.95C9.53219 39.06 7.74219 39.06 6.63219 37.95L3.01219 34.33C1.90219 33.22 1.90219 31.43 3.01219 30.32C4.12219 29.21 5.91219 29.21 7.02219 30.32L10.6422 33.94C11.7522 35.05 11.7522 36.84 10.6422 37.95Z"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M11.3418 35.1H24.5818"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M16.0332 38.37H21.1532"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
            </svg>
          </div>
          <div>Vay Online</div>
        </div>
      ),
      key: "5",
      children: (
        <div className="md:w-3/4 w-full m-auto p-8 border-b ">
          <div className="grid lg:grid-cols-10 grid-cols-1">
            <div className="block md:hidden lg:col-span-6 col-span-1 mt-2">
              <div>
                <img src={homeimage5} alt="home-image-1" />
              </div>
            </div>
            <div className=" lg:col-span-4 col-span-1 ">
              <h2 className="font-bold text-xl text-rose-600 mt-2 text-left">
                VAY ONLINE
              </h2>
              <div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4 ">
                    Ứng dụng hỗ trợ tài chính trực tuyến đầu tiên đối với sản
                    phẩm cho vay bằng Đăng ký xe máy
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Định danh điện tử
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Dễ dàng, nhanh chóng
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Rõ ràng minh bạch
                  </p>
                </div>
              </div>
              <div className="flex">
                <button className="rounded-md font-medium text-base cursor-pointer p-2  text-white  bg-rose-600">
                  Vay ngay
                </button>
              </div>
            </div>
            <div className=" lg:col-span-6 col-span-1 hidden md:block mt-2 ">
              <div className="lg:ml-5">
                <img src={homeimage5} alt="home-image-1" />
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
              className="h-20"
              xmlns="http://www.w3.org/2000/svg"
              width={42}
              height={42}
              viewBox="0 0 42 42"
              fill="none"
            >
              <circle
                cx={21}
                cy={21}
                r="20.25"
                stroke="#00833E"
                strokeWidth="1.5"
              />
              <path
                d="M24.3182 17.9318C24.1801 17.9318 24.0682 17.8199 24.0682 17.6818V12C24.0682 11.0335 23.2847 10.25 22.3182 10.25H19.6818C18.7153 10.25 17.9318 11.0335 17.9318 12V17.6818C17.9318 17.8199 17.8199 17.9318 17.6818 17.9318H12C11.0335 17.9318 10.25 18.7153 10.25 19.6818V22.3182C10.25 23.2847 11.0335 24.0682 12 24.0682H17.6818C17.8199 24.0682 17.9318 24.1801 17.9318 24.3182V30C17.9318 30.9665 18.7153 31.75 19.6818 31.75H22.3182C23.2847 31.75 24.0682 30.9665 24.0682 30V24.3182C24.0682 24.1801 24.1801 24.0682 24.3182 24.0682H30C30.9665 24.0682 31.75 23.2847 31.75 22.3182V19.6818C31.75 18.7153 30.9665 17.9318 30 17.9318H24.3182Z"
                stroke="#FDB813"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div>Bảo hiểm</div>
        </div>
      ),
      key: "6",
      children: (
        <div className="md:w-3/4 w-full m-auto p-8 border-b ">
          <div className="grid lg:grid-cols-10 grid-cols-1">
            <div className="block md:hidden lg:col-span-6 col-span-1 mt-2">
              <div>
                <img src={homeimage6} alt="home-image-1" />
              </div>
            </div>
            <div className=" lg:col-span-4 col-span-1">
              <h2 className="font-bold text-xl text-rose-600 mt-2 text-left">
                BẢO HIỂM TÀI SẢN, CON NGƯỜI
              </h2>
              <div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4 ">
                    Cung cấp đa dạng các sản phẩm bảo hiểm bình dân, đáp ứng mọi
                    nhu cầu bảo vệ tài sản, sức khỏe, con người cho mọi khách
                    hàng
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Trung tâm hỗ trợ thủ tục bồi thường nhanh chóng 24/24
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Hướng dẫn hồ sơ, giải đáp sản phẩm tại tất cả cửa hàng F88
                    trên toàn quốc
                  </p>
                </div>
                <div className="flex items-center mb-4 ">
                  <img
                    src={check}
                    alt="check"
                    className="object-cover w-6 h-6"
                  />

                  <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4">
                    Nhanh chóng, chu đáo, tin cậy
                  </p>
                </div>
              </div>
              <div className="flex">
                <button className="rounded-md font-medium text-base cursor-pointer p-2  text-white  bg-rose-600">
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
        <h2 className=" text-rose-600 md:text-3xl font-bold text-2xl mb-3 md:leading-6">
          Dịch vụ nổi bật
        </h2>
        <p className=" text-gray-500 font-medium leading-4 md:text-base text-sm py-">
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
