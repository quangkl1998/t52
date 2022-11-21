import React, { useEffect } from "react";
import { Tabs } from "antd";
import check from "Assets/icons/check.png";
import homeimage1 from "Assets/img/Loan/19bT52tiennhanh3.png";
import homeimage2 from "Assets/img/Loan/19aT52tiennhanh(ZALO).png";

import homeimage3 from "Assets/img/Loan/18bT52aicungthich(ZALO).png";
import homeimage4 from "Assets/img/Loan/21a,T52(ZALO).png";

import homeimage6 from "Assets/img/Loan/18aT52aicungthich(ZALO).jpg";
import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "Slices/service";
import { NavLink } from "react-router-dom";
const OutStandingService = () => {
    const { list: listService } = useSelector(
        (state: RootState) => state.service,
    );
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getList());
    }, [dispatch]);

    const items: any = [];
    listService?.map((service, index) => {
        items.push({
            label: (
                <div>
                    <div></div>
                    <div>{service?.name}</div>
                </div>
            ),
            key: index.toString(),
            children: (
                <div className="md:w-3/4 w-full m-auto pb-4 border-b ">
                    <div className="grid lg:grid-cols-10 grid-cols-1">
                        <div className="block md:hidden lg:col-span-6 col-span-1 mt-2">
                            <div>
                                <img
                                    src={service?.img}
                                    alt="home-image-1"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                        <div className=" lg:col-span-4 col-span-1 ">
                            <h2 className="font-bold text-xl text-red-600 mt-2 text-left">
                                {service?.title}
                            </h2>
                            <div>
                                {service?.listservices?.map((it: any) => {
                                    return (
                                        <div className="flex items-center mb-4 ">
                                            <img
                                                src={check}
                                                alt="check"
                                                className="object-cover w-6 h-6"
                                            />

                                            <p className="md:text-xl text-left text-sm font-medium leading-5 mb-0 ml-4 ">
                                                {it?.title}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex">
                                <NavLink
                                    to="/vay-ngay"
                                    className="rounded-md font-medium text-base cursor-pointer p-2  text-white  bg-red-600"
                                >
                                    Vay ngay
                                </NavLink>
                            </div>
                        </div>
                        <div className=" lg:col-span-6 col-span-1 hidden md:block mt-2 ">
                            <div className="lg:ml-5">
                                <img
                                    src={service?.img}
                                    alt="home-image-1"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ),
        });
    });

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto ">
                <div className="text-center pt-5 md:pt-10 ">
                    <div className="lg:px-16 px-0">
                        <h2 className=" inline-block text-red-600 md:text-3xl font-bold text-2xl mb-0 md:mb-3 md:leading-6 animate__animated  animate__heartBeat animate__delay-1s ">
                            Dịch vụ nổi bật
                        </h2>
                        <p className=" text-gray-500 font-medium leading-4 md:text-base text-sm py-3">
                            Khám phá các sản phẩm vay và bảo hiểm sức khỏe đang
                            được nhiều khách hàng sử dụng tại T52
                        </p>
                        <div className="card-container">
                            <Tabs centered type="card" items={items} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutStandingService;
