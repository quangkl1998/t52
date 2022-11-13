import axiosClient from "./axiosClient";
const corevalueAPI = {
  getCoreValueList: () => {
    return axiosClient.get<any[]>(`corevalue`);
  },
  getById: (id: string) => {
    return axiosClient.get<any[]>(`corevalue/detail/${id}`);
  },
  addCoreValue: (data: any) => {
    return axiosClient.post(`corevalue`, data);
  },
  deleteCoreValue: (id: string) => {
    return axiosClient.delete(`corevalue/${id}`);
  },
  updateCoreValue: (data: any) => {
    return axiosClient.put(`corevalue/${data?.id}`, data);
  },
};

export default corevalueAPI;
