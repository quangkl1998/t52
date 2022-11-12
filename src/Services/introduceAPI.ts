import axiosClient from "./axiosClient";
const introduceAPI = {
    getList: () => {
        return axiosClient.get<any[]>(`introduce`);
    },
    add: (data: any) => {
        return axiosClient.post(`introduce`, data);
    },
    deleteItem: (id: string) => {
        return axiosClient.delete(`introduce/${id}`);
    },
    update: (data: any) => {
        return axiosClient.put(`introduce/${data?.id}`, data);
    },
};

export default introduceAPI;
