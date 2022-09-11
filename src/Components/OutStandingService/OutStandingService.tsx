import React from "react";
import { Tabs } from "antd";

const OutStandingService = () => {
  const item = [
    {
      label: (
        <div>
          <div className="justify-center items-center">
            <svg
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
                d="M20.7945 20.5958H19.9442C18.5516 20.5958 17.4238 19.4345 17.4238 18.0024V10.8418C17.4238 9.40966 18.5516 8.24835 19.9442 8.24835H22.0314H24.1186C25.5112 8.24835 26.6389 9.40966 26.6389 10.8418V18.0024C26.6389 19.4345 25.5112 20.5958 24.1186 20.5958H23.2682"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M22.0311 8.24836C23.1712 8.24836 24.0954 7.29734 24.0954 6.12418C24.0954 4.95103 23.1712 4 22.0311 4C20.891 4 19.9668 4.95103 19.9668 6.12418C19.9668 7.29734 20.891 8.24836 22.0311 8.24836Z"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M22.0308 24C21.348 24 20.7939 23.4299 20.7939 22.7273V19.1311C20.7939 18.4285 21.348 17.8584 22.0308 17.8584C22.7136 17.8584 23.2676 18.4285 23.2676 19.1311V22.7273C23.2676 23.4307 22.7136 24 22.0308 24Z"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M28.3399 5.73463H24.0596"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M20.0022 5.73463H15.6602"
                stroke="#00833E"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
            </svg>
          </div>
          <div className="text-green-700">Vay đăng ký xe máy</div>
        </div>
      ),
      key: "a",
      children: <p>avs</p>,
    },
    {
      label: "b",
      key: "b",
      children: <p>av2s</p>,
    },
    {
      label: "c",
      key: "c",
      children: <p>avs</p>,
    },
  ];

  return (
    <div className="text-center pt-5 md:pt-10 bg-gray-100">
      <div>
        <h2 className=" text-green-700 md:text-3xl font-bold text-2xl mb-3 md:leading-6">
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
