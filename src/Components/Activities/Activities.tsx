import { AppDispatch, RootState } from "configStore";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
    getNews,
    getNewsLimit,
    getRandomNews,
    setNewsDetail,
} from "Slices/news";

const Activities = () => {
    const { listNewRandom } = useSelector((state: RootState) => state.news);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getRandomNews());
    }, []);

    return (
        <div className="bg-gray-100 pb-5">
            <div className="container mx-auto px-5 lg:px-16">
                <div className="flex justify-between items-end border-b-2 border-b-red-500 mb-5">
                    <NavLink
                        to=""
                        className="block bg-red-500 p-3 text-white hover:text-yellow-400 duration-150 font-semibold text-lg rounded-t-xl"
                    >
                        TIN TỨC &amp; HOẠT ĐỘNG T52
                    </NavLink>
                    <NavLink
                        to="/tin-tuc"
                        className="uppercase text-gray-600 hover:text-yellow-600 duration-150 mr-2"
                    >
                        xem thêm <i className="fa fa-angle-right" />
                    </NavLink>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {listNewRandom?.map((news: any, index: number) => {
                        if (index < 4)
                            return (
                                <NavLink
                                    key={index}
                                    to={`/tin-tuc-chi-tiet/${news.slug}`}
                                    className=" mb-5 rounded-xl bg-white overflow-hidden text-gray-700 hover:text-amber-500 border border-transparent hover:border-gray-100 duration-150 cursor-pointer flex flex-col justify-between"
                                >
                                    <div>
                                        <img
                                            className="w-full h-48 object-cover"
                                            src={news.img}
                                            alt=""
                                        />
                                        <div className="p-5 font-bold text-base md:text-xl ">
                                            {news.name}
                                        </div>
                                    </div>

                                    <div className="px-5 pb-5 text-gray-500">
                                        {moment(news?.createdAt)
                                            .format("DD-MM-YYYY")
                                            .toString()}
                                    </div>
                                </NavLink>
                            );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Activities;
