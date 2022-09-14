import { AppDispatch } from "configStore";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setNewsDetail } from "Slices/news";
import { data } from "./NewData";

const Outstanding = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="bg-gray-100 py-5">
            <div className="container mx-auto px-5 lg:px-16">
                <h1 className="text-center p-5 font-bold text-2xl md:text-3xl text-red-600">
                    Tin tức nổi bật
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-8">
                    {data.map((news, index) => {
                        if (index === 0) {
                            return (
                                <NavLink
                                    key={index}
                                    onClick={() =>
                                        dispatch(setNewsDetail(news))
                                    }
                                    to={`/tin-tuc-chi-tiet/${news.id}`}
                                    className="w-full bg-white rounded-xl overflow-hidden hover:text-amber-500 hover:shadow-md duration-150 cursor-pointer"
                                >
                                    <img
                                        className="w-full"
                                        src={news.avatar}
                                        alt=""
                                    />
                                    <div className="p-5 font-bold text-xl ">
                                        {news.name}
                                    </div>
                                    <div className="px-5 pb-5 text-gray-500">
                                        {news.createDay}
                                    </div>
                                </NavLink>
                            );
                        }
                    })}
                    <div className="flex flex-col">
                        {data.map((news, index) => {
                            if (index === 0) {
                                return;
                            } else {
                                return (
                                    <NavLink
                                        key={index}
                                        onClick={() =>
                                            dispatch(setNewsDetail(news))
                                        }
                                        to={`/tin-tuc-chi-tiet/${news.id}`}
                                        className="flex mb-5 rounded-xl bg-white overflow-hidden hover:text-amber-500 hover:shadow-md duration-150 cursor-pointer"
                                    >
                                        <img
                                            className="w-1/2 md:w-5/12"
                                            src={news.avatar}
                                            alt=""
                                        />
                                        <div>
                                            <div className="p-5 font-bold text-base md:text-xl">
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
        </div>
    );
};

export default Outstanding;
