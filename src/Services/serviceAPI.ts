import axiosClient from "./axiosClient";
const serviceAPI = {
    getList: () => {
        return axiosClient.get<any[]>(`service`);
    },
    add: (data: any) => {
        return axiosClient.post(`service`, data);
    },
    deleteItem: (id: string) => {
        return axiosClient.delete(`service/${id}`);
    },
    update: (data: any) => {
        return axiosClient.put(`service/${data?.id}`, data);
    },
};

export default serviceAPI;
