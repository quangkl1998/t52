import React from "react";
import { NavLink } from "react-router-dom";

const Activities = () => {
    return (
        <div>
            <div className="container mx-auto px-5 lg:px-16">
                <div className="flex justify-between items-end border-b-2 border-b-red-500 mb-5">
                    <NavLink
                        to=""
                        className="block bg-red-500 p-3 text-white hover:text-yellow-400 duration-150 font-semibold text-lg rounded-t-xl"
                    >
                        TIN TỨC & HOẠT ĐỘNG F88
                    </NavLink>
                    <NavLink
                        to=""
                        className="uppercase text-gray-600 hover:text-yellow-600 duration-150 mr-2"
                    >
                        xem thêm <i className="fa fa-angle-right" />
                    </NavLink>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Activities;
