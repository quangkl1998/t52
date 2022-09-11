import React, { useState } from "react";

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <div>
            <div className=" bg-green-600 border-b-4 border-solid border-yellow-400">
                <div className="container mx-auto">
                    <div className="flex justify-end px-3 py-4">
                        <div className="">
                            <a
                                href=""
                                className="px-4 border-r font-semibold text-gray-300 hover:text-white duration-100 text-lg"
                            >
                                Về T52
                            </a>
                            <a
                                href=""
                                className="px-4 border-r font-semibold text-gray-300 hover:text-white duration-100 text-lg"
                            >
                                Quan hệ Nhà đầu tư
                            </a>
                            <a
                                href=""
                                className="px-4 border-r font-semibold text-gray-300 hover:text-white duration-100 text-lg"
                            >
                                Tin tức
                            </a>
                            <a
                                href=""
                                className="px-4 border-r font-semibold text-gray-300 hover:text-white duration-100 text-lg"
                            >
                                Cửa hàng gần bạn
                            </a>
                            <a
                                href=""
                                className="px-4 font-semibold text-gray-300 hover:text-white duration-100 text-lg"
                            >
                                Kiến thức tài chính
                            </a>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
