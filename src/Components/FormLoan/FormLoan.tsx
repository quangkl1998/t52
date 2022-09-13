import React from "react";

const FormLoan = () => {
    return (
        <div className="container mx-auto px-16">
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
                <form>
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
                                    type="text"
                                    id="phone"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Nhập số điện thoại"
                                    required
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
                                    id="asset-filter"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option selected>Bạn muốn vay bằng</option>
                                    <option value="US">Đăng ký xe máy</option>
                                    <option value="CA">Đăng ký ô tô</option>
                                    <option value="FR">Ô tô</option>
                                    <option value="DE">Xe máy</option>
                                    <option value="DE">Tài sản khác</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <h4 className="uppercase font-bold text-xl text-amber-700 my-5">
                                CHỌN PHÒNG GIAO DỊCH GẦN BẠN
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
                                    id="asset-filter"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option selected>Tỉnh/Thành</option>
                                    <option value="US">Hà Nội</option>
                                    <option value="CA">Đà Nẵng</option>
                                    <option value="FR">Bình Dương</option>
                                    <option value="DE">Tp. Hồ Chí Minh</option>
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
                                    id="asset-filter"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option selected>Quận/Huyện</option>
                                    <option value="US">Hà Nội</option>
                                    <option value="CA">Đà Nẵng</option>
                                    <option value="FR">Bình Dương</option>
                                    <option value="DE">Tp. Hồ Chí Minh</option>
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
                                    id="asset-filter"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option selected>Cửa hàng</option>
                                    <option value="US">Hà Nội</option>
                                    <option value="CA">Đà Nẵng</option>
                                    <option value="FR">Bình Dương</option>
                                    <option value="DE">Tp. Hồ Chí Minh</option>
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
