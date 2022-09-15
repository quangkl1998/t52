import Action from "Components/Action/Action";
import Activities from "Components/Activities/Activities";
import Outstanding from "Components/Outstanding/Outstanding";
import Story from "Components/Story/Story";

const News = () => {
    return (
        <div>
            <div className="lg:h-28 h-20"></div>
            <Outstanding />
            <Activities />
            <Story />
            <Action />
        </div>
    );
};

export default News;
