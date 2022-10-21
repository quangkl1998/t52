import DetailNew from "Components/DetailNew/DetailNew";
import FormServices from "Components/FormServices/FormServices";
import NewRelated from "Components/NewRelated/NewRelated";
import Questions from "Components/Questions/Questions";
import { RootState } from "configStore";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const NewsDetail = () => {
    // const { newsDetail, isLoading, error } = useSelector(
    //     (state: RootState) => state.news,
    // );

    const { id } = useParams();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [id]);

    return (
        <div className="">
            <div className="lg:h-36 h-20"></div>
            <div className="container mx-auto px-10">
                <div className="flex">
                    <div className="w-full lg:w-3/4">
                        <DetailNew />
                    </div>
                    <div className="hidden lg:block lg:w-1/4">
                        <FormServices />
                    </div>
                </div>
            </div>
            <NewRelated />
            <Questions />
        </div>
    );
};

export default NewsDetail;
