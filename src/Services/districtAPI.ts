import axiosClient from "./axiosClient";
const districtAPI = {
  getList: () => {
    return axiosClient.get<any[]>(`district`);
  },
  getByIdProvince: (id: String) => {
    return axiosClient.get<any[]>(`district/?provinceId=${id}`);
  },
  getById: (id: string) => {
    return axiosClient.get<any[]>(`district/detail/${id}`);
  },
  add: (data: any) => {
    return axiosClient.post(`district`, data);
  },
  deleteItem: (id: string) => {
    return axiosClient.delete(`district/${id}`);
  },
  update: (data: any) => {
    return axiosClient.put(`district/${data?.id}`, data);
  },
};

export default districtAPI;
