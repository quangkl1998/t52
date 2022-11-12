import axiosClient from "./axiosClient";
const serviceAPI = {
  getList: () => {
    return axiosClient.get<any[]>(`service`);
  },
  add: (data: any) => {
    const form = new FormData();

    Object.keys(data).forEach((key) => {
      if (key === "img") {
        form.append("img", data?.img[0].originFileObj);
      } else form.append(key, data[key]);
    });

    return axiosClient.post(`service`, form);
  },
  deleteItem: (id: string) => {
    return axiosClient.delete(`service/${id}`);
  },
  update: (data: any) => {
    return axiosClient.put(`service/${data?.id}`, data);
  },
};

export default serviceAPI;
