import axiosClient from "./axiosClient";

const newsAPI = {
    getNews: () => {
        return axiosClient.get<any>("news");
    },
    getRandomNews: () => {
        return axiosClient.get<any>("news/random");
    },
    getNewsLimit: (limit: any) => {
        return axiosClient.get<any>("news/limit", {
            params: {
                limit,
            },
        });
    },
    getNewDetail: (slug: string) => {
        return axiosClient.get<any>(`news/search-slug/${slug}`);
    },
    getNewPagination: (para: any) => {
        return axiosClient.get<any>("news/pagination", {
            params: {
                size: para?.size,
                page: para?.page,
            },
        });
    },
};

export default newsAPI;
