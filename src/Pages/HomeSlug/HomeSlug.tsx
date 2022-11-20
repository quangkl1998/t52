import { AppDispatch, RootState } from "configStore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailMenu } from "Slices/menu";

const HomeSlug = () => {
    const { slug } = useParams();
    const { detail } = useSelector((state: RootState) => state.menu);
    // console.log(listIntroduce);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (slug) dispatch(getDetailMenu({ slugMenu: slug }));
    }, [slug]);

    return (
        <div className="bg-gray-100">
            <div className="lg:h-36 h-28"></div>
            <div
                dangerouslySetInnerHTML={{
                    __html: detail?.rows?.[0]?.content,
                }}
            />
        </div>
    );
};

export default HomeSlug;
