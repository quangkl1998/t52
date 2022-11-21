import { AppDispatch, RootState } from "configStore";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getListNewBySlug } from "Slices/menu";
import { getNewsLimit } from "Slices/news";

const Outstanding = () => {
    const { menuslug, subslug } = useParams();
    const { listNewBySlug, error } = useSelector(
        (state: RootState) => state.menu,
    );
    const [nextPage, setNextPage] = useState(4);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(
            getListNewBySlug({
                slugMenu: menuslug,
                slugSubMenu: subslug,
                limit: nextPage,
            }),
        );
    }, [subslug, nextPage]);

    return (
        <div className="bg-gray-100 py-5">
            <div className="container mx-auto px-5 lg:px-16">
                <h1 className="text-center p-5 font-bold text-2xl md:text-3xl text-red-600">
                    {listNewBySlug?.name}
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-8 ">
                    {listNewBySlug?.news?.map((news: any, index: number) => {
                        if (index === 0) {
                            return (
                                <NavLink
                                    key={index}
                                    to={`/tin-tuc-chi-tiet/${news?.slug}`}
                                    className="w-full bg-white rounded-xl overflow-hidden text-gray-700 hover:text-amber-500 border border-transparent hover:border-gray-100 duration-150 cursor-pointer"
                                >
                                    <img
                                        className="w-full object-cover h-auto md:h-80"
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
                    <div className="grid grid-rows-3 gap-5">
                        {listNewBySlug?.news.map((news: any, index: number) => {
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
                                            className="flex w-full h-36 rounded-xl bg-white overflow-hidden text-gray-700 hover:text-amber-500 border border-transparent hover:border-gray-100 duration-150 cursor-pointer"
                                        >
                                            <img
                                                className="w-1/2 h-full md:w-5/12 object-cover"
                                                src={news?.img}
                                                alt=""
                                            />
                                            <div className="w-1/2">
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
                <div className="h-5"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {listNewBySlug?.news
                        ?.slice(0)
                        .reverse()
                        .map((news: any, index: number) => {
                            if (index >= 4)
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
                <div className="h-5"></div>
                <div className="flex gap-3 text-base justify-center align-middle mb-10">
                    {/* {renderButtonPagination()} */}
                    <button
                        className="border px-16 py-3 rounded-md bg-yellow-600 hover:bg-yellow-700 duration-300 text-white"
                        onClick={() => {
                            setNextPage(nextPage + 4);
                        }}
                    >
                        Xem thêm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Outstanding;
