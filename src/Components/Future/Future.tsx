import React, { useEffect } from "react";
import chienluocimg from "Assets/img/T52/6a_chien_luoc_phat_trien_(ZALO).png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { getFutureList } from "Slices/future";
const Future = () => {
    const { list: listFuture } = useSelector(
        (state: RootState) => state.future,
    );
    console.log(listFuture);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getFutureList());
    }, []);

    return (
        <div className="mt-8">
            <div className="container mx-auto  px-5 lg:px-16">
                {listFuture?.map((item) => {
                    return (
                        <div className="p-5 bg-white rounded-lg">
                            <h2 className=" text-red-600 md:text-3xl font-bold text-2xl mb-0 md:mb-3 md:leading-6     ">
                                {item?.title}
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2  mt-5">
                                <div className="p-8 text-gray-500 leading-loose tracking-wide">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: item?.content,
                                        }}
                                    />
                                </div>
                                <img
                                    src={item?.img}
                                    alt="tamnhinchienluoc"
                                    className="rounded-lg lg:rounded-b-lg"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Future;
