import { NavLink } from "react-router-dom";
import { data } from "Utill/VideoData";

const Story = () => {
    return (
        <div className="bg-gray-100 pb-5">
            <div className="container mx-auto px-5 lg:px-16">
                <div className="flex justify-between items-end border-b-2 border-b-red-500 mb-5">
                    <NavLink
                        to=""
                        className="block bg-red-500 p-3 text-white hover:text-yellow-400 duration-150 font-semibold text-lg rounded-t-xl"
                    >
                        CÂU CHUYỆN T52
                    </NavLink>
                    <NavLink
                        to=""
                        className="uppercase text-gray-600 hover:text-yellow-600 duration-150 mr-2"
                    >
                        xem thêm <i className="fa fa-angle-right" />
                    </NavLink>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((tt, index) => {
                        return (
                            <div
                                key={index}
                                className="rounded-lg bg-white shadow overflow-hidden hover:shadow-xl duration-150"
                            >
                                <video
                                    controls
                                    poster={tt.poster}
                                    className="h-52 object-cover w-full"
                                >
                                    <source src={tt.video} />
                                </video>
                                <div className="p-3 font-bold text-lg h-16 overflow-hidden text-ellipsis mb-2">
                                    {tt.name}
                                </div>
                                <div className="px-5 pb-5 text-gray-500">
                                    {tt.createDay}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Story;
