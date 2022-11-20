import T52lagi from "Assets/img/T52/1a_T52_la_gi.png";
import T52lagiweb from "Assets/img/T52/1a_T52_la_gi_(ZALO).png";

import { AppDispatch, RootState } from "configStore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "Slices/introduce";

const AboutT52 = () => {
    const { list: listIntroduce } = useSelector(
        (state: RootState) => state.introduce,
    );
    console.log(listIntroduce);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getList());
    }, []);

    return (
        <div className="mb-8">
            <div className="container mx-auto px-5 lg:px-16">
                {listIntroduce?.map((item) => {
                    return (
                        <div className="bg-white rounded-lg p-5">
                            <h2 className=" text-red-600 md:text-3xl font-bold text-2xl mb-3 md:leading-6">
                                {item?.title}
                            </h2>
                            <div className=" text-left p-5">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <img
                                        src={T52lagi}
                                        alt="T52lagi"
                                        className="md:hidden block mt-2 rounded-lg"
                                    />

                                    <div className="px-5 mt-2 text-gray-500 leading-loose tracking-wide">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item?.content,
                                            }}
                                        />
                                    </div>

                                    <img
                                        src={item?.img}
                                        alt="T52lagi"
                                        className="md:block hidden mt-2 rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AboutT52;
