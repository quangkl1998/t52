import axiosClient from "./axiosClient";
const submenuAPI = {
  getList: () => {
    return axiosClient.get<any[]>(`submenu`);
  },
  getById: (id: string) => {
    return axiosClient.get<any[]>(`submenu/detail/${id}`);
  },
  add: (data: any) => {
    return axiosClient.post(`submenu`, data);
  },
  deleteItem: (id: string) => {
    return axiosClient.delete(`submenu/${id}`);
  },
  update: (data: any) => {
    return axiosClient.put(`submenu/${data?.id}`, data);
  },
};

export default submenuAPI;
