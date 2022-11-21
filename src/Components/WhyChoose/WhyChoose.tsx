import { AppDispatch, RootState } from "configStore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getwhychoose } from "Slices/whychoose";

const WhyChoose = () => {
    const { list, error } = useSelector((state: RootState) => state.whychoose);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getwhychoose());
    }, []);

    if (!list) return <></>;

    return (
        <div>
            <h1 className="text-center p-5 font-bold text-2xl">
                Tại sao phải chọn T52
            </h1>
            <div className="container mx-auto px-5 lg:px-16">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5 border">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pb-5">
                        {list?.map((item: any) => {
                            return (
                                <div className="flex flex-col items-center pt-2 sm:pt-3 md:pt-5">
                                    <div className="h-16">
                                        <img
                                            src={item?.img}
                                            width={64}
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-8 px-3 text-base text-center font-medium">
                                        {item?.title}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
