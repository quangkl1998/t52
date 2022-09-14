import DetailNew from "Components/DetailNew/DetailNew";
import FormServices from "Components/FormServices/FormServices";
import React from "react";

const NewsDetail = () => {
    return (
        <div className="">
            <div className="lg:h-36 h-24"></div>
            <div className="container mx-auto px-10">
                <div className="flex">
                    <div className="w-3/4">
                        <DetailNew />
                    </div>
                    <div className="w-1/4">
                        <FormServices />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
