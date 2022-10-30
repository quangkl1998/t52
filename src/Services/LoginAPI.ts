import axiosClient from "./axiosClient";

const LoginAPI = {
  LoginAction: (user: any) => {
    return axiosClient.post(`manager/login`, user);
  },
  getManagerList: () => {
    return axiosClient.get<any[]>(`manager`);
  },
  addManagerAdmin: (data: any) => {
    return axiosClient.post(`manager`, data);
  },
  deleteManagerAdmin: (id: string) => {
    return axiosClient.delete(`manager/${id}`);
  },
  updateManagerAdmin: (data: any) => {
    return axiosClient.put<any>(`manager/${data.id}`, data);
  },
  getDashBoard: () => {
    return axiosClient.get<any>(`manager/info`);
  },
};
export default LoginAPI;
