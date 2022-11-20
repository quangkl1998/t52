import axiosClient from "./axiosClient";
const menuAPI = {
  getList: () => {
    return axiosClient.get<any[]>(`menu`);
  },
  add: (data: any) => {
    return axiosClient.post(`menu`, data);
  },
  getById: (id: string) => {
    return axiosClient.get<any>(`menu/detail/${id}`);
  },
  deleteItem: (id: string) => {
    return axiosClient.delete(`menu/${id}`);
  },
  update: (data: any) => {
    return axiosClient.put(`menu/${data?.id}`, data);
  },
};

export default menuAPI;
