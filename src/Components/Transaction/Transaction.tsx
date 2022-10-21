import { Radio, Tabs } from "antd";
import "Components/Transaction/Location.css";
import { RootState } from "configStore";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

const Transaction = () => {
    const { listStore, isLoading, error } = useSelector(
        (state: RootState) => state.stores,
    );
    let items = [];

    if (listStore) {
        items = listStore.map((store: any, index: number) => {
            console.log(store?.idMap);
            // const addressMap = parse(store?.idMap);
            return {
                key: index,
                label: (
                    <div className="whitespace-normal text-left font-semibold text-base border-b p-2">
                        <div className="mb-2">{store?.address?.name}</div>
                        <div>
                            <i className="fa fa-map-marker-alt mr-2" />
                            {store?.address?.name} , {store?.address?.district}{" "}
                            , {store?.address?.province}
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
    console.log(items);

    // const items = [
    //     {
    //         label: (
    //             <div className="whitespace-normal	text-left font-semibold text-base">
    //                 <div>160 Phan Bội Châu</div>
    //                 <div>
    //                     <i className="fa fa-map-marker-alt" />
    //                     160 Phan Bội Châu, Trường An, Thành phố Huế, Thừa Thiên
    //                     Huế 49016
    //                 </div>
    //                 <div>
    //                     <i className="fa fa-phone" />
    //                     0775757777
    //                 </div>
    //             </div>
    //         ),
    //         key: "1",

    //         children: (
    //             <iframe
    //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5411.499766942797!2d107.58170088366934!3d16.449786134838813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x766948a0d907fb3c!2zSOG7hiBUSOG7kE5HIFQ1Mg!5e0!3m2!1svi!2s!4v1663219227155!5m2!1svi!2s"
    //                 width="100%"
    //                 height="380px"
    //                 style={{ border: 0 }}
    //                 allowFullScreen
    //                 loading="lazy"
    //                 referrerPolicy="no-referrer-when-downgrade"
    //             />
    //         ),
    //     },
    //     {
    //         label: (
    //             <div className="whitespace-normal	text-left font-semibold text-base">
    //                 <div>28 Cách Mạng Tháng Tám</div>
    //                 <div>
    //                     <i className="fa fa-map-marker-alt" />
    //                     28 Cách Mạng Tháng Tám, Tứ Hạ, Hương Trà, Thừa Thiên Huế
    //                     49016
    //                 </div>
    //                 <div>
    //                     <i className="fa fa-phone" />
    //                     0358679752
    //                 </div>
    //             </div>
    //         ),
    //         key: "2",

    //         children: (
    //             <iframe
    //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.070212773046!2d107.4793555!3d16.522552599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb365bedbba9082eb!2zSOG7hiBUSOG7kE5HIFQ1Mg!5e0!3m2!1svi!2s!4v1663219314938!5m2!1svi!2s"
    //                 width="100%"
    //                 height="380px"
    //                 style={{ border: 0 }}
    //                 allowFullScreen
    //                 loading="lazy"
    //                 referrerPolicy="no-referrer-when-downgrade"
    //             />
    //         ),
    //     },
    //     {
    //         label: (
    //             <div className="whitespace-normal	text-left font-semibold text-base">
    //                 <div>1191 Nguyễn Tất Thành</div>
    //                 <div>
    //                     <i className="fa fa-map-marker-alt" />
    //                     1191 Nguyễn Tất Thành, TT. Phú Bài, Hương Thủy, Thừa
    //                     Thiên Huế 49016
    //                 </div>
    //                 <div>
    //                     <i className="fa fa-phone" />
    //                     0935931317
    //                 </div>
    //             </div>
    //         ),
    //         key: "3",

    //         children: (
    //             <iframe
    //                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3827.2973737405555!2d107.6751664!3d16.4097168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe897275bc358c187!2zSOG7hiBUSOG7kE5HIFQ1Mg!5e0!3m2!1svi!2s!4v1663219370988!5m2!1svi!2s"
    //                 width="100%"
    //                 height="380px"
    //                 style={{ border: 0 }}
    //                 allowFullScreen
    //                 loading="lazy"
    //                 referrerPolicy="no-referrer-when-downgrade"
    //             />
    //         ),
    //     },
    //     {
    //         label: (
    //             <div className="whitespace-normal	text-left font-semibold text-base">
    //                 <div>111 Nguyễn Tất Thành</div>
    //                 <div>
    //                     <i className="fa fa-map-marker-alt" />
    //                     111 Nguyễn Tất Thành, Phường, Hương Thủy, Thừa Thiên Huế
    //                     49016
    //                 </div>
    //                 <div>
    //                     <i className="fa fa-phone" />
    //                     0775757777
    //                 </div>
    //             </div>
    //         ),
    //         key: "4",

    //         children: (
    //             <iframe
    //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.608093439696!2d107.6144841!3d16.444718599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3f06626796356ad!2zSOG7hiBUSOG7kE5HIFQ1Mg!5e0!3m2!1svi!2s!4v1663219421907!5m2!1svi!2s"
    //                 width="100%"
    //                 height="380px"
    //                 style={{ border: 0 }}
    //                 allowFullScreen
    //                 loading="lazy"
    //                 referrerPolicy="no-referrer-when-downgrade"
    //             />
    //         ),
    //     },
    //     {
    //         label: (
    //             <div className="whitespace-normal	text-left font-semibold text-base">
    //                 <div>235 Huỳnh Thúc Kháng</div>
    //                 <div>
    //                     <i className="fa fa-map-marker-alt" />
    //                     235 Huỳnh Thúc Kháng, Phú Bình, Thành phố Huế, Thừa
    //                     Thiên Huế
    //                 </div>
    //                 <div>
    //                     <i className="fa fa-phone" />
    //                     0775757777
    //                 </div>
    //             </div>
    //         ),
    //         key: "5",

    //         children: (
    //             <iframe
    //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.925108757686!2d107.58444190000002!3d16.4793294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a1285e36fc7d%3A0xab9e0f0c37284a87!2zMjM1IEh14buzbmggVGjDumMgS2jDoW5nLCBQaMO6IELDrG5oLCBUaMOgbmggcGjhu5EgSHXhur8sIFRo4burYSBUaGnDqm4gSHXhur8!5e0!3m2!1svi!2s!4v1663219474328!5m2!1svi!2s"
    //                 width="100%"
    //                 height="380px"
    //                 style={{ border: 0 }}
    //                 allowFullScreen
    //                 loading="lazy"
    //                 referrerPolicy="no-referrer-when-downgrade"
    //             />
    //         ),
    //     },
    // ];
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
