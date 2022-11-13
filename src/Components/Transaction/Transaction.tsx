import { Radio, Tabs } from "antd";
import "Components/Transaction/Location.css";
import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { findByName, getDistrict, getProvince, getStores } from "Slices/store";
import { FieldErrors, useForm } from "react-hook-form";

const Transaction = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, //liệt kê các input đang lỗi
    } = useForm({
        //defaultValues khai báo giá trị mặc định cho các input trong form
        defaultValues: {
            name: "",
            provinceId: "",
            districtId: "",
        },
        //mode: cacash validation đc trigger (defaute là submit)
        mode: "onTouched",
    });
    const onSubmit = (values: any) => {
        console.log(values);
        dispatch(findByName(values.name));
        //
    };
    const onError = (values: FieldErrors<any>) => {
        console.log(values);
    };

    const { listStore, listProvince, listDistrict, isLoading, error } =
        useSelector((state: RootState) => state.stores);

    const [provinceId, setProvinceId] = useState<any>("");
    const [districtId, setDistrictId] = useState<any>("");
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getStores({ provinceId: null, districtId: null }));
        dispatch(getProvince(null));
    }, []);

    let items = [];

    if (listStore) {
        items = listStore?.map((store: any, index: number) => {
            // console.log(store?.idMap);
            // const addressMap = parse(store?.idMap);
            return {
                key: index,
                label: (
                    <div className="whitespace-normal text-left font-semibold text-base border-b p-2">
                        <div className="mb-2">{store?.name}</div>
                        <div>
                            <i className="fa fa-map-marker-alt mr-2" />
                            {store?.street} , {store?.district?.name} ,{" "}
                            {store?.district?.province?.name}
                        </div>
                        <div>
                            <i className="fa fa-phone mr-2" />0{store?.phone}
                        </div>
                    </div>
                ),
                children: (
                    <iframe
                        src={store?.idMap}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                ),
            };
        });
    }

    return (
        <div className="bg-gray-100 pt-10">
            <div className="container mx-auto px-5 lg:px-16 pb-10">
                <div className="text-center py-5">
                    <h1 className=" font-bold text-3xl text-red-600">
                        HỆ THỐNG TIỀN NHANH T52
                    </h1>
                    <h3 className="font-bold text-lg text-yellow-600">
                        GIẢI PHÁP TÀI CHÍNH CÁ NHÂN
                    </h3>
                </div>

                <form
                    className="pb-6 flex flex-row flex-wrap mx-auto justify-center"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="min-w-64 w-1/4 pr-2">
                        <select
                            {...register("provinceId")}
                            id="asset-filter"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            defaultValue=""
                            onChange={(e) => {
                                setProvinceId(e.target.value);
                                dispatch(
                                    getStores({
                                        provinceId: e.target.value,
                                    }),
                                );
                                dispatch(
                                    getDistrict({
                                        provinceId: e.target.value,
                                    }),
                                );
                            }}
                        >
                            <option value="">Tỉnh/Thành</option>
                            {listProvince?.map((item: any) => {
                                return (
                                    <option value={item?.id} key={item?.id}>
                                        {item?.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="min-w-64 w-1/4 pr-2">
                        <select
                            {...register("districtId")}
                            id="asset-filter"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            defaultValue=""
                            onChange={(e) => {
                                dispatch(
                                    getStores({
                                        districtId: e.target.value,
                                        provinceId,
                                    }),
                                );
                            }}
                        >
                            <option value="">Chọn Quận/Huyện</option>
                            {listDistrict?.map((item: any) => {
                                return (
                                    <option value={item?.id} key={item?.id}>
                                        {item?.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="min-w-64 w-1/4 pr-2">
                        <input
                            {...register("name")}
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nhập địa chỉ cần tìm kiếm"
                        />
                    </div>
                    <div className="min-w-64 w-1/4 pl-2">
                        <button
                            type="submit"
                            className="text-white bg-amber-600 hover:bg-amber-700 duration-150s focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-10 py-2.5 text-center block mx-auto"
                        >
                            Tìm kiếm
                        </button>
                    </div>
                </form>

                <div className="lg:p-5 p-2 bg-white rounded-xl">
                    <Tabs
                        className="myLocation flex lg:flex-row flex-col lg:h-96 h-auto"
                        defaultActiveKey="1"
                        tabPosition="left"
                        items={items}
                    />
                </div>
            </div>
        </div>
    );
};

export default Transaction;
