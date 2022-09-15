import { Collapse } from "antd";
const { Panel } = Collapse;

const Questions = () => {
    return (
        <div className="mt-5 pb-5">
            <div className="container mx-auto px-5 lg:px-16">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5 border">
                    <div className="border-b pb-3 mb-3">
                        <h4 className="uppercase font-bold text-xl text-amber-700 my-3">
                            THÔNG TIN
                        </h4>
                    </div>
                    <div className="lg:px-5">
                        <Collapse ghost expandIconPosition="end">
                            <Panel
                                header={
                                    <div className="font-bold text-lg border-b ml-2 pb-2">
                                        T52 là gì? Sao gọi là Hệ thống?
                                    </div>
                                }
                                key="1"
                            >
                                <div className="font-normal text-base tracking-wide leading-7">
                                    <div>
                                        <span className="font-bold">T52</span>{" "}
                                        là các Chi nhánh trực thuộc{" "}
                                        <span className="font-bold">
                                            Công ty TNHH TM Dịch vụ Tài chính
                                            THẮNG LỢI
                                        </span>
                                        . Nhằm cung cấp{" "}
                                        <span className="font-bold">
                                            GIẢI PHÁP TÀI CHÍNH CÁ NHÂN
                                        </span>{" "}
                                        nên{" "}
                                        <span className="font-bold">T52</span>{" "}
                                        tập trung phát triển các dịch vụ tài
                                        chính sau:
                                    </div>
                                    <ul className="list-disc ml-10">
                                        <li>
                                            Hỗ trợ tài chính tiêu dùng cá nhân
                                        </li>
                                        <li>Hỗ trợ vốn kinh doanh</li>
                                        <li>Hỗ trợ trả nợ xấu</li>
                                        <li>
                                            Mua bán xe máy, ô tô, bất động sản…
                                        </li>
                                    </ul>
                                    <div>
                                        Điều kiện giải ngân và dịch vụ tại{" "}
                                        <span className="font-bold">T52</span>:
                                    </div>
                                    <ul className="list-disc ml-10">
                                        <li>
                                            Giải ngân lên đến 85% giá trị tài
                                            sản
                                        </li>
                                        <li>
                                            Chỉ cần cà vẹt hoặc giấy tờ chính
                                            chủ
                                        </li>
                                        <li>
                                            Khách hàng sẽ được tư vấn gói giải
                                            ngân theo yêu cầu
                                        </li>
                                        <li>
                                            Nhận được tiền mặt ngay sau 05 phút
                                        </li>
                                        <li>
                                            Thủ tục nhanh gọn, chuyên nghiệp
                                        </li>
                                        <li>
                                            Linh hoạt cho từng khách hàng cụ
                                            thể.
                                        </li>
                                    </ul>
                                    <div>
                                        <span className="font-bold">
                                            Hệ thống T52 TIỀN NHANH
                                        </span>{" "}
                                        chắc chắn sẽ đem đến cho bạn thêm một sự
                                        lựa chọn nữa giúp bạn giải quyết nhu cầu
                                        tài chính cá nhân của mình.
                                    </div>
                                    <div>
                                        Cần{" "}
                                        <span className="font-bold">TIỀN</span>{" "}
                                        gọi{" "}
                                        <span className="font-bold">NHANH</span>{" "}
                                        <span className="font-bold">
                                            0775 75 7777
                                        </span>
                                    </div>
                                    <div>
                                        Hoặc truy cập vào website{" "}
                                        <span className="font-bold">
                                            T52tiennhanh.com
                                        </span>{" "}
                                        để tìm hiểu và biết thêm chi tiết.
                                    </div>
                                </div>
                            </Panel>
                            <Panel
                                header={
                                    <div className="font-bold text-lg border-b ml-2 pb-2">
                                        Hệ thống T52 Tiền nhanh kinh doanh sản
                                        phẩm gì?
                                    </div>
                                }
                                key="2"
                            >
                                <div className="font-normal text-base tracking-wide leading-relaxed">
                                    <div>
                                        <span className="font-bold">
                                            Hệ thống T52 Tiền nhanh
                                        </span>{" "}
                                        ra đời mục tiêu chính là chia sẻ và giải
                                        quyết nhanh nhất nhu cầu tài chính cá
                                        nhân mà vẫn duy trì được mọi sinh hoạt
                                        thường nhật của họ, giúp họ tháo gỡ được
                                        nút thắt khó khăn về tài chính.
                                    </div>
                                    <div>
                                        Cụ thể{" "}
                                        <span className="font-bold">
                                            Hệ thống T52 Tiền nhanh
                                        </span>{" "}
                                        có những sản phẩm dịch vụ sau:
                                    </div>
                                    <ul className="list-disc ml-10">
                                        <li>
                                            <span className="font-bold">
                                                Giải ngân tiền mặt:
                                            </span>{" "}
                                            Chỉ cần chính chủ đến giao dịch với
                                            cà vẹt xe máy, ô tô, bất động sản
                                            giấy tờ hợp pháp và các tài sản
                                            khác, quý khách hàng sẽ được tư vấn
                                            và nhận ngay số tiền mình mong muốn
                                            lên đến 85% giá trị tài sản!
                                        </li>
                                        <li>
                                            <span className="font-bold">
                                                Mua bán xe máy/ô tô:
                                            </span>{" "}
                                            Thẩm định giá cao khi mua, khi bán
                                            thì với giá cạnh tranh tất cả các
                                            loại xe máy, ô tô mà quý khách hàng
                                            cần giao dịch.
                                        </li>
                                        <li>
                                            <span className="font-bold">
                                                Hỗ trợ tài chính mua xe máy:
                                            </span>{" "}
                                            Quý khách hàng muốn sở hữu một chiếc
                                            xe máy vượt quá số tiền đang có của
                                            mình? T52 sẽ biến ước muốn của khách
                                            hàng thành hiện thực trong vòng 5
                                            phút!
                                        </li>
                                        <li>
                                            <span className="font-bold">
                                                Ký gửi bất động sản:
                                            </span>{" "}
                                            Tại đây nhận ký gửi các loại bất
                                            động sản mà quý khách hàng muốn giao
                                            dịch. Lợi thế của Hệ thống T52 là hệ
                                            sinh thái kinh doanh đa dạng nên
                                            lượng khách hàng giao dịch cũng rất
                                            nhiều và đa dạng.
                                        </li>
                                    </ul>
                                    <div>
                                        <span className="font-bold">
                                            Thanh toán các dịch vụ tiện ích:
                                        </span>{" "}
                                        Đây là định hướng phát triển Hệ thống
                                        T52 theo xu hướng hiện đại hướng tới sự
                                        tiện ích, thuận lợi cho quý khách hàng
                                        đến giao dịch. Hệ thống T52 nhận thanh
                                        toán hóa đơn điện, nước; nạp tiền ví
                                        điện tử, nạp thẻ điện thoại, thẻ game;
                                        điểm bán bảo hiểm…
                                    </div>
                                </div>
                            </Panel>
                            <Panel
                                header={
                                    <div className="font-bold text-lg border-b ml-2 pb-2">
                                        Thương hiệu TỊNH THẮNG, tiền thân Hệ
                                        thống T52 TIỀN NHANH
                                    </div>
                                }
                                key="3"
                            >
                                <div className="font-normal text-base tracking-wide leading-relaxed">
                                    <div>
                                        Tại Thành phố Huế, chắc hẳn rất nhiều
                                        người biết đến thương hiệu{" "}
                                        <span className="font-bold">
                                            TỊNH THẮNG
                                        </span>
                                        , một cơ sở kinh doanh tài chính khá lâu
                                        đời! Đây chính là tiền thân của{" "}
                                        <span className="font-bold">
                                            Hệ thống T52 TIỀN NHANH
                                        </span>
                                        !
                                    </div>
                                    <div>
                                        Giải pháp tài chính cá nhân được tối ưu
                                        hóa tại{" "}
                                        <span className="font-bold">
                                            Hệ thống T52
                                        </span>{" "}
                                        chính là các sản phẩm dịch vụ và những
                                        tiện ích:
                                    </div>
                                    <ul className="list-disc ml-10">
                                        <li>
                                            Tại đây khách hàng sẽ được giải ngân
                                            nhanh chóng số tiền mặt lên đến 85%
                                            giá trị tài sản, chỉ cần chính chủ
                                            đến giao dịch với cà vẹt xe máy, ô
                                            tô, giấy tờ hợp pháp bất động sản
                                            hoặc các tài sản khác.
                                        </li>
                                        <li>
                                            Điểm sáng tạo là{" "}
                                            <span className="font-bold">
                                                T52
                                            </span>{" "}
                                            không giữ tài sản của khách hàng,
                                            khách hàng vẫn giữ và sử dụng tài
                                            sản cho sinh hoạt thường nhật.
                                        </li>
                                        <li>
                                            Điều đáng nói ở đây là{" "}
                                            <span className="font-bold">
                                                Hệ thống T52 TIỀN NHANH
                                            </span>
                                            cam kết bảo mật thông tin cá nhân và
                                            tuyệt đối không làm phiền người thân
                                            của khách hàng trong suốt quá trình
                                            giao dịch.
                                        </li>
                                    </ul>
                                    <div>
                                        Đến với{" "}
                                        <span className="font-bold">
                                            Hệ thống T52 TIỀN NHANH
                                        </span>
                                        , bạn sẽ:
                                        <ul className="list-disc ml-10">
                                            <li>
                                                An toàn và yên tâm trong suốt
                                                quá trình giao dịch
                                            </li>
                                            <li>
                                                Vừa có tiền vừa có phương tiện
                                                sinh hoạt
                                            </li>
                                            <li>
                                                Nhanh chóng có khoản tiền mặt
                                                mình muốn
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Panel>
                            <Panel
                                header={
                                    <div className="font-bold text-lg border-b ml-2 pb-2">
                                        Tầm nhìn, Sứ mệnh, Giá trị cốt lõi Hệ
                                        thống T52
                                    </div>
                                }
                                key="4"
                            >
                                <div className="font-normal text-base tracking-wide leading-relaxed">
                                    <div>
                                        Với niềm đam mê và nhiệt huyết của sức
                                        trẻ,{" "}
                                        <span className="font-bold">
                                            Công ty TNHH TM Dịch vụ Tài chính
                                            THẮNG LỢI
                                        </span>{" "}
                                        cùng các Chi nhánh thuộc{" "}
                                        <span className="font-bold">
                                            Hệ thống T52 TIỀN NHANH
                                        </span>{" "}
                                        quyết tâm xây dựng Tầm nhì, Sứ mệnh, Giá
                                        trị cốt lõi
                                    </div>
                                    <div>
                                        <span className="font-bold">
                                            Tầm nhìn:
                                        </span>{" "}
                                        Quyết tâm trở thành{" "}
                                        <span className="font-bold">
                                            Công ty Việt Nam đi đầu kinh doanh
                                            TM-DV
                                        </span>{" "}
                                        đa ngành với hệ sinh thái lấy hoạt động
                                        tài chính làm chủ đạo tại Việt Nam.
                                    </div>
                                    <div>
                                        <span className="font-bold">
                                            Sứ mệnh:
                                        </span>{" "}
                                        Cung cấp giải pháp tài chính cá nhân cho
                                        những đối tượng không thể hoặc khó tiếp
                                        cận với nguồn tài chánh từ ngân hàng.
                                    </div>
                                    <div>Giá trị cốt lõi:</div>
                                    <ul className="list-disc ml-10">
                                        <li>
                                            <span className="font-bold italic text-sm">
                                                THẤU HIỂU:
                                            </span>{" "}
                                            hiểu rõ nhu cầu và nỗi trăn trỡ của
                                            khách hàng
                                        </li>
                                        <li>
                                            <span className="font-bold italic text-sm">
                                                CHIA SẺ:
                                            </span>{" "}
                                            cung cấp giải pháp phù hợp với từng
                                            khách hàng
                                        </li>
                                        <li>
                                            <span className="font-bold italic text-sm">
                                                PHỤC VỤ:
                                            </span>{" "}
                                            khách hàng được phục vụ tận tâm với
                                            dịch vụ tốt nhất
                                        </li>
                                    </ul>
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
