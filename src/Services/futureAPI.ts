import axiosClient from "./axiosClient";
const futurekAPI = {
    getFutureList: () => {
        return axiosClient.get<any[]>(`future`);
    },
    addFuture: (data: any) => {
        return axiosClient.post(`future`, data);
    },
    deleteFuture: (id: string) => {
        return axiosClient.delete(`future/${id}`);
    },
    updateFuture: (data: any) => {
        return axiosClient.put(`future/${data?.id}`, data);
    },
};

export default futurekAPI;
