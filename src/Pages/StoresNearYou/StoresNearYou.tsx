import Questions from "Components/Questions/Questions";
import Transaction from "Components/Transaction/Transaction";
import { AppDispatch } from "configStore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStores } from "Slices/store";

const StoresNearYou = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getStores());
    }, []);

    return (
        <div>
            <div className="lg:h-28 h-20"></div>
            <Transaction />
            <Questions />
        </div>
    );
};

export default StoresNearYou;
