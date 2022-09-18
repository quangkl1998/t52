import { useState, useEffect } from "react";

import Logo from "Assets/logt52.png";
import NavLinks from "./Navlinks";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const onscrollBackTop = () => {
      if (window.scrollY > 800) {
        document.querySelector(".headerTop")!.classList.add("lg:hidden");
      } else {
        document.querySelector(".headerTop")!.classList.remove("lg:hidden");
      }
    };
    window.addEventListener("scroll", onscrollBackTop);
  }, []);
  return (
    <div className="fixed w-full z-10">
      <div className="hidden lg:block bg-white border-b-4 border-solid border-yellow-500 headerTop duration-200">
        <div className="container mx-auto">
          <div className="flex justify-end px-3 py-2 ">
            <div className="">
              <NavLink
                to="/about"
                className="px-4 border-r font-semibold text-black hover:text-gray-700 duration-100 text-sm"
              >
                Về T52
              </NavLink>
              {/* <NavLink
                                to="/quan-he-nha-dau-tu"
                                className="px-4 border-r font-semibold text-black hover:text-gray-700 duration-100 text-sm"
                            >
                                Quan hệ Nhà đầu tư
                            </NavLink> */}
              <NavLink
                to="/tin-tuc"
                className="px-4 border-r font-semibold text-black hover:text-gray-700 duration-100 text-sm"
              >
                Tin tức
              </NavLink>
              <NavLink
                to="/cua-hang-gan-ban"
                className="px-4 border-r font-semibold text-black hover:text-gray-700 duration-100 text-sm"
              >
                Hệ thống cửa hàng T52
              </NavLink>
              <NavLink
                to="/kien-thuc-tai-chinh"
                className="px-4 font-semibold text-black hover:text-gray-700 duration-100 text-sm"
              >
                Kiến thức tài chính
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-red-600 border-b shadow-md lg:px-5 py-3">
        <div className="flex items-center font-semibold justify-around ">
          <div className="lg:w-auto w-full flex justify-between items-center px-5 lg:px-0 bg-red-600 z-50 ">
            <NavLink to="">
              <img src={Logo} alt="logo" className="lg:cursor-pointer h-10" />
            </NavLink>
            <button className="border border-yellow-400 px-5 py-3 rounded-lg shadow-lg text-yellow-400 hover:bg-white duration-150 text-xl block lg:hidden z-70 ">
              <span>
                <i className="fa fa-phone animate__animated animate__tada animate__delay-3s  animate__infinite	infinite" />
              </span>
              <span className="ml-2 font-bold ">0775 75 7777</span>
            </button>
            <div
              className="text-3xl lg:hidden z-20"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M1 1L17 17"
                    stroke="#FFF"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 1L0.999999 17"
                    stroke="#FFF"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={15}
                  viewBox="0 0 22 15"
                  fill="none"
                >
                  <rect width={22} height={3} rx="1.5" fill="#FFF" />
                  <rect y={6} width={22} height={3} rx="1.5" fill="#FFF" />
                  <rect y={12} width={22} height={3} rx="1.5" fill="#FFF" />
                </svg>
              )}
            </div>
          </div>
          <div className="lg:flex hidden justify-center items-center">
            <NavLinks open={handleOpen} />
            {/* <div>
                            <NavLink
                                to="/"
                                className="inline-block font-semibold text-2xl lg:text-xl text-black lg:text-white hover:text-white border-b-4 border-b-transparent hover:border-b-yellow-400 duration-150"
                            >
                                Mua bán xe máy cũ
                            </NavLink>
                        </div> */}
          </div>
          <div className="lg:block hidden">
            <button className="border border-yellow-500 bg-white hover:text-yellow-400 duration-150 px-3 py-2 rounded-lg shadow-lg text-yellow-500 text-lg ">
              <span>
                <i className="fa fa-phone animate__animated animate__tada animate__delay-3s  animate__infinite	infinite" />
              </span>
              <span className="ml-2 font-bold">0775 75 7777</span>
            </button>
          </div>
          {/* Mobile nav */}
          <ul
            className={`
        lg:hidden bg-white fixed w-full top-20 overflow-y-auto bottom-0 pt-10 pb-24 z-10 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <div className="mx-5 border-b">
              <NavLinks open={handleOpen} />
              {/* <div className="mx-3 lg:pr-0 mb-4 lg:pb-0 border-b-4 border-b-transparent hover:border-b-yellow-400 duration-15">
                                <NavLink
                                    to="/"
                                    className="inline-block font-semibold text-2xl lg:text-xl text-black lg:text-white hover:text-black 0"
                                >
                                    Mua bán xe máy cũ
                                </NavLink>
                            </div> */}
            </div>
            <div className="container mx-auto">
              <div className="flex flex-col justify-center px-3 py-4">
                <NavLink
                  to="/about"
                  onClick={() => setOpen(!open)}
                  className="px-4 font-semibold text-gray-500 hover:text-black duration-100 text-lg"
                >
                  Về T52
                </NavLink>
                {/* <NavLink
                                    to="/quan-he-nha-dau-tu"
                                    onClick={() => setOpen(!open)}
                                    className="px-4 font-semibold text-gray-500 hover:text-black duration-100 text-lg"
                                >
                                    Quan hệ Nhà đầu tư
                                </NavLink> */}
                <NavLink
                  to="/tin-tuc"
                  onClick={() => setOpen(!open)}
                  className="px-4 font-semibold text-gray-500 hover:text-black duration-100 text-lg"
                >
                  Tin tức
                </NavLink>
                <NavLink
                  to="/cua-hang-gan-ban"
                  onClick={() => setOpen(!open)}
                  className="px-4 font-semibold text-gray-500 hover:text-black duration-100 text-lg"
                >
                  Hệ thống cửa hàng T52
                </NavLink>
                <NavLink
                  to="/kien-thuc-tai-chinh"
                  onClick={() => setOpen(!open)}
                  className="px-4 font-semibold text-gray-500 hover:text-black duration-100 text-lg"
                >
                  Kiến thức tài chính
                </NavLink>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
