import Action from "Components/Action/Action";
import Banner from "Components/Banner/Banner";
import FeaturedNews from "Components/FeaturedNews/FeaturedNews";
import FinancialSolution from "Components/FinancialSolution/FinancialSolution";
import OutStandingService from "Components/OutStandingService/OutStandingService";
import Partner from "Components/Partner/Partner";
import Prize from "Components/Prize/Prize";
import ReView from "Components/ReView/ReView";

const Home = () => {
  return (
    <div>
      <div className="lg:h-36 h-20"></div>
      <Banner />
      <OutStandingService />
      <FinancialSolution />
      <FeaturedNews />

      <ReView />

      <Partner />
      <Action />
    </div>
  );
};

export default Home;
