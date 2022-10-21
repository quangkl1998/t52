import { RootState } from "configStore";
import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

const DetailNew = () => {
    const { newsDetail } = useSelector((state: RootState) => state.news);
    console.log(newsDetail);

    return (
        <div>
            {newsDetail ? (
                <div className="mt-10">
                    <h1 className="text-3xl mb-4">{newsDetail?.name}</h1>
                    {newsDetail?.descript}
                    {parse(newsDetail?.content)}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default DetailNew;
