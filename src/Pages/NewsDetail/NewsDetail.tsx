import DetailNew from "Components/DetailNew/DetailNew";
import FormServices from "Components/FormServices/FormServices";
import NewRelated from "Components/NewRelated/NewRelated";
import Questions from "Components/Questions/Questions";
import { AppDispatch, RootState } from "configStore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getNewDetail } from "Slices/news";

const NewsDetail = () => {
    const { name } = useParams();

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getNewDetail(name || ""));
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });

    return (
        <div className="">
            <div className="lg:h-36 h-20"></div>
            <div className="container mx-auto px-10">
                <div className="flex gap-10">
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
