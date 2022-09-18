import { AppDispatch } from "configStore";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { setNewsDetail } from "Slices/news";
import { data } from "Utill/NewsData";

const NewRelated = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams();

    return (
        <div className="bg-gray-100 mt-5 py-5">
            <div className="container mx-auto px-5 lg:px-16">
                <div className="flex justify-between items-end border-b-2 border-b-red-500 mb-5">
                    <NavLink
                        to=""
                        className="block bg-red-500 p-3 text-white hover:text-yellow-400 duration-150 font-semibold text-lg rounded-t-xl"
                    >
                        Tin tức liên quan
                    </NavLink>
                    <NavLink
                        to=""
                        className="uppercase text-gray-600 hover:text-yellow-600 duration-150 mr-2"
                    >
                        xem thêm <i className="fa fa-angle-right" />
                    </NavLink>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* {data.map((tt) => {
                        return (
                            <div
                                key={tt.id}
                                className="rounded-lg bg-white shadow overflow-hidden hover:shadow-xl hover:text-amber-500 duration-150 cursor-pointer"
                            >
                                <img
                                    className="w-full"
                                    src={tt.avatar}
                                    alt=""
                                />
                                <div className="p-3 font-bold text-lg h-16 overflow-hidden text-ellipsis mb-2">
                                    {tt.name}
                                </div>
                                <div className="px-5 pb-5 text-gray-500">
                                    {tt.createDay}
                                </div>
                            </div>
                        );
                    })} */}
                    {data.map((news, index) => {
                        if (news.id !== id) {
                            return (
                                <NavLink
                                    key={index}
                                    onClick={() =>
                                        dispatch(setNewsDetail(news))
                                    }
                                    to={`/tin-tuc-chi-tiet/${news.id}`}
                                    className=" mb-5 rounded-xl bg-white overflow-hidden text-gray-700 hover:text-amber-500 hover:shadow-md duration-150 cursor-pointer"
                                >
                                    <img
                                        className="w-full"
                                        src={news.avatar}
                                        alt=""
                                    />
                                    <div>
                                        <div className="p-5 font-bold text-base md:text-xl ">
                                            {news.name}
                                        </div>
                                        <div className="px-5 pb-5 text-gray-500">
                                            {news.createDay}
                                        </div>
                                    </div>
                                </NavLink>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default NewRelated;
