import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "Assets/Logo.png";
import NavLinks from "./Navlinks";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="fixed w-full z-10">
            <div className="hidden lg:block bg-green-600 border-b-4 border-solid border-yellow-400">
                <div className="container mx-auto">
                    <div className="flex justify-end px-3 py-4">
                        <div className="">
                            <a
                                href=""
                                className="px-4 border-r font-semibold text-gray-300 hover:text-white duration-100 text-lg"
                            >
                                Về T52
                            </a>
                            <a
                                href=""
                                className="px-4 border-r font-semibold text-gray-300 hover:text-white duration-100 text-lg"
                            >
                                Quan hệ Nhà đầu tư
                            </a>
                            <a
                                href=""
                                className="px-4 border-r font-semibold text-gray-300 hover:text-white duration-100 text-lg"
                            >
                                Tin tức
                            </a>
                            <a
                                href=""
                                className="px-4 border-r font-semibold text-gray-300 hover:text-white duration-100 text-lg"
                            >
                                Cửa hàng gần bạn
                            </a>
                            <a
                                href=""
                                className="px-4 font-semibold text-gray-300 hover:text-white duration-100 text-lg"
                            >
                                Kiến thức tài chính
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="bg-white">
                <div className="flex items-center font-semibold justify-around">
                    <div className=" p-5 lg:w-auto w-full flex justify-between">
                        <img
                            src={Logo}
                            alt="logo"
                            className="lg:cursor-pointer h-9"
                        />
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
                                        stroke="#00833E"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M17 1L0.999999 17"
                                        stroke="#00833E"
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
                                    <rect
                                        width={22}
                                        height={3}
                                        rx="1.5"
                                        fill="#00833E"
                                    />
                                    <rect
                                        y={6}
                                        width={22}
                                        height={3}
                                        rx="1.5"
                                        fill="#00833E"
                                    />
                                    <rect
                                        y={12}
                                        width={22}
                                        height={3}
                                        rx="1.5"
                                        fill="#00833E"
                                    />
                                </svg>
                            )}
                        </div>
                    </div>
                    <div className="lg:flex hidden justify-center items-center">
                        <NavLinks />
                        <div>
                            <NavLink
                                to="/"
                                className="inline-block font-semibold text-2xl lg:text-lg text-gray-800 hover:text-gray-800"
                            >
                                Mua bán xe máy cũ
                            </NavLink>
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <button className="border px-5 py-3 rounded-lg shadow-lg text-green-600 text-xl">
                            <span>
                                <i className="fa fa-phone" />
                            </span>
                            <span className="font-bold">1800 6388</span>
                        </button>
                    </div>
                    {/* Mobile nav */}
                    <ul
                        className={`
        lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 z-10 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
                    >
                        <div className="mx-5 border-b">
                            <NavLinks />
                        </div>
                        <div className="container mx-auto">
                            <div className="flex flex-col justify-center px-3 py-4">
                                <a
                                    href=""
                                    className="px-4 font-semibold text-gray-500 hover:text-black duration-100 text-lg"
                                >
                                    Về T52
                                </a>
                                <a
                                    href=""
                                    className="px-4 font-semibold text-gray-500 hover:text-black duration-100 text-lg"
                                >
                                    Quan hệ Nhà đầu tư
                                </a>
                                <a
                                    href=""
                                    className="px-4 font-semibold text-gray-500 hover:text-black duration-100 text-lg"
                                >
                                    Tin tức
                                </a>
                                <a
                                    href=""
                                    className="px-4 font-semibold text-gray-500 hover:text-black duration-100 text-lg"
                                >
                                    Cửa hàng gần bạn
                                </a>
                                <a
                                    href=""
                                    className="px-4 font-semibold text-gray-500 hover:text-black duration-100 text-lg"
                                >
                                    Kiến thức tài chính
                                </a>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;
