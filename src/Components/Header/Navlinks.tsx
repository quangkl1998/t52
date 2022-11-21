import { AppDispatch, RootState } from "configStore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getList } from "Slices/menu";
import { links } from "./MyLinks";

const NavLinks = ({ handleOpen }: any) => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    const navigate = useNavigate();

    const { list: listMenu } = useSelector((state: RootState) => state.menu);
    console.log(listMenu);

    if (!listMenu) return <></>;
    const listLink = listMenu?.map((item) => {
        return {
            name: item?.name,
            slug: item?.slug,
            url: item?.url,
            type: item?.type,
            isActive: item?.isActive,
            submenu: item?.submenus.length == 0 ? false : true,
            sublinks: item?.submenus?.map((it: any) => {
                return {
                    name: it?.name,
                    slug: it?.slug,
                    type: it?.type,
                    url: it?.url,
                };
            }),
        };
    });
    // console.log(listLink);

    return (
        <>
            {listLink.map((link, index) => {
                if (link?.isActive) {
                    if (index > 0) {
                        return (
                            <div key={link.name}>
                                <div className="px-3 text-left lg:cursor-pointer group relative">
                                    {link?.type == "link" && (
                                        <a
                                            className=" flex justify-between items-center lg:pr-0 pr-5 pb-4 lg:pb-0 group font-semibold text-2xl lg:text-lg cursor-pointer text-red-600 lg:text-white border-b-4 border-b-transparent hover:text-white duration-150 lg:border-b-transparent"
                                            href={link?.url}
                                        >
                                            {link?.name}
                                        </a>
                                    )}
                                    {link?.type == "trang" && (
                                        <NavLink
                                            className=" flex justify-between items-center lg:pr-0 pr-5 pb-4 lg:pb-0 group font-semibold text-2xl lg:text-lg cursor-pointer text-red-600 lg:text-white border-b-4 border-b-transparent hover:text-white duration-150 lg:border-b-transparent"
                                            to={`/${link?.slug}`}
                                        >
                                            {link?.name}
                                        </NavLink>
                                    )}
                                    {link?.type == "thong-bao" && (
                                        <>
                                            <NavLink
                                                to={`${link?.slug}/tin-tuc`}
                                                className=" flex justify-between items-center lg:pr-0 pr-5 pb-4 lg:pb-0 group font-semibold text-2xl lg:text-lg cursor-pointer text-red-600 lg:text-white border-b-4 border-b-transparent hover:text-white duration-150 lg:border-b-transparent"
                                            >
                                                {link?.name}

                                                {link?.submenu && (
                                                    <span className="text-xl lg:ml-2  lg:block hidden group-hover:rotate-180 ">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={10}
                                                            height={6}
                                                            viewBox="0 0 10 6"
                                                            fill="#FFFF00"
                                                        >
                                                            <path
                                                                d="M1 1L5 5L9 1"
                                                                stroke="#FFFF00"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                )}
                                            </NavLink>
                                            <>
                                                {link.submenu && (
                                                    <div className="block lg:hidden">
                                                        {link?.sublinks?.map(
                                                            (
                                                                mysublinks: any,
                                                            ) => {
                                                                return (
                                                                    <>
                                                                        {mysublinks.type ==
                                                                            "link" && (
                                                                            <div
                                                                                key={
                                                                                    mysublinks.name
                                                                                }
                                                                            >
                                                                                <a
                                                                                    href={`${mysublinks.url}`}
                                                                                    className="block px-5 py-1 text-lg text-black hover:text-black cursor-pointer"
                                                                                >
                                                                                    {
                                                                                        mysublinks.name
                                                                                    }
                                                                                </a>
                                                                            </div>
                                                                        )}
                                                                        {mysublinks.type ==
                                                                            "trang" && (
                                                                            <div
                                                                                key={
                                                                                    mysublinks.name
                                                                                }
                                                                            >
                                                                                <NavLink
                                                                                    to={`${link?.slug}/page/${mysublinks.slug}`}
                                                                                    className="block px-5 py-1 text-lg text-black hover:text-black cursor-pointer"
                                                                                >
                                                                                    {
                                                                                        mysublinks.name
                                                                                    }
                                                                                </NavLink>
                                                                            </div>
                                                                        )}
                                                                        {mysublinks.type ==
                                                                            "thong-bao" && (
                                                                            <div
                                                                                key={
                                                                                    mysublinks.name
                                                                                }
                                                                            >
                                                                                <NavLink
                                                                                    to={`${link?.slug}/${mysublinks.slug}`}
                                                                                    className="block px-5 py-1 text-lg text-black hover:text-black cursor-pointer"
                                                                                >
                                                                                    {
                                                                                        mysublinks.name
                                                                                    }
                                                                                </NavLink>
                                                                            </div>
                                                                        )}
                                                                    </>
                                                                );
                                                            },
                                                        )}
                                                    </div>
                                                )}
                                            </>
                                        </>
                                    )}

                                    {link?.type == "thong-bao" && link.submenu && (
                                        <div>
                                            <div className="absolute top-full hidden group-hover:lg:block hover:lg:block min-w-max rounded-b-md overflow-hidden bg-red-600 text-white px-0 pt-6 pb-3 shadow">
                                                {link?.sublinks?.map(
                                                    (mysublinks: any) => {
                                                        return (
                                                            <>
                                                                {mysublinks.type ==
                                                                    "link" && (
                                                                    <div
                                                                        key={
                                                                            mysublinks.name
                                                                        }
                                                                    >
                                                                        <a
                                                                            href={`${mysublinks.url}`}
                                                                            className="block px-5 py-1 text-lg text-white hover:text-white cursor-pointer"
                                                                        >
                                                                            {
                                                                                mysublinks.name
                                                                            }
                                                                        </a>
                                                                    </div>
                                                                )}
                                                                {mysublinks.type ==
                                                                    "trang" && (
                                                                    <div
                                                                        key={
                                                                            mysublinks.name
                                                                        }
                                                                    >
                                                                        <NavLink
                                                                            to={`${link?.slug}/page/${mysublinks.slug}`}
                                                                            className="block px-5 py-1 text-lg text-white hover:text-white cursor-pointer"
                                                                        >
                                                                            {
                                                                                mysublinks.name
                                                                            }
                                                                        </NavLink>
                                                                    </div>
                                                                )}
                                                                {mysublinks.type ==
                                                                    "thong-bao" && (
                                                                    <div
                                                                        key={
                                                                            mysublinks.name
                                                                        }
                                                                    >
                                                                        <NavLink
                                                                            to={`${link?.slug}/${mysublinks.slug}`}
                                                                            className="block px-5 py-1 text-lg text-white hover:text-white cursor-pointer"
                                                                        >
                                                                            {
                                                                                mysublinks.name
                                                                            }
                                                                        </NavLink>
                                                                    </div>
                                                                )}
                                                            </>
                                                        );
                                                    },
                                                )}
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
                                    {link?.sublinks?.map((slinks: any) => (
                                        <NavLink
                                            to={slinks.slug}
                                            key={slinks.name}
                                            onClick={() => {
                                                subHeading !== slinks.name
                                                    ? setSubHeading(slinks.name)
                                                    : setSubHeading("");
                                                handleOpen();
                                            }}
                                            className="pl-7 p-1 ml-2 border-l font-semibold flex justify-between items-center cursor-pointer text-lg text-black"
                                        >
                                            {slinks.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={link.name}>
                                <div className="px-3 text-left lg:cursor-pointer group relative">
                                    {link?.type == "link" && (
                                        <a
                                            className=" flex justify-between items-center lg:pr-0 pr-5 pb-4 lg:pb-0 group font-semibold text-2xl lg:text-lg cursor-pointer text-red-600 lg:text-white border-b-4 border-b-transparent hover:text-white duration-150 lg:border-b-transparent"
                                            href={link?.url}
                                        >
                                            {link?.name}
                                        </a>
                                    )}
                                    {link?.type == "trang" && (
                                        <NavLink
                                            className=" flex justify-between items-center lg:pr-0 pr-5 pb-4 lg:pb-0 group font-semibold text-2xl lg:text-lg cursor-pointer text-red-600 lg:text-white border-b-4 border-b-transparent hover:text-white duration-150 lg:border-b-transparent"
                                            to={`/${link?.slug}`}
                                        >
                                            {link?.name}
                                        </NavLink>
                                    )}
                                    {link?.type == "thong-bao" && (
                                        <>
                                            <div className=" flex justify-between items-center lg:pr-0 pr-5 pb-4 lg:pb-0 group font-semibold text-2xl lg:text-lg cursor-pointer text-red-600 lg:text-white border-b-4 border-b-transparent hover:text-white duration-150 lg:border-b-transparent">
                                                {link?.name}

                                                {link?.submenu && (
                                                    <span className="text-xl lg:ml-2  lg:block hidden group-hover:rotate-180 ">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={10}
                                                            height={6}
                                                            viewBox="0 0 10 6"
                                                            fill="#FFFF00"
                                                        >
                                                            <path
                                                                d="M1 1L5 5L9 1"
                                                                stroke="#FFFF00"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                )}
                                            </div>
                                            <>
                                                {link.submenu && (
                                                    <div className="block lg:hidden">
                                                        {link?.sublinks?.map(
                                                            (
                                                                mysublinks: any,
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        mysublinks.name
                                                                    }
                                                                >
                                                                    <NavLink
                                                                        to={`vay-bang/${mysublinks.slug}`}
                                                                        className="block px-5 py-1 text-lg text-black hover:text-black cursor-pointer"
                                                                    >
                                                                        {
                                                                            mysublinks.name
                                                                        }
                                                                    </NavLink>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                )}
                                            </>
                                        </>
                                    )}

                                    {link?.type == "thong-bao" && link.submenu && (
                                        <div>
                                            <div className="absolute top-full hidden group-hover:lg:block hover:lg:block min-w-max rounded-b-md overflow-hidden bg-red-600 text-white px-0 pt-6 pb-3 shadow">
                                                {link?.sublinks?.map(
                                                    (mysublinks: any) => (
                                                        <div
                                                            key={
                                                                mysublinks.name
                                                            }
                                                            className=" overflow-hidden hover:bg-red-500 duration-300 "
                                                        >
                                                            <NavLink
                                                                to={`vay-bang/${mysublinks.slug}`}
                                                                className="block px-5 p-3 text-white hover:text-white cursor-pointer"
                                                            >
                                                                {
                                                                    mysublinks.name
                                                                }
                                                            </NavLink>
                                                        </div>
                                                    ),
                                                )}
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
                                    {link?.sublinks?.map((slinks: any) => (
                                        <NavLink
                                            to={slinks.slug}
                                            key={slinks.name}
                                            onClick={() => {
                                                subHeading !== slinks.name
                                                    ? setSubHeading(slinks.name)
                                                    : setSubHeading("");
                                                handleOpen();
                                            }}
                                            className="pl-7 p-1 ml-2 border-l font-semibold flex justify-between items-center cursor-pointer text-lg text-black"
                                        >
                                            {slinks.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        );
                    }
                }
            })}
        </>
    );
};

export default NavLinks;
