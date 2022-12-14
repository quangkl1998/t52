import axiosClient from "./axiosClient";
const proviceAPI = {
  getList: () => {
    return axiosClient.get<any[]>(`province`);
  },
  getById: (id: string) => {
    return axiosClient.get<any[]>(`province/detail/${id}`);
  },
  add: (data: any) => {
    return axiosClient.post(`province`, data);
  },
  deleteItem: (id: string) => {
    return axiosClient.delete(`province/${id}`);
  },
  update: (data: any) => {
    return axiosClient.put(`province/${data?.id}`, data);
  },
};

export default proviceAPI;
