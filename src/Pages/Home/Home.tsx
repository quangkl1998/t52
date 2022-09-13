import Action from "Components/Action/Action";
import Banner from "Components/Banner/Banner";
import FinancialSolution from "Components/FinancialSolution/FinancialSolution";
import Outstanding from "Components/Outstanding/Outstanding";
import OutStandingService from "Components/OutStandingService/OutStandingService";
import Partner from "Components/Partner/Partner";
import ReView from "Components/ReView/ReView";

const Home = () => {
    return (
        <div>
            <div className="lg:h-30 h-20"></div>
            <Banner />
            <OutStandingService />
            <FinancialSolution />
            <Outstanding />

            <ReView />

            <Partner />
            <Action />
        </div>
    );
};

export default Home;
