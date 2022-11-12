import axiosClient from "./axiosClient";
const feedbackAPI = {
    getFeedbackList: () => {
        return axiosClient.get<any[]>(`feedback`);
    },
    addFeedback: (data: any) => {
        return axiosClient.post(`feedback`, data);
    },
    deleteFeedback: (id: string) => {
        return axiosClient.delete(`feedback/${id}`);
    },
    updateFeedback: (data: any) => {
        return axiosClient.put(`feedback/${data?.id}`, data);
    },
};

export default feedbackAPI;
