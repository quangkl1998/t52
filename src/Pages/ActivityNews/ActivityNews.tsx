import Questions from "Components/Questions/Questions";
import Story from "Components/Story/Story";
import { AppDispatch, RootState } from "configStore";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getMedia } from "Slices/media";
import { getNewPagination } from "Slices/news";

const ActivityNews = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { listNewPagination, isLoading, error } = useSelector(
        (state: RootState) => state.news,
    );
    const { listMedia } = useSelector((state: RootState) => state.media);

    const [nextPage, setNextPage] = useState(0);

    useEffect(() => {
        dispatch(getNewPagination({ size: 4, page: nextPage }));
        dispatch(getMedia());
    }, [nextPage]);
    return (
        <div>
            <div className="lg:h-28 h-20"></div>
            <div className="h-10"></div>
            <h2 className=" text-red-600 md:text-3xl uppercase font-bold text-2xl mb-0 md:mb-3 md:leading-6 text-center py-10">
                Tin tức &amp; Hoạt động
            </h2>
            <div className="lg:h-20 h-14"></div>
            <div className="container mx-auto px-5 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-8">
                    {listNewPagination?.content?.map(
                        (item: any, index: number) => {
                            if (index === 0)
                                return (
                                    <NavLink
                                        key={index}
                                        // onClick={() => {
                                        //     dispatch(getNewDetail(news.id));
                                        // }}
                                        to={`/tin-tuc-chi-tiet/${item?.slug}`}
                                        className="w-full bg-white rounded-xl overflow-hidden text-gray-700 hover:text-amber-500 border border-transparent hover:border-gray-100 duration-300 cursor-pointer"
                                    >
                                        <img
                                            className="w-full object-cover h-auto md:h-80"
                                            src={item?.img}
                                            alt="aaaa"
                                        />
                                        <div className="p-5 pb-2 font-bold text-xl ">
                                            {item?.name}
                                        </div>
                                        <div className="px-5 pb-2 text-gray-600">
                                            {item?.descript}
                                        </div>
                                        <div className="px-5 pb-5 text-gray-500">
                                            {moment(item?.createdAt)
                                                .format("DD-MM-YYYY")
                                                .toString()}
                                        </div>
                                    </NavLink>
                                );
                        },
                    )}
                    <div className="grid grid-rows-3 gap-5">
                        {listNewPagination?.content?.map(
                            (item: any, index: number) => {
                                if (index === 0) {
                                    return;
                                } else {
                                    if (index < 4) {
                                        return (
                                            <NavLink
                                                key={index}
                                                // onClick={() =>
                                                //     dispatch(getNewDetail(news.id))
                                                // }
                                                to={`/tin-tuc-chi-tiet/${item?.slug}`}
                                                className="flex w-full h-36 mb-5 rounded-xl bg-white overflow-hidden text-gray-700 hover:text-amber-500 border border-transparent hover:border-gray-100 duration-300 cursor-pointer"
                                            >
                                                <img
                                                    className="w-1/2 h-full md:w-5/12 object-cover"
                                                    src={item?.img}
                                                    alt=""
                                                />
                                                <div className="w-1/2">
                                                    <div className="p-5 font-bold text-base md:text-xl ">
                                                        {item?.name}
                                                    </div>
                                                    <div className="px-5 pb-5 text-gray-500">
                                                        {moment(item?.createdAt)
                                                            .format(
                                                                "DD-MM-YYYY",
                                                            )
                                                            .toString()}
                                                    </div>
                                                </div>
                                            </NavLink>
                                        );
                                    }
                                }
                            },
                        )}
                    </div>
                </div>
                <div className="h-6"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16 gap-8">
                    {listNewPagination?.content?.map(
                        (item: any, index: number) => {
                            if (index >= 4) {
                                return (
                                    <NavLink
                                        to={`/tin-tuc-chi-tiet/${item?.slug}`}
                                        className="w-full bg-white rounded-xl overflow-hidden text-gray-700 hover:text-amber-500 border border-transparent hover:border-gray-100 duration-300 cursor-pointer"
                                    >
                                        <img
                                            className="w-full h-56 lg:h-40 object-cover"
                                            src={item?.img}
                                            alt="aaaa"
                                        />
                                        <div className="p-5 pb-2 font-bold text-base ">
                                            {item?.name}
                                        </div>
                                        <div className="px-5 pb-5 text-gray-500">
                                            {moment(item?.createdAt)
                                                .format("DD-MM-YYYY")
                                                .toString()}
                                        </div>
                                    </NavLink>
                                );
                            }
                        },
                    )}
                </div>
                <div className="h-5"></div>
                <div className="flex gap-3 text-base justify-center align-middle mb-10">
                    {/* {renderButtonPagination()} */}
                    <button
                        className="border px-16 py-3 rounded-md bg-yellow-600 hover:bg-yellow-700 duration-300 text-white"
                        onClick={() => {
                            if (nextPage + 1 < listNewPagination.totalPages)
                                setNextPage(nextPage + 1);
                        }}
                    >
                        Xem thêm
                    </button>
                </div>
            </div>
            <Story />

            <div className="lg:h-20 h-14"></div>
            <div className="lg:h-28 h-20"></div>
            <Questions />
            <div className="lg:h-28 h-20"></div>
        </div>
    );
};

export default ActivityNews;
