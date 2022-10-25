import { AppDispatch, RootState } from "configStore";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
    getNewDetail,
    getNews,
    getNewsLimit,
    setNewsDetail,
} from "Slices/news";
import { data } from "Utill/NewsData";

const Outstanding = () => {
    const { listNew, isLoading, error } = useSelector(
        (state: RootState) => state.news,
    );
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getNewsLimit(4));
    }, []);

    return (
        <div className="bg-gray-100 py-5">
            <div className="container mx-auto px-5 lg:px-16">
                <h1 className="text-center p-5 font-bold text-2xl md:text-3xl text-red-600">
                    Tin tức nổi bật
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-8">
                    {listNew?.map((news: any, index: number) => {
                        if (index === 0) {
                            return (
                                <NavLink
                                    key={index}
                                    // onClick={() => {
                                    //     dispatch(getNewDetail(news.id));
                                    // }}
                                    to={`/tin-tuc-chi-tiet/${news?.slug}`}
                                    className="w-full bg-white rounded-xl overflow-hidden text-gray-700 hover:text-amber-500 border border-transparent hover:border-gray-100 duration-150 cursor-pointer"
                                >
                                    <img
                                        className="w-full object-cover"
                                        src={news?.img}
                                        alt=""
                                    />
                                    <div className="p-5 font-bold text-xl ">
                                        {news?.name}
                                    </div>
                                    <div className="px-5 pb-2 text-gray-600">
                                        {news?.descript}
                                    </div>
                                    <div className="px-5 pb-5 text-gray-500">
                                        {moment(news?.createdAt)
                                            .format("DD-MM-YYYY")
                                            .toString()}
                                    </div>
                                </NavLink>
                            );
                        }
                    })}
                    <div className="flex flex-col">
                        {listNew?.map((news: any, index: number) => {
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
                                            to={`/tin-tuc-chi-tiet/${news?.slug}`}
                                            className="flex mb-5 rounded-xl bg-white overflow-hidden text-gray-700 hover:text-amber-500 border border-transparent hover:border-gray-100 duration-150 cursor-pointer"
                                        >
                                            <img
                                                className="w-1/2 md:w-5/12 object-cover"
                                                src={news?.img}
                                                alt=""
                                            />
                                            <div>
                                                <div className="p-5 font-bold text-base md:text-xl ">
                                                    {news?.name}
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
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Outstanding;
