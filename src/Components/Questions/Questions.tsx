import { Collapse } from "antd";
import { AppDispatch, RootState } from "configStore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionList } from "Slices/questionAdmin";
import parse from "html-react-parser";

const { Panel } = Collapse;

const Questions = () => {
    const { questions } = useSelector((state: RootState) => state.question);
    // console.log(questions);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getQuestionList());
    }, []);
    return (
        <div className="mt-5 pb-5">
            <div className="container mx-auto px-5 lg:px-16">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5 border">
                    <div className="border-b pb-3 mb-3">
                        <h4 className="uppercase font-bold text-xl text-amber-700 my-3">
                            Câu hỏi thường gặp
                        </h4>
                    </div>
                    <div className="lg:px-5">
                        <Collapse ghost expandIconPosition="end">
                            {questions?.map((item, index) => {
                                return (
                                    <Panel
                                        header={
                                            <div className="font-bold text-lg border-b ml-2 pb-2">
                                                {item.title}
                                            </div>
                                        }
                                        key={index}
                                    >
                                        {parse(item?.content)}
                                    </Panel>
                                );
                            })}
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
