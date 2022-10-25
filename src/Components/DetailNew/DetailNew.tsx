import { RootState } from "configStore";
import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { NavLink } from "react-router-dom";

const DetailNew = () => {
    const { newsDetail } = useSelector((state: RootState) => state.news);
    // console.log(newsDetail);

    return (
        <div className="p-3">
            {newsDetail ? (
                <div className="mt-10">
                    <h1 className="text-3xl mb-4">{newsDetail?.name}</h1>
                    {newsDetail?.descript}
                    {parse(newsDetail?.content)}
                    <div className="py-5 flex gap-3 text-base">
                        <p>Thể loại: </p>
                        <NavLink
                            to="/tin-tuc-hoat-dong"
                            className="underline text-yellow-800 hover:text-yellow-600 cursor-pointer"
                        >
                            {newsDetail?.type}
                        </NavLink>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default DetailNew;
