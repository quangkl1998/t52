import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-100 pt-20 pb-5">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-xl">Công ty</h1>
                            <NavLink
                                className="text-base py-3 text-gray-800 hover:text-gray-800"
                                to="/"
                            >
                                Giới thiệu
                            </NavLink>
                            <NavLink
                                className="text-base py-3 text-gray-800 hover:text-gray-800"
                                to="/"
                            >
                                Tuyển dụng
                            </NavLink>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-xl">
                                Điều khoản & Điều kiện
                            </h1>
                            <NavLink
                                className="text-base py-3 text-gray-800 hover:text-gray-800"
                                to="/"
                            >
                                Điều khoản & Điều kiện
                            </NavLink>
                            <NavLink
                                className="text-base py-3 text-gray-800 hover:text-gray-800"
                                to="/"
                            >
                                Chính sách bảo mật thông tin
                            </NavLink>
                            <NavLink
                                className="text-base py-3 text-gray-800 hover:text-gray-800"
                                to="/"
                            >
                                Chính sách bảo quản tài sản
                            </NavLink>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-xl">
                                Hỗ trợ khách hàng
                            </h1>
                            <NavLink
                                className="text-base py-3 text-gray-800 hover:text-gray-800"
                                to="/"
                            >
                                Câu hỏi thường gặp
                            </NavLink>
                            <NavLink
                                className="text-base py-3 text-gray-800 hover:text-gray-800"
                                to="/"
                            >
                                Liên hệ/Khiếu nại
                            </NavLink>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-xl">
                                Chứng nhận
                            </h1>
                            <div>
                                <span>
                                    <svg
                                        className="inline-block"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={162}
                                        height={57}
                                        viewBox="0 0 162 57"
                                        fill="none"
                                    >
                                        <path
                                            d="M62.4851 14.7881L73.8008 44.0829H80.7761L92.0399 14.7881H84.8661L77.2375 36.1253L69.6579 14.9171L62.4851 14.7881Z"
                                            fill="#224798"
                                        />
                                        <path
                                            d="M162 20.8461C162 20.8461 158.38 14.3697 150.094 14.3342C141.809 14.2986 134.649 19.9031 134.649 29.8578C134.649 39.8125 143.261 44.1316 148.374 44.4607C153.486 44.7899 159.073 43.226 162 37.9586C159.882 36.5423 157.178 34.5416 157.178 34.5416C157.178 34.5416 155.569 38.2868 150.823 38.3224C146.077 38.358 141.366 35.965 141.366 28.8392C141.366 21.7135 151.368 16.6961 157.285 24.2221C160.208 22.2917 162 20.8461 162 20.8461Z"
                                            fill="#224798"
                                        />
                                        <path
                                            d="M133.043 14.8418H115.92V44.19H133.391V38.1584H122.518V32.327H131.278V26.3756H122.536V20.7888H133.056L133.043 14.8418Z"
                                            fill="#224798"
                                        />
                                        <path
                                            d="M112.199 20.4812C112.199 20.4812 109.728 14.334 102.392 14.334C95.0556 14.334 91.2748 20.3655 93.849 25.8188C96.4231 31.2721 103.185 30.7517 105.732 33.5895C107.073 35.2264 106.197 38.0109 103.516 38.5536C100.834 39.0962 98.1973 37.2369 97.3214 34.6749C94.1484 36.1783 92.0408 37.1587 92.0408 37.1587C92.0408 37.1587 93.3261 43.1261 100.065 44.2737C106.805 45.4213 112.74 41.9608 113.07 36.1427C113.401 30.3247 109.182 28.4565 103.516 26.1435C100.879 25.165 98.2832 23.4614 100.146 21.0995C101.938 18.8265 106.563 20.7525 107.27 23.368C109.2 22.2559 112.199 20.4812 112.199 20.4812Z"
                                            fill="#224798"
                                        />
                                        <path
                                            d="M56.2087 18.2478C57.4306 12.0205 57.2831 7.76019 57.2831 7.76019C57.2831 7.76019 31.6844 -9.60496 0.0255637 7.61786C0.0255637 7.61786 -1.94082 38.8965 28.6186 57C40.4321 50.3849 47.3841 41.2726 51.4715 32.6843C48.1627 29.351 42.7158 26.4251 39.246 25.2766C37.6103 28.2746 35.4115 33.8346 28.565 39.7238C21.1195 33.1852 15.9068 22.8213 15.0344 16.3716C29.3274 11.5054 42.1241 16.3716 42.1241 16.3716C42.1241 16.3716 41.7576 18.2576 40.8459 20.8819C46.8738 22.952 51.1221 26.0016 53.4576 27.9943C54.0752 26.3432 54.5927 24.7357 55.0271 23.1949C52.0767 20.7841 48.2494 18.8038 46.5842 18.0263C46.7898 17.3946 47.1473 15.0639 47.3439 13.3558C28.3504 5.28708 13.388 11.7189 9.8128 13.2135C9.8843 16.2648 11.8239 22.6967 11.8239 22.6967C11.8239 22.6967 9.74129 23.8977 7.69446 25.0898C6.78278 23.1237 5.20967 16.7719 4.73595 10.4824C29.2353 -1.73193 51.2678 9.36149 52.3314 10.4201C52.3582 11.4521 52.2241 12.8754 51.8666 15.5176C52.6889 15.8601 54.7197 17.2185 56.2087 18.2478ZM13.5042 27.127C13.5042 27.127 19.0914 39.1198 28.6445 45.7723C37.7247 38.4321 39.9164 33.7812 41.418 31.3526C42.6246 31.7084 45.3775 33.7279 45.3775 33.7279C45.3775 33.7279 40.9451 43.7511 28.6445 51.496C16.023 43.9726 9.30332 29.6712 9.30332 29.6712L13.5042 27.127Z"
                                            fill="#224798"
                                        />
                                    </svg>
                                </span>
                                <span>
                                    <svg
                                        className="inline-block"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={113}
                                        height={98}
                                        viewBox="0 0 113 98"
                                        fill="none"
                                    >
                                        <path
                                            d="M105.7 69.7422H7.29978C3.26822 69.7422 0 73.0375 0 77.1025V90.6401C0 94.7051 3.26822 98.0004 7.29978 98.0004H105.7C109.732 98.0004 113 94.7051 113 90.6401V77.1025C113 73.0375 109.732 69.7422 105.7 69.7422Z"
                                            fill="#0C5172"
                                        />
                                        <path
                                            d="M30.6824 72.4199H33.9412C36.3853 72.4199 39.0902 74.0628 39.0902 77.3651C39.0902 80.6674 36.3853 82.3103 33.9412 82.3103H30.6824V72.4199ZM31.6763 81.3903H33.6153C36.6134 81.3903 37.9985 79.4023 37.9985 77.3651C37.9985 75.3279 36.5972 73.34 33.6153 73.34H31.6763V81.3903Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M43.8317 79.4191H40.2795V78.499H43.8317V79.4191Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M52.6958 78.6137C52.6958 80.2566 52.044 82.5567 49.1111 82.5567C46.1781 82.5567 45.5264 80.2731 45.5264 78.6137V72.4199H46.5203V78.5151C46.5203 81.3574 48.3615 81.6367 49.1111 81.6367C49.8606 81.6367 51.7019 81.3574 51.7019 78.5151V72.4199H52.6958V78.6137Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M57.9425 79.4191H54.3904V78.499H57.9425V79.4191Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M66.9043 80.7988H66.9369V72.4199H67.9308V82.3103H66.6762L60.8266 73.8493H60.794V82.3103H59.8V72.4199H61.0547L66.9043 80.7988Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M73.3405 79.4191H69.7883V78.499H73.3405V79.4191Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M79.8254 74.0464C79.4018 73.4057 78.7663 73.0771 77.9353 73.0771C76.9088 73.0771 75.8497 73.6193 75.8497 74.8679C75.8497 77.5294 80.8683 76.1165 80.8683 79.6816C80.8683 81.4888 79.19 82.5403 77.642 82.5403C76.4526 82.5403 75.2957 82.1131 74.5461 81.0781L75.4423 80.4209C75.8497 81.1438 76.6481 81.6203 77.6746 81.6203C78.7011 81.6203 79.7766 80.9795 79.7766 79.8131C79.7766 77.0201 74.758 78.5644 74.758 74.95C74.758 73.0442 76.3385 72.1406 77.9353 72.1406C79.0433 72.1406 79.9232 72.4528 80.7053 73.34L79.8254 74.03V74.0464Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M17.2879 95.2234H16.2939V85.333H19.3084C21.2963 85.333 22.5346 86.2038 22.5346 87.9781C22.5346 89.3417 21.6384 90.3932 20.0253 90.5411L22.8442 95.2398H21.6221L18.9336 90.6396H17.2716V95.2398L17.2879 95.2234ZM17.2879 89.7032H19.064C20.8563 89.7032 21.4592 88.9146 21.4592 87.9781C21.4592 87.0416 20.8563 86.2695 19.064 86.2695H17.2879V89.7196V89.7032Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M25.5 94.3033H30.7468V95.2234H24.5061V85.333H30.5838V86.253H25.5V89.621H30.2579V90.5411H25.5V94.3033Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M39.9531 87.1572C39.2851 86.4507 38.3563 86.0071 37.1505 86.0071C34.625 86.0071 33.1259 87.9951 33.1259 90.2787C33.1259 92.5624 34.6412 94.5503 37.1505 94.5503C38.1608 94.5503 39.1221 94.271 39.8717 93.8603V90.558H37.5253V89.638H40.8656V94.4846C39.7739 95.1417 38.34 95.4867 37.1505 95.4867C34.2339 95.4867 32.0342 93.3017 32.0342 90.2951C32.0342 87.2886 34.2176 85.1035 37.1505 85.1035C38.6985 85.1035 39.8228 85.5471 40.7027 86.4343L39.9531 87.1736V87.1572Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M44.483 95.2234H43.489V85.333H44.483V95.2234Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M51.7827 86.9761C51.3591 86.3354 50.7236 86.0068 49.8926 86.0068C48.8661 86.0068 47.8069 86.5489 47.8069 87.7976C47.8069 90.4591 52.8255 89.0462 52.8255 92.6113C52.8255 94.4185 51.1473 95.47 49.5993 95.47C48.4098 95.47 47.2529 95.0428 46.5034 94.0078L47.3996 93.3506C47.8069 94.0735 48.6054 94.5499 49.6319 94.5499C50.6584 94.5499 51.7338 93.9092 51.7338 92.7427C51.7338 89.9498 46.7152 91.4941 46.7152 87.8797C46.7152 85.9739 48.2958 85.0703 49.8926 85.0703C51.0006 85.0703 51.8805 85.3825 52.6626 86.2696L51.7827 86.9597V86.9761Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M57.9907 95.2234H56.9968V86.253H53.7217V85.333H61.2822V86.253H58.007V95.2234H57.9907Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M63.7913 94.3033H69.038V95.2234H62.7974V85.333H68.8751V86.253H63.7913V89.621H68.5492V90.5411H63.7913V94.3033Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M72.0037 95.2234H71.0098V85.333H74.0242C76.0121 85.333 77.2504 86.2038 77.2504 87.9781C77.2504 89.3417 76.3542 90.3932 74.7411 90.5411L77.56 95.2398H76.338L73.6494 90.6396H71.9874V95.2398L72.0037 95.2234ZM72.0037 89.7032H73.7798C75.5721 89.7032 76.175 88.9146 76.175 87.9781C76.175 87.0416 75.5721 86.2695 73.7798 86.2695H72.0037V89.7196V89.7032Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M80.2159 94.3033H85.4626V95.2234H79.2219V85.333H85.2996V86.253H80.2159V89.621H84.9738V90.5411H80.2159V94.3033Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M87.304 85.333H90.5628C93.0069 85.333 95.7118 86.9759 95.7118 90.2782C95.7118 93.5805 93.0069 95.2234 90.5628 95.2234H87.304V85.333ZM88.2979 94.3033H90.2369C93.2187 94.3033 94.62 92.3154 94.62 90.2782C94.62 88.241 93.2187 86.253 90.2369 86.253H88.2979V94.3033Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M84.2411 72.9458C85.3166 72.9458 86.1965 73.8329 86.1965 74.9173C86.1965 76.0016 85.3166 76.8888 84.2411 76.8888C83.1657 76.8888 82.2858 76.0016 82.2858 74.9173C82.2858 73.8329 83.1657 72.9458 84.2411 72.9458ZM84.2411 72.6172C82.9865 72.6172 81.96 73.6522 81.96 74.9173C81.96 76.1823 82.9865 77.2173 84.2411 77.2173C85.4958 77.2173 86.5223 76.1823 86.5223 74.9173C86.5223 73.6522 85.4958 72.6172 84.2411 72.6172Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M83.4258 73.3887H84.1264C84.6641 73.3887 85.2344 73.4708 85.2344 74.1608C85.2344 74.5716 84.9737 74.8344 84.5501 74.9002L85.3322 76.1816H84.9248L84.1753 74.933H83.7517V76.1816H83.4258V73.3887ZM83.7517 74.6209H84.045C84.4034 74.6209 84.876 74.6209 84.876 74.1608C84.876 73.7501 84.5338 73.7008 84.2079 73.7008H83.7517V74.6209Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M97.1782 88.0928H96.9012V85.5627H95.9724V85.2998H98.1069V85.5627H97.1782V88.0928Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M99.8994 87.567L100.828 85.2998H101.252V88.0928H100.975V85.6777L99.9808 88.0928H99.8342L98.8402 85.6777V88.0928H98.5632V85.2998H98.9869L99.9156 87.567H99.8994Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M56.4918 0C29.5902 0 7.78857 21.9987 7.78857 49.1232C7.78857 54.8241 8.74993 60.3115 10.526 65.3881H17.5814C15.512 60.3772 14.3714 54.8899 14.3714 49.1232C14.3714 25.6624 33.2401 6.65381 56.4918 6.65381C79.7436 6.65381 98.6285 25.6624 98.6285 49.1232C98.6285 54.8899 97.4879 60.3772 95.4186 65.3881H102.474C104.25 60.3115 105.211 54.8241 105.211 49.1232C105.211 21.9987 83.4098 0 56.4918 0Z"
                                            fill="#0C5172"
                                        />
                                        <path
                                            d="M74.7905 60.2953L44.9722 29.2441V35.4872L63.9875 55.3501L59.5229 59.8517C58.203 61.1824 56.427 61.9218 54.5531 61.9218C52.6793 61.9218 50.9033 61.1824 49.5834 59.8517C48.2473 58.5045 47.5141 56.7301 47.5141 54.8408C47.5141 52.9514 48.2473 51.1607 49.5834 49.8299L52.6793 46.7084L49.6812 43.6854L46.5853 46.8069C44.4508 48.9427 43.2776 51.8014 43.2776 54.8408C43.2776 57.8802 44.4508 60.7224 46.5853 62.8747C48.7198 65.0104 51.5387 66.1933 54.5531 66.1933C57.5676 66.1933 60.3865 65.0104 62.521 62.8747L66.9204 58.4388L71.6946 63.4168L74.7905 60.2953Z"
                                            fill="#0C5172"
                                        />
                                        <path
                                            d="M75.3441 45.2295C75.3441 48.2689 74.171 51.1111 72.0527 53.2634L71.5965 53.7234L68.6472 50.6511L69.0546 50.2404C70.3744 48.9096 71.1077 47.1189 71.1077 45.2295C71.1077 43.3402 70.3744 41.5494 69.0546 40.2186C68.3539 39.5122 67.5392 38.97 66.6594 38.6414L66.5779 34.1562C68.6309 34.6163 70.5211 35.6513 72.0527 37.1956C74.171 39.3479 75.3441 42.1901 75.3441 45.2295Z"
                                            fill="#2D96B4"
                                        />
                                        <path
                                            d="M54.5529 22.1465C52.0436 22.1465 49.6972 23.1322 47.9212 24.9066L45.917 26.9274L48.8499 30.0161L50.9193 27.9296C51.8807 26.9602 53.1842 26.4181 54.5529 26.4181C55.9216 26.4181 57.2088 26.9602 58.1865 27.9296C60.1907 29.9503 60.1907 33.2362 58.1865 35.2405L55.9542 37.4913L58.8871 40.58L61.1846 38.2635C64.8345 34.5834 64.8345 28.5867 61.1846 24.9066C59.4248 23.1158 57.0622 22.1465 54.5692 22.1465H54.5529Z"
                                            fill="#2D96B4"
                                        />
                                        <path
                                            d="M20.0576 61.3629L19.4222 58.8492C19.0963 57.5678 19.4548 55.432 21.85 54.8077C24.2452 54.1833 25.5814 55.892 25.9072 57.1735L26.5427 59.6871L20.0576 61.3629ZM25.6302 59.0957L25.2555 57.617C24.8807 56.122 23.8379 55.1855 22.0618 55.6455C20.2858 56.1056 19.8295 57.4363 20.2043 58.9314L20.5791 60.41L25.6302 59.0957Z"
                                            fill="#0C5172"
                                            stroke="#0C5172"
                                            strokeWidth="0.2"
                                            strokeMiterlimit={10}
                                        />
                                        <path
                                            d="M22.3877 45.5418C23.8378 45.591 25.0925 46.3139 25.0273 48.1704C24.9784 50.0269 23.6912 50.6841 22.241 50.6348L18.1023 50.5198V49.7148L22.1432 49.8298C23.2187 49.8626 24.2452 49.4848 24.2941 48.154C24.3267 46.8068 23.3164 46.3796 22.241 46.3468L18.2164 46.2318V45.4268L22.3714 45.5418H22.3877Z"
                                            fill="#0C5172"
                                            stroke="#0C5172"
                                            strokeWidth="0.2"
                                            strokeMiterlimit={10}
                                        />
                                        <path
                                            d="M19.1452 39.8736L19.4548 38.9207L25.9399 36.9328L20.6443 35.1913L20.8887 34.4355L27.2597 36.5056L26.9501 37.4585L20.465 39.4464L25.7443 41.1879L25.4999 41.9437L19.1289 39.8736H19.1452Z"
                                            fill="#0C5172"
                                            stroke="#0C5172"
                                            strokeWidth="0.2"
                                            strokeMiterlimit={10}
                                        />
                                        <path
                                            d="M33.5653 25.6295C33.6957 26.5003 33.5816 27.1903 32.9788 27.8475C32.1966 28.6854 31.0072 28.9318 30.1273 28.0939C29.4429 27.4367 29.4429 26.5167 29.7199 25.6624C29.1007 25.6624 28.5142 25.6295 28.0416 25.1859C27.3247 24.4959 27.4713 23.543 28.1068 22.853C28.726 22.1794 29.6059 21.9658 30.3228 22.6394C30.942 23.2144 30.7953 24.118 30.5998 24.8574H32.6692L32.1803 23.1487L32.7995 22.4916L33.4187 24.8574L35.6021 24.8081L34.8526 25.6131H33.5328L33.5653 25.6295ZM29.9317 24.9066C30.0784 24.348 30.2739 23.6909 29.7851 23.2309C29.4266 22.8859 28.9541 22.968 28.6282 23.313C28.2697 23.7073 28.2209 24.2659 28.6282 24.6438C28.8889 24.8902 29.2637 24.9066 29.5896 24.9066H29.9317ZM30.4206 25.646C30.2576 26.2703 30.1273 27.0096 30.6487 27.5024C31.1701 27.9953 31.9848 27.9296 32.4573 27.4039C32.9299 26.8946 32.9136 26.2867 32.8321 25.6295H30.4043L30.4206 25.646Z"
                                            fill="#0C5172"
                                            stroke="#0C5172"
                                            strokeWidth="0.2"
                                            strokeMiterlimit={10}
                                        />
                                        <path
                                            d="M39.6105 14.2771L41.4844 13.4721C42.5109 13.0449 43.7004 12.9956 44.1729 14.1293C44.4825 14.8521 44.2544 15.5093 43.6841 15.9858C44.4988 15.7393 45.3787 16.1172 45.7208 16.9386C46.2911 18.3023 45.1831 19.2223 44.0426 19.6987L42.2013 20.4873L39.5942 14.2607L39.6105 14.2771ZM41.4355 16.6101L42.4457 16.1829C43.1301 15.8872 43.7818 15.4436 43.4234 14.5728C43.0975 13.8171 42.3642 13.9157 41.7125 14.195L40.6208 14.655L41.4355 16.6101ZM42.6413 19.518L43.8796 18.9923C44.5966 18.6801 45.2483 18.0723 44.9224 17.2837C44.564 16.4129 43.7167 16.4622 42.9834 16.7744L41.7288 17.3001L42.6575 19.518H42.6413Z"
                                            fill="#0C5172"
                                            stroke="#0C5172"
                                            strokeWidth="0.2"
                                            strokeMiterlimit={10}
                                        />
                                        <path
                                            d="M48.7842 11.1391L50.4788 10.8926C51.766 10.6955 53.151 10.679 53.3954 12.3384C53.5421 13.3077 53.0044 14.0306 51.9941 14.3427L54.3242 17.1357L53.3628 17.2836L51.1305 14.5563L50.1203 14.7042L50.5602 17.7107L49.7781 17.8257L48.8005 11.1555L48.7842 11.1391ZM50.0062 13.9649L50.7069 13.8663C51.5705 13.7349 52.7111 13.5706 52.5481 12.4698C52.4015 11.5169 51.5542 11.5005 50.7884 11.5991L49.6804 11.7634L50.0062 13.9649Z"
                                            fill="#0C5172"
                                            stroke="#0C5172"
                                            strokeWidth="0.2"
                                            strokeMiterlimit={10}
                                        />
                                        <path
                                            d="M60.4509 10.6299L61.2004 10.712L63.2697 17.7437L62.3573 17.6451L61.8685 15.9201L58.5444 15.5422L57.6809 17.1194L56.7847 17.0208L60.4672 10.6463L60.4509 10.6299ZM60.6953 11.6978H60.679L58.9355 14.8358L61.6566 15.1479L60.7116 11.6978H60.6953Z"
                                            fill="#0C5172"
                                            stroke="#0C5172"
                                            strokeWidth="0.2"
                                            strokeMiterlimit={10}
                                        />
                                        <path
                                            d="M68.4837 12.2568L70.8627 13.2426C72.0847 13.7519 73.5675 15.3291 72.6224 17.6292C71.6774 19.9293 69.5265 19.995 68.3045 19.4857L65.9255 18.4999L68.4837 12.2568ZM66.9358 18.122L68.3371 18.6971C69.7547 19.2885 71.1234 19.0092 71.824 17.3006C72.5247 15.592 71.7426 14.4255 70.325 13.834L68.9237 13.259L66.9358 18.122Z"
                                            fill="#0C5172"
                                            stroke="#0C5172"
                                            strokeWidth="0.2"
                                            strokeMiterlimit={10}
                                        />
                                        <path
                                            d="M80.0039 20.0607C80.0528 19.5514 79.7921 19.1242 79.401 18.8285C78.847 18.4014 78.0649 18.2206 77.576 18.8614C77.2013 19.3543 77.3153 19.7814 77.9508 20.7014C78.5863 21.6051 79.1403 22.4594 78.3582 23.5108C77.5598 24.5787 76.2562 24.3816 75.2949 23.6587C74.6757 23.1823 74.1706 22.4758 74.2032 21.6543L75.083 21.6215C75.0179 22.1965 75.3112 22.7387 75.7674 23.0837C76.3051 23.4944 77.1687 23.6423 77.6249 23.0344C78.1138 22.3772 77.7553 21.9172 77.0546 20.8822C76.4843 20.0607 76.1747 19.2885 76.8428 18.3849C77.6249 17.3499 78.8959 17.4978 79.8246 18.2206C80.4275 18.6807 80.8023 19.2228 80.8512 19.995L79.9876 20.0607H80.0039Z"
                                            fill="#0C5172"
                                            stroke="#0C5172"
                                            strokeWidth="0.2"
                                            strokeMiterlimit={10}
                                        />
                                        <path
                                            d="M87.1895 27.0753L85.7882 25.3502L81.177 29.1618L80.6719 28.5375L85.2831 24.7259L83.8818 23.0009L84.4521 22.5244L87.7598 26.5988L87.1895 27.0753Z"
                                            fill="#0C5172"
                                            stroke="#0C5172"
                                            strokeWidth="0.2"
                                            strokeMiterlimit={10}
                                        />
                                        <path
                                            d="M90.1877 30.6074L90.921 32.1682C91.475 33.3511 91.8823 34.6819 90.3995 35.3883C89.5197 35.8155 88.6724 35.5033 88.0858 34.6326L86.1142 37.6884L85.7068 36.8012L87.6458 33.8604L87.2059 32.9239L84.4848 34.2218L84.1426 33.499L90.204 30.6239L90.1877 30.6074ZM87.8576 32.5954L88.1672 33.2361C88.542 34.0411 89.0308 35.0762 90.0248 34.5997C90.9047 34.189 90.6602 33.3511 90.3344 32.6446L89.8618 31.626L87.8576 32.5789V32.5954Z"
                                            fill="#0C5172"
                                            stroke="#0C5172"
                                            strokeWidth="0.2"
                                            strokeMiterlimit={10}
                                        />
                                        <path
                                            d="M93.6093 39.4307L94.4403 43.5872L93.7234 43.7351L93.039 40.3671L90.986 40.7943L91.6215 43.9323L90.9045 44.0801L90.269 40.9421L87.939 41.4186L88.6559 44.9509L87.939 45.0987L87.0591 40.7779L93.6093 39.4307Z"
                                            fill="#0C5172"
                                            stroke="#0C5172"
                                            strokeWidth="0.2"
                                            strokeMiterlimit={10}
                                        />
                                        <path
                                            d="M94.8152 48.7129L94.6359 52.9516L93.9027 52.9187L94.0493 49.4851L91.9474 49.3865L91.817 52.5902L91.0838 52.5573L91.2142 49.3536L88.8352 49.2551L88.6886 52.8695L87.9553 52.8366L88.1509 48.4336L94.8315 48.7293L94.8152 48.7129Z"
                                            fill="#0C5172"
                                            stroke="#0C5172"
                                            strokeWidth="0.2"
                                            strokeMiterlimit={10}
                                        />
                                        <path
                                            d="M91.8008 62.1522L92.4199 60.0164L86.7007 58.3406L86.9288 57.5684L92.6481 59.2442L93.2672 57.1084L93.9679 57.322L92.5177 62.3822L91.817 62.1686L91.8008 62.1522Z"
                                            fill="#0C5172"
                                            stroke="#0C5172"
                                            strokeWidth="0.2"
                                            strokeMiterlimit={10}
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-amber-800 text-center p-3 text-white font-semibold">
                <div className="container mx-auto">
                    <span className="pr-2">
                        Đăng ký nhận ưu đãi mới nhất từ T52
                    </span>
                    <button className="border px-5 py-2 rounded-lg uppercase bg-yellow-500 hover:bg-yellow-600 duration-100">
                        Đăng ký
                    </button>
                </div>
            </div>
            <div className="bg-gray-100 text-center p-3 text-gray-800 font-semibold">
                <div className="container mx-auto">
                    <span className="pr-3">Công ty cổ phần kinh doanh T52</span>
                    <span className="pr-3">
                        Copyright 2012 - 2022 | CTY TNHH THƯƠNG MẠI DỊCH VỤ TÀI
                        CHÍNH THẮNG LỢI
                    </span>
                    <span>Hotline: 0775 75 7777</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
