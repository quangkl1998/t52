import axiosClient from "./axiosClient";

const newsAPI = {
    getNews: () => {
        return axiosClient.get<any>("t52/news");
    },
    getNewDetail: (id: string) => {
        return axiosClient.get<any>(`t52/news/detail/${id}`);
    },
};

export default newsAPI;
