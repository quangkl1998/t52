import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const NavLinks = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    return (
        <>
            {links.map((link) => (
                <div className="z-10">
                    <div className="px-3 text-left md:cursor-pointer group">
                        <h1
                            className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
                            onClick={() => {
                                heading !== link.name
                                    ? setHeading(link.name)
                                    : setHeading("");
                                setSubHeading("");
                            }}
                        >
                            {link.name}
                            <span className="text-xl md:hidden inline">
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
                            <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
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
                        </h1>
                        {link.submenu && (
                            <div>
                                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                                    <div className="py-3">
                                        <div
                                            className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                                        ></div>
                                    </div>
                                    <div className="bg-white p-5 grid grid-cols-3 gap-10">
                                        {link.sublinks.map((mysublinks) => (
                                            <li className="text-sm text-gray-600 my-2.5">
                                                <Link
                                                    to={mysublinks.link}
                                                    className="hover:text-primary"
                                                >
                                                    {mysublinks.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile menus */}
                    <div
                        className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
                    >
                        {/* sublinks */}
                        {link.sublinks.map((slinks) => (
                            <div>
                                <div>
                                    <h1
                                        onClick={() =>
                                            subHeading !== slinks.name
                                                ? setSubHeading(slinks.name)
                                                : setSubHeading("")
                                        }
                                        className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                                    >
                                        {slinks.name}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;
