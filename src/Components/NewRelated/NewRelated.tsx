import { AppDispatch, RootState } from "configStore";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { getNewsLimit, setNewsDetail } from "Slices/news";

const NewRelated = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { name } = useParams();
    const { listNew, isLoading, error } = useSelector(
        (state: RootState) => state.news,
    );
    useEffect(() => {
        dispatch(getNewsLimit(5));
    }, []);

    // console.log(listNew);
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
                        to="/tin-tuc"
                        className="uppercase text-gray-600 hover:text-yellow-600 duration-150 mr-2"
                    >
                        xem thêm <i className="fa fa-angle-right" />
                    </NavLink>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {listNew?.rows?.map((news: any, index: number) => {
                        if (news.slug !== name) {
                            return (
                                <NavLink
                                    key={index}
                                    to={`/tin-tuc-chi-tiet/${news.slug}`}
                                    className=" mb-5 rounded-xl bg-white overflow-hidden text-gray-700 hover:text-amber-500 hover:shadow-md duration-150 cursor-pointer"
                                >
                                    <img
                                        className="w-full h-48 object-cover"
                                        src={news.img}
                                        alt=""
                                    />
                                    <div>
                                        <div className="p-5 font-bold text-base md:text-xl ">
                                            {news.name}
                                        </div>
                                        <div className="px-5 pb-5 text-gray-500">
                                            {moment(news?.createdAt)
                                                .format("DD-MM-YYYY")
                                                .toString()}
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
