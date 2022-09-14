import React from "react";

const FinancialSolution = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container  mx-auto">
        <h2 className="text-center text-red-600 md:text-3xl font-bold text-2xl mb-3 md:leading-6  ">
          T52 - Giải pháp tài chính đáng tin cậy
        </h2>
        <p className=" text-center text-gray-500 font-medium leading-4 md:text-base text-sm py-3 ">
          Cung cấp dịch vụ tài chính cá nhân cho khách hàng một cách thuận tiện,
          nhanh chóng và chuyên nghiệp
        </p>

        <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-2 md:gap-10 px-5 lg:px-20 md:px-5">
          <div className="flex flex-col items-center border shadow-lg p-5 md:p-10 rounded-3xl text-center bg-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={84}
                height={68}
                viewBox="0 0 84 68"
                fill="none"
              >
                <path
                  d="M63 36H20V66H63V36Z"
                  stroke="rgb(220 38 38)"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                />
                <path
                  d="M4.54785 66.2766H79.4254"
                  stroke="rgb(220 38 38)"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                />
                <path
                  d="M2 20.2526C2 25.7867 6.47875 30.2546 12.0128 30.2546C17.5469 30.2546 22.0257 25.7867 22.0257 20.2526"
                  stroke="rgb(220 38 38)"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                />
                <path
                  d="M22 20.2526C22 25.7867 26.4788 30.2546 31.9871 30.2546C37.5212 30.2546 41.9999 25.7867 41.9999 20.2526"
                  stroke="rgb(220 38 38)"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                />
                <path
                  d="M42 20.2526C42 25.7867 46.4788 30.2546 51.9871 30.2546C57.5212 30.2546 61.9999 25.7867 61.9999 20.2526"
                  stroke="rgb(220 38 38)"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                />
                <path
                  d="M62 20.2526C62 25.7867 66.4788 30.2546 72.0128 30.2546C77.5469 30.2546 81.9999 25.7867 81.9999 20.2526"
                  stroke="rgb(220 38 38)"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                />
                <path
                  d="M77.1094 28.8579V66.2764"
                  stroke="rgb(220 38 38)"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                />
                <path
                  d="M6.89062 28.8579V66.2764"
                  stroke="rgb(220 38 38)"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                />
                <path
                  d="M81.9998 20.2523H2L12.6821 2H71.1118L81.9998 20.2523Z"
                  stroke="url(#paint0_linear_1527_5658)"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                  strokeLinejoin="round"
                />
                <path d="M42 36V66" stroke="rgb(220 38 38)" strokeWidth={3} />
                <defs>
                  <linearGradient
                    id="paint0_linear_1527_5658"
                    x1={2}
                    y1="11.1262"
                    x2="81.9998"
                    y2="11.1262"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFCB05" />
                    <stop offset={1} stopColor="#FCAF17" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="mt-2 font-bold text-sm md:text-xl">
              Giao dịch online toàn quốc
            </div>
          </div>
          <div className="flex flex-col items-center border shadow-lg p-5 md:p-10 rounded-3xl text-center bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={113}
              height={76}
              viewBox="0 0 113 76"
              fill="none"
            >
              <path
                d="M74.6513 74.0732C94.5421 74.0732 110.667 57.9391 110.667 38.0366C110.667 18.1341 94.5421 2 74.6513 2C54.7604 2 38.6357 18.1341 38.6357 38.0366C38.6357 57.9391 54.7604 74.0732 74.6513 74.0732Z"
                stroke="rgb(220 38 38)"
                strokeWidth={3}
                strokeMiterlimit={10}
              />
              <path
                d="M2 37.9064L27.3821 37.9064"
                stroke="rgb(220 38 38)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.2588 19.0287L31.8387 19.0287"
                stroke="rgb(220 38 38)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.2588 56.9321L31.8387 56.9321"
                stroke="rgb(220 38 38)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M84.0893 44.32C84.2493 41.76 82.9293 39.88 81.6093 38.76C80.8093 38 79.0493 37.16 78.1293 36.8C77.6893 36.6 77.0493 36.36 76.2093 36.04V28.12C77.8893 28.48 79.0893 29.56 79.7693 31.28L83.6493 29.04C82.2493 25.88 79.7693 24.04 76.2093 23.56V20H73.6093V23.52C71.4093 23.72 69.5293 24.52 68.0493 25.92C66.5693 27.32 65.8093 29.12 65.8093 31.36C65.8093 33.8 66.6493 35.64 68.2893 36.92C70.0093 38.2 71.2093 38.72 73.6093 39.64V47.96C71.1293 47.68 69.4093 46.4 68.4893 44.04L64.5293 46.32C65.9293 50 69.1693 52.2 73.6093 52.48V56H76.2093V52.44C80.8893 51.84 84.0893 48.84 84.0893 44.32ZM70.4093 31.36C70.4093 29.6 71.6493 28.36 73.6093 28.04V35C71.3293 33.92 70.4093 33 70.4093 31.36ZM76.2093 40.64C78.4493 41.64 79.4893 42.6 79.4893 44.36C79.4893 46.12 78.3293 47.48 76.2093 47.92V40.64Z"
                fill="url(#paint0_linear_536_66)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_536_66"
                  x1="64.5293"
                  y1={38}
                  x2="84.1025"
                  y2={38}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFCB05" />
                  <stop offset={1} stopColor="#FCAF17" />
                </linearGradient>
              </defs>
            </svg>

            <div className="mt-2 font-bold text-sm md:text-xl">
              5 phút là có tiền
            </div>
          </div>
          <div className="flex flex-col items-center border shadow-lg p-5 md:p-10 rounded-3xl text-center bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={75}
              height={76}
              viewBox="0 0 75 76"
              fill="none"
            >
              <path
                d="M57.3489 62.4203V65.8378C57.3489 70.3502 53.6692 74 49.1198 74H10.0152C5.46579 74 1.78613 70.3502 1.78613 65.8378V10.1622C1.78613 5.64977 5.46579 2 10.0152 2H42.5132C43.5669 2 44.5705 2.41475 45.3064 3.1447L55.9607 13.7124C56.8137 14.5585 57.2987 15.67 57.3489 16.8645"
                stroke="rgb(220 38 38)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.1055 20.2986H34.0663"
                stroke="url(#paint0_linear_527_10)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.1055 32.5419H34.0663"
                stroke="url(#paint1_linear_527_10)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M34.0667 60.5291C34.0667 60.5291 32.344 54.4406 43.5669 43.3088L59.9748 27.0342C63.136 23.8987 68.0366 20.9789 71.2647 24.1973C74.4927 27.4157 73.3721 31.5134 67.6519 37.1871C61.9317 42.8609 54.5557 50.0277 51.0935 53.1632C47.6313 56.2987 44.5872 61.1761 34.0667 60.5291V60.5291Z"
                stroke="rgb(220 38 38)"
                strokeWidth={3}
                strokeMiterlimit={10}
              />
              <path
                d="M55.7432 31.2313L64.474 40.3392"
                stroke="rgb(220 38 38)"
                strokeWidth={3}
                strokeMiterlimit={10}
              />
              <path
                d="M34.0662 60.529H26.4058C26.4058 60.529 25.3521 55.552 20.234 55.552C15.116 55.552 14.2295 60.5787 14.2295 60.5787"
                stroke="rgb(220 38 38)"
                strokeWidth={3}
                strokeMiterlimit={10}
              />
              <defs>
                <linearGradient
                  id="paint0_linear_527_10"
                  x1="12.1055"
                  y1="20.7986"
                  x2="34.0663"
                  y2="20.7986"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFCB05" />
                  <stop offset={1} stopColor="#FCAF17" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_527_10"
                  x1="12.1055"
                  y1="33.0419"
                  x2="34.0663"
                  y2="33.0419"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFCB05" />
                  <stop offset={1} stopColor="#FCAF17" />
                </linearGradient>
              </defs>
            </svg>

            <div className="mt-2 font-bold text-sm md:text-xl">
              Hợp đồng minh bạch
            </div>
          </div>
          <div className="flex flex-col items-center border shadow-lg p-5 md:p-10 rounded-3xl text-center bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={67}
              height={76}
              viewBox="0 0 67 76"
              fill="none"
            >
              <path
                d="M32.5376 55.4281C42.4761 55.4281 50.5328 47.3322 50.5328 37.3455C50.5328 27.3587 42.4761 19.2629 32.5376 19.2629C22.5992 19.2629 14.5425 27.3587 14.5425 37.3455C14.5425 47.3322 22.5992 55.4281 32.5376 55.4281Z"
                stroke="url(#paint0_linear_536_67)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.9468 38.5499L29.741 43.3675L40.9443 32.1265"
                stroke="url(#paint1_linear_536_67)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M64.6829 20.0659C64.6829 12.0366 61.4867 10.4307 53.4796 10.4307C48.8518 10.4307 42.9089 6.78411 38.6973 3.70622C35.5844 1.43126 31.3894 1.43126 28.2764 3.70622C24.0648 6.78411 18.1219 10.4307 13.4941 10.4307C5.50367 10.4307 2.30749 12.0366 2.30749 20.0659C2.30749 28.0951 -0.672279 60.7977 29.9744 73.31C32.2217 74.23 34.7687 74.23 36.9993 73.31C67.646 60.7977 64.6663 27.8108 64.6663 20.0659H64.6829Z"
                stroke="rgb(220 38 38)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_536_67"
                  x1="14.5425"
                  y1="37.3455"
                  x2="50.5328"
                  y2="37.3455"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFCB05" />
                  <stop offset={1} stopColor="#FCAF17" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_536_67"
                  x1="24.9468"
                  y1="37.747"
                  x2="40.9443"
                  y2="37.747"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFCB05" />
                  <stop offset={1} stopColor="#FCAF17" />
                </linearGradient>
              </defs>
            </svg>

            <div className="mt-2 font-bold text-sm md:text-xl">
              Bảo mật thông tin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSolution;
