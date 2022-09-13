import { data } from "./NewData";

const Outstanding = () => {
    return (
        <div className="bg-gray-100 py-5">
            <div className="container mx-auto px-10">
                <h1 className="text-center p-5 font-bold text-2xl">Nổi bật</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-8">
                    {data.map((news, index) => {
                        if (index === 0) {
                            return (
                                <div
                                    key={index}
                                    className="w-full bg-white rounded-xl overflow-hidden hover:text-amber-500 hover:shadow-md duration-150 cursor-pointer"
                                >
                                    <img
                                        className="w-full"
                                        src={news.avatar}
                                        alt=""
                                    />
                                    <div className="p-5 font-bold text-xl ">
                                        {news.name}
                                    </div>
                                    <div className="px-5 pb-5 text-gray-500">
                                        {news.createDay}
                                    </div>
                                </div>
                            );
                        }
                    })}
                    <div className="flex flex-col">
                        {data.map((news, index) => {
                            if (index === 0) {
                                return;
                            } else {
                                return (
                                    <div
                                        key={index}
                                        className="flex mb-5 rounded-xl bg-white overflow-hidden hover:text-amber-500 hover:shadow-md duration-150 cursor-pointer"
                                    >
                                        <img
                                            className="w-5/12"
                                            src={news.avatar}
                                            alt=""
                                        />
                                        <div>
                                            <div className="p-5 font-bold text-xl">
                                                {news.name}
                                            </div>
                                            <div className="px-5 pb-5 text-gray-500">
                                                {news.createDay}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Outstanding;
