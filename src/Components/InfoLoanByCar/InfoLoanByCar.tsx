import { AppDispatch, RootState } from "configStore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "Slices/loanguide";

const InfoLoanByCar = ({ detail }: any) => {
    const { list, error } = useSelector((state: RootState) => state.loanguide);
    console.log(list);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getList());
    }, []);

    if (!list) return <></>;
    return (
        <div>
            <h1 className="text-center p-5 font-bold text-2xl">
                {detail ? (
                    <>Vay tiền bằng {detail[0]?.name}</>
                ) : (
                    <>Các bước vay tiền</>
                )}
            </h1>
            <div className="container mx-auto px-5 lg:px-16">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5 border">
                    <div className="border-b pb-3">
                        <h4 className="uppercase font-bold text-xl text-amber-700 my-3">
                            THÔNG TIN
                        </h4>
                    </div>
                    <h3 className="font-semibold text-base text-gray-800">
                        {list[0]?.description}
                    </h3>
                    <h3 className="font-bold text-base text-amber-600 uppercase">
                        {list[0]?.name}
                    </h3>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="mb-5">
                                    <img
                                        src={list[0]?.imgProviso}
                                        alt=""
                                        width={120}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base">
                                        {list[0]?.titleProviso}
                                    </h4>
                                </div>
                            </div>
                            <div className="md:px-8 lg:px-16">
                                {list[0]?.contentProviso
                                    .split(".")
                                    .map((item: any) => {
                                        return (
                                            <div className="flex items-center">
                                                <i className="fa fa-check" />
                                                <span className="pl-2 text-base font-medium py-2">
                                                    {item}
                                                </span>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                        <div>
                            <div className="flex  flex-col justify-center items-center">
                                <div className="mb-5">
                                    <img
                                        src={list[0]?.imgProcedure}
                                        alt=""
                                        width={120}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base">
                                        2.Thủ tục cầm đăng ký/ cà vẹt
                                    </h4>
                                </div>
                            </div>
                            <div className="md:px-8 lg:px-16">
                                <div className="flex items-center">
                                    <i className="fa fa-check" />
                                    <span className="pl-2 text-base font-medium py-2">
                                        <span className="font-bold text-lg">
                                            Bước 1:{" "}
                                        </span>
                                        Đăng ký thông tin tư vấn
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fa fa-check" />
                                    <span className="pl-2 text-base font-medium py-2">
                                        <span className="font-bold text-lg">
                                            Bước 2:{" "}
                                        </span>
                                        Tư vấn qua điện thoại trong vòng 15 phút
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fa fa-check" />
                                    <span className="pl-2 text-base font-medium py-2">
                                        <span className="font-bold text-lg">
                                            Bước 3:{" "}
                                        </span>
                                        Đến PGD của T52 thẩm định tài sản và
                                        giải ngân nhanh chóng bằng tiền mặt hoặc
                                        chuyển khoản
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoLoanByCar;
