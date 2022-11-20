import { AppDispatch, RootState } from "configStore";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getMedia } from "Slices/media";
import { data } from "Utill/VideoData";

const Story = () => {
    const { listMedia, isLoading, error } = useSelector(
        (state: RootState) => state.media,
    );
    console.log(listMedia);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getMedia());
    }, []);
    return (
        <div className="bg-gray-100 pb-10">
            <div className="container mx-auto px-5 lg:px-16">
                <div className="flex justify-between items-end border-b-2 border-b-red-500 mb-5">
                    <NavLink
                        to=""
                        className="block bg-red-500 p-3 text-white hover:text-yellow-400 duration-150 font-semibold text-lg rounded-t-xl"
                    >
                        CÂU CHUYỆN T52
                    </NavLink>
                    <NavLink
                        to="/tin-tuc-hoat-dong"
                        className="uppercase text-gray-600 hover:text-yellow-600 duration-150 mr-2"
                    >
                        xem thêm <i className="fa fa-angle-right" />
                    </NavLink>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {listMedia?.map((item: any, index: number) => {
                        if (index < 4)
                            return (
                                <div
                                    key={index}
                                    className="rounded-lg bg-white shadow overflow-hidden border border-transparent hover:border-gray-100 hover:text-amber-500 cursor-pointer duration-150 flex flex-col justify-between"
                                >
                                    {/* <video
                                    controls
                                    poster={tt.poster}
                                    className="h-52 object-cover w-full"
                                >
                                    <source src={tt.video} />
                                </video> */}
                                    <div>
                                        <iframe
                                            width={270}
                                            height={208}
                                            src={`https://www.youtube.com/embed/${item.urlVideo}?start=1`}
                                            title="video"
                                            frameBorder={0}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />

                                        <div className="m-3 font-bold text-lg line-clamp-2 overflow-hidden text-ellipsis">
                                            {item?.name}
                                        </div>
                                    </div>
                                    <div className="px-5 pb-5 text-gray-500">
                                        {moment(item?.createdAt)
                                            .format("DD-MM-YYYY")
                                            .toString()}
                                    </div>
                                </div>
                            );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Story;
