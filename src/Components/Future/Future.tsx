import React, { useEffect } from "react";
import chienluocimg from "Assets/img/T52/6a_chien_luoc_phat_trien_(ZALO).png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { getFutureList } from "Slices/future";
const Future = () => {
    const { list: listFuture } = useSelector(
        (state: RootState) => state.corevalue,
    );
    console.log(listFuture);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getFutureList());
    }, []);

    return (
        <div className="mt-8">
            <div className="container mx-auto  px-5 lg:px-16">
                <div className="p-5 bg-white rounded-lg">
                    <h2 className=" text-red-600 md:text-3xl font-bold text-2xl mb-0 md:mb-3 md:leading-6     ">
                        Trong tương lai
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2  mt-5">
                        <div className="p-8 text-gray-500 leading-loose tracking-wide">
                            <ul>
                                <li>
                                    <span className="text-red-600 font-bold text-xl">
                                        Mục tiêu:{" "}
                                    </span>{" "}
                                    Xây dựng được 9 chi nhánh tại TP.Huế trong
                                    năm 2022 này, và trong tháng 5/2022 chúng
                                    tôi đã khai trương và đi vào hoạt động 3 Chi
                                    nhánh ở số 1191 Nguyễn Tất Thành, số 28 Cách
                                    mạng tháng 8, số 111 Nguyễn Tất Thành,
                                    TP.Huế.
                                </li>
                                <li>
                                    <span className="text-red-600 font-bold text-xl">
                                        Về tầm nhìn:{" "}
                                    </span>
                                    Chúng tôi quyết tâm trở thành Công ty Việt
                                    Nam đi đầu trong kinh doanh TM-DV đa ngành
                                    với hệ sinh thái lấy hoạt động tài chính làm
                                    chủ đạo tại Việt Nam.
                                </li>
                                <li>
                                    <span className="text-red-600 font-bold text-xl">
                                        Về sứ mệnh:{" "}
                                    </span>
                                    Như đã trình bày ở trên, chúng tôi ra đời để
                                    cung cấp giải pháp tài chính cá nhân cho
                                    những đối tượng không thể hoặc khó tiếp cận
                                    với nguồn tài chánh từ ngân hàng.
                                </li>
                            </ul>
                        </div>
                        <img
                            src={chienluocimg}
                            alt="tamnhinchienluoc"
                            className="rounded-lg lg:rounded-b-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Future;
