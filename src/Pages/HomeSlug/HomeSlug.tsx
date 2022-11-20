import FormServices from "Components/FormServices/FormServices";
import { AppDispatch, RootState } from "configStore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailMenu } from "Slices/menu";

const HomeSlug = () => {
    const { slug } = useParams();
    const { detail } = useSelector((state: RootState) => state.menu);
    console.log(detail);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (slug) dispatch(getDetailMenu({ slugMenu: slug }));
    }, [slug]);

    return (
        <div className="bg-gray-100">
            <div className="lg:h-36 h-28"></div>
            <div className="container mx-auto px-10">
                <div className="flex gap-10">
                    <div className="w-full lg:w-3/4">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: detail[0]?.content,
                            }}
                        />
                    </div>
                    <div className="hidden lg:block lg:w-1/4">
                        <FormServices />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSlug;
