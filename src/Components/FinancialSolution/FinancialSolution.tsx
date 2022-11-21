import { AppDispatch, RootState } from "configStore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "Slices/solution";

const FinancialSolution = () => {
    const { list, error } = useSelector((state: RootState) => state.solution);

    console.log(list);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getList());
    }, []);

    if (!list) return <></>;

    return (
        <div className="bg-gray-100 py-8">
            <div className="container  mx-auto">
                <h2 className="text-center text-red-600 md:text-3xl font-bold text-2xl mb-3 md:leading-6  ">
                    T52 - Giải pháp tài chính đáng tin cậy
                </h2>
                <p className=" text-center text-gray-500 font-medium leading-4 md:text-base text-sm py-3 ">
                    Cung cấp dịch vụ tài chính cá nhân cho khách hàng một cách
                    thuận tiện, nhanh chóng và chuyên nghiệp
                </p>

                <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-2 md:gap-10 px-5 lg:px-20 md:px-5">
                    {list?.map((item: any) => {
                        return (
                            <div className="flex flex-col items-center border shadow-lg p-5 md:p-10 rounded-3xl text-center bg-white">
                                <div>
                                    <img src={item?.img} width={100} alt="" />
                                </div>
                                <div className="mt-2 font-bold text-sm md:text-xl">
                                    {item?.title}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FinancialSolution;
