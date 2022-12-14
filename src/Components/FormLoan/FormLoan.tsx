import axios from "axios";
import { AppDispatch, RootState } from "configStore";
import React, { useEffect, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getDistrict, getProvince, getStores } from "Slices/store";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { addClient } from "Slices/ClientAdmin";
import { useNavigate } from "react-router-dom";

const FormLoan = () => {
    const { listStore, listProvince, listDistrict, isLoading, error } =
        useSelector((state: RootState) => state.stores);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [provinceId, setProvinceId] = useState<any>("");
    const [districtId, setDistrictId] = useState<any>("");

    useEffect(() => {
        dispatch(getProvince(null));
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, //liệt kê các input đang lỗi
    } = useForm({
        //defaultValues khai báo giá trị mặc định cho các input trong form
        defaultValues: {
            name: "",
            phone: "",
            loanType: "",
            province: "",
            districts: "",
            storeId: "",
        },
        //mode: cacash validation đc trigger (defaute là submit)
        mode: "onTouched",
    });
    const onSubmit = (values: any) => {
        const store = listStore.find((item: any) => item.id == values.storeId);

        const nameStore = `${store.name}, ${store.district.name}, ${store.district.province.name}`;

        const data = {
            ...values,
            nameStore,
        };

        dispatch(
            addClient({
                ...values,
                isLoan: false,
            }),
        )
            .unwrap()
            .then((result) => {
                if (result.id) {
                    emailjs
                        .send(
                            "service_uyfrx3a",
                            "template_yleob6f",
                            data,
                            "6bxE6T77g2MSso4FN",
                        )
                        .then(
                            (result) => {
                                Swal.fire({
                                    title: "Đăng ký thành công",
                                });
                                reset();
                            },
                            (error) => {
                                Swal.fire({
                                    title: "Đăng ký thất bại",
                                });
                            },
                        );
                } else {
                    Swal.fire({
                        title: `Thêm thất bại`,
                    });
                }
            });
    };
    const onError = (values: FieldErrors<any>) => {
        console.log(values);
    };

    return (
        <div className="container mx-auto px-5 lg:px-16">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5 border">
                <div className="border-b pb-3">
                    <h3 className="text-lg text-gray-600">
                        NHẬP THÔNG TIN ĐĂNG KÝ VAY
                    </h3>
                    <span className="font-bold text-lg">
                        Vừa có tiền vừa có xe đi. Duyệt vay nhanh chóng trong{" "}
                        <span className="text-amber-600">15 phút</span>
                    </span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <h4 className="uppercase font-bold text-xl text-amber-700 my-5">
                                THÔNG TIN CÁ NHÂN
                            </h4>
                            <div className="pb-6">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Họ tên{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    {...register("name")}
                                    type="text"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Nhập họ tên"
                                    required
                                />
                            </div>
                            <div className="pb-6">
                                <label
                                    htmlFor="phone"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Số điện thoại{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    {...register("phone", {
                                        required: true,
                                    })}
                                    type="text"
                                    id="phone"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Nhập số điện thoại"
                                />
                            </div>
                            <div className="pb-6">
                                <label
                                    htmlFor="asset-filter"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Bạn muốn vay bằng{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <select
                                    {...register("loanType")}
                                    id="asset-filter"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    defaultValue=""
                                >
                                    <option value="Đăng ký xe máy">
                                        Đăng ký xe máy
                                    </option>
                                    <option value="Đăng ký ô tô">
                                        Đăng ký ô tô
                                    </option>
                                    <option value="Ô tô">Ô tô</option>
                                    <option value="Xe máy">Xe máy</option>
                                    <option value="Tài sản khác">
                                        Tài sản khác
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <h4 className="uppercase font-bold text-xl text-amber-700 my-5">
                                Cửa hàng gần bạn
                            </h4>
                            <div className="pb-6">
                                <label
                                    htmlFor="province"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Tỉnh/Thành{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <select
                                    {...register("province")}
                                    id="asset-filter"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Tỉnh/Thành"
                                    onChange={(e) => {
                                        setProvinceId(e.target.value);
                                        dispatch(
                                            getDistrict({
                                                provinceId: e.target.value,
                                            }),
                                        );
                                    }}
                                >
                                    <option value=""> Tỉnh/Thành</option>
                                    {listProvince?.map(
                                        (item: any, index: number) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.id}
                                                >
                                                    {item?.name}
                                                </option>
                                            );
                                        },
                                    )}
                                </select>
                            </div>
                            <div className="pb-6">
                                <label
                                    htmlFor="province"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Quận/Huyện{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <select
                                    {...register("districts")}
                                    id="asset-filter"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Tỉnh/Thành"
                                    onChange={(e) => {
                                        dispatch(
                                            getStores({
                                                districtId: e.target.value,
                                                provinceId,
                                            }),
                                        );
                                    }}
                                >
                                    <option value=""> Quận/Huyện</option>
                                    {listDistrict?.map(
                                        (item: any, index: number) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.id}
                                                >
                                                    {item?.name}
                                                </option>
                                            );
                                        },
                                    )}
                                </select>
                            </div>
                            <div className="pb-6">
                                <label
                                    htmlFor="province"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Cửa hàng{" "}
                                    <span className="text-red-600">*</span>
                                </label>

                                <select
                                    {...register("storeId")}
                                    id="asset-filter"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Cửa hàng"
                                    required
                                >
                                    <option value="">Cửa hàng</option>
                                    {listStore?.map(
                                        (item: any, index: number) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.id}
                                                >
                                                    {item?.name},{" "}
                                                    {item.district.name},{" "}
                                                    {
                                                        item.district.province
                                                            .name
                                                    }
                                                </option>
                                            );
                                        },
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                    <span className="italic">
                        <span className="text-red-600">*</span> Thông tin bắt
                        buộc
                    </span>

                    <button
                        type="submit"
                        className="text-white bg-amber-600 hover:bg-amber-700 duration-150s focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center block mx-auto"
                    >
                        Xác nhận
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormLoan;
