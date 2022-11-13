import axios from "axios";
import { AppDispatch, RootState } from "configStore";
import React, { useEffect, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getStores } from "Slices/store";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { addClient } from "Slices/ClientAdmin";
import { useNavigate } from "react-router-dom";

const FormServices = () => {
    const { listStore, isLoading, error } = useSelector(
        (state: RootState) => state.stores,
    );
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getStores(null));
    }, []);

    let listProvince: any = [];
    listStore.map((item: any) => {
        if (!listProvince.includes(item.province)) {
            listProvince.push(item.province);
        }
    });
    let listDistrict: any = [];

    let listStoreName: any = [];
    listStore.map((item: any) => {
        if (!listStoreName.includes(item.name)) {
            listStoreName.push(item.name);
        }
    });

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
            address: "",
        },
        //mode: cacash validation đc trigger (defaute là submit)
        mode: "onTouched",
    });
    const onSubmit = (values: any) => {
        const provinceName: any = province.find(
            (e: any) => e?.code == values?.province,
        );

        const data = {
            ...values,
            province: provinceName?.name,
        };
        dispatch(
            addClient({
                ...data,
                email: "t52tiennhanh@gmail.com",
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

    const [province, setProvince] = useState([]);
    const [districts, setDistricts] = useState([]);

    const handleClickProvince = (e: any) => {
        axios
            .get(`https://provinces.open-api.vn/api/p/${e}?depth=2`)
            .then((res) => {
                setDistricts(res.data?.districts);
            });
    };
    useEffect(() => {
        axios.get("https://provinces.open-api.vn/api/").then((res) => {
            setProvince(res.data);
        });
    }, []);

    return (
        <div className="sticky top-24">
            <div>
                <div className="bg-yellow-300 text-center uppercase font-bold text-2xl py-2 mb-5 text-red-600">
                    ĐĂNG KÝ NHANH
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <div>
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
                                    onChange={(e) =>
                                        handleClickProvince(e.target.value)
                                    }
                                >
                                    <option value=""> Tỉnh/Thành</option>
                                    {province?.map((item: any, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={item.code}
                                            >
                                                {item?.name}
                                            </option>
                                        );
                                    })}
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
                                >
                                    <option value=""> Quận/Huyện</option>
                                    {districts?.map((item: any, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={item.name}
                                            >
                                                {item?.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="pb-6">
                                <label
                                    htmlFor="province"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Địa chỉ{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    {...register("address")}
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-amber-600 hover:bg-amber-700 duration-150s focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-10 py-2.5 text-center block mx-auto"
                    >
                        Xác nhận
                    </button>
                </form>
            </div>
            <div className="mt-5">
                <div className="ml-2">
                    <div className="mb-2">
                        <h5 className="uppercase text-base">
                            GIẢI NGÂN bằng CÀ-VẸT XE MÁY
                        </h5>
                        <ul className="list-disc ml-5">
                            <li>Không giữ, tài sản vẫn được sử dụng</li>
                            <li>Giải ngân lên đến 100 triệu</li>
                            <li>Có tiền trong 05 phút</li>
                            <li>Không thu phí dịch vụ</li>
                        </ul>
                    </div>
                    <div className="mb-2">
                        <h5 className="uppercase text-base">
                            GIẢI NGÂN bằng CÀ VẸT XE Ô-TÔ
                        </h5>
                        <ul className="list-disc ml-5">
                            <li>Không giữ, tài sản vẫn được sử dụng</li>
                            <li>Giải ngân lên đến 2 tỉ</li>
                            <li>Có tiền trong 05 phút</li>
                            <li>Không thu phí dịch vụ</li>
                        </ul>
                    </div>
                    <div className="mb-2">
                        <h5 className="uppercase text-base">
                            GIẢI NGÂN bằng BẤT ĐỘNG SẢN
                        </h5>
                        <ul className="list-disc ml-5">
                            <li>Không giữ, tài sản vẫn được sử dụng</li>
                            <li>Giải ngân lên đến 5 tỉ</li>
                            <li>Có tiền trong 05 phút</li>
                            <li>Không thu phí dịch vụ</li>
                        </ul>
                    </div>
                    <div className="mb-2">
                        <h5 className="uppercase text-base">
                            GIẢI NGÂN bằng TÀI SẢN KHÁC
                        </h5>
                        <ul className="list-disc ml-5">
                            <li>Không giữ, tài sản vẫn được sử dụng</li>
                            <li>Giải ngân từ 3 triệu đến 1 tỉ</li>
                            <li>Có tiền trong 05 phút</li>
                            <li>Không thu phí dịch vụ</li>
                        </ul>
                    </div>
                    <div className="mb-2">
                        <h5 className="uppercase text-base">
                            MUA BÁN, CHO THUÊ XE MÁY, Ô-TÔ, BẤT ĐỘNG SẢN
                        </h5>
                        <ul className="list-disc ml-5">
                            <li>Linh động đáp ứng nhu cầu</li>
                            <li>Mua bán với giá thị trường</li>
                            <li>Có tiền trong 05 phút</li>
                            <li>Không thu phí dịch vụ</li>
                        </ul>
                    </div>
                    <div className="mb-2">
                        <h5 className="uppercase text-base">
                            GIẢI NGÂN bằng TÀI SẢN KHÁC
                        </h5>
                        <ul className="list-disc ml-5">
                            <li>Không giữ, tài sản vẫn được sử dụng</li>
                            <li>Giải ngân từ 3 triệu đến 1 tỉ</li>
                            <li>Có tiền trong 05 phút</li>
                            <li>Không thu phí dịch vụ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormServices;
