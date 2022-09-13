import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const NavLinks = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    return (
        <>
            {links.map((link) => (
                <div key={link.name}>
                    <div className="px-3 text-left lg:cursor-pointer group relative">
                        <div
                            className=" flex justify-between items-center lg:pr-0 pr-5 pb-4 lg:pb-0 group font-semibold text-2xl lg:text-base cursor-pointer"
                            onClick={() => {
                                heading !== link.name
                                    ? setHeading(link.name)
                                    : setHeading("");
                                setSubHeading("");
                            }}
                        >
                            {link.name}
                            <span className="text-xl lg:hidden inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={6}
                                    viewBox="0 0 10 6"
                                    fill="none"
                                >
                                    <path
                                        d="M1 1L5 5L9 1"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <span className="text-xl lg:ml-2  lg:block hidden group-hover:rotate-180 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={6}
                                    viewBox="0 0 10 6"
                                    fill="none"
                                >
                                    <path
                                        d="M1 1L5 5L9 1"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </div>
                        {link.submenu && (
                            <div>
                                <div className="absolute top-full hidden group-hover:lg:block hover:lg:block min-w-max rounded-b-md overflow-hidden bg-white px-3 pt-6 pb-3 shadow">
                                    {link.sublinks.map((mysublinks) => (
                                        <div
                                            key={mysublinks.name}
                                            className="rounded-md overflow-hidden hover:bg-gray-300 "
                                        >
                                            <NavLink
                                                to={mysublinks.link}
                                                className="block p-3 text-black hover:text-green-600 cursor-pointer"
                                            >
                                                {mysublinks.name}
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile menus */}
                    <div
                        className={`
            ${heading === link.name ? "lg:hidden mb-3" : "hidden"}
          `}
                    >
                        {/* sublinks */}
                        {link.sublinks.map((slinks) => (
                            <div
                                key={slinks.name}
                                onClick={() =>
                                    subHeading !== slinks.name
                                        ? setSubHeading(slinks.name)
                                        : setSubHeading("")
                                }
                                className="pl-7 p-1 ml-2 border-l font-semibold flex justify-between items-center cursor-pointer text-lg"
                            >
                                {slinks.name}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;
