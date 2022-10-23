import axiosClient from "./axiosClient";

const StoreAPI = {
  getStoreList: () => {
    return axiosClient.get<any[]>(`store`);
  },
  addStore: (data: any) => {
    return axiosClient.post(`store`, data);
  },
  deleteStore: (id: string) => {
    return axiosClient.delete(`store/${id}`);
  },
  getDetailStore: (id: string) => {
    return axiosClient.get<any[]>(`store/detail/${id}`);
  },
  updateStore: (data: any) => {
    return axiosClient.put<any[]>(`store/${data.id}`, data);
  },
};

export default StoreAPI;
