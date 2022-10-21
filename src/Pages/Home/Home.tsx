import Action from "Components/Action/Action";
import Banner from "Components/Banner/Banner";
import FinancialSolution from "Components/FinancialSolution/FinancialSolution";
import Outstanding from "Components/Outstanding/Outstanding";
import OutStandingService from "Components/OutStandingService/OutStandingService";
import Partner from "Components/Partner/Partner";
import ReView from "Components/ReView/ReView";
import { AppDispatch } from "configStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBanner } from "Slices/banner";
import { getAllPartner } from "Slices/partner";

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getBanner());
        dispatch(getAllPartner());
    }, []);
    return (
        <div>
            <div className="lg:h-28 h-20"></div>
            <Banner />
            <OutStandingService />
            <FinancialSolution />

            <ReView />
            <Outstanding />

            <Partner />
            <Action />
        </div>
    );
};

export default Home;
