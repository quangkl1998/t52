import { data } from "./NewData";

const Outstanding = () => {
    return (
        <div className="bg-gray-100">
            <h1 className="text-center p-5 font-bold text-2xl">Nổi bật</h1>
            <div className="flex ">
                {data.map((news, index) => {
                    if (index === 0) {
                        return (
                            <div key={index} className="">
                                <div>
                                    <img src={news.avatar} alt="" />
                                </div>
                                <div>{news.name}</div>
                                <div>{news.createDay}</div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} className="">
                                <div>
                                    <img src={news.avatar} alt="" />
                                </div>
                                <div>{news.name}</div>
                                <div>{news.createDay}</div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Outstanding;
