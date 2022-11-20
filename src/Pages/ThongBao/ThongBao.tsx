import { AppDispatch, RootState } from "configStore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailMenu } from "Slices/menu";

const ThongBao = () => {
    const { menuslug, subslug } = useParams();

    const { detail } = useSelector((state: RootState) => state.menu);
    // console.log(listIntroduce);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (subslug)
            dispatch(
                getDetailMenu({ slugMenu: menuslug, slugSubMenu: subslug }),
            );
    }, [subslug, menuslug]);

    return (
        <div className="bg-gray-100">
            <div className="lg:h-28 h-20"></div>
            <h2 className=" text-red-600 md:text-3xl uppercase font-bold text-2xl mb-0 md:mb-3 md:leading-6 text-center py-10">
                Về T52 aaaaaaaaaa
            </h2>
        </div>
    );
};

export default ThongBao;
