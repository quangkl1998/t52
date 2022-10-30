import axiosClient from "./axiosClient";

const QuestionAPIAdmin = {
    getQuestionList: () => {
        return axiosClient.get<any[]>(`question`);
    },
    addQuestion: (data: any) => {
        return axiosClient.post(`question`, data);
    },
    updateQuestion: (data: any) => {
        return axiosClient.put(`question/${data?.id}`, data);
    },
    deleteQuestion: (id: string) => {
        return axiosClient.delete(`question/${id}`);
    },
};

export default QuestionAPIAdmin;
