import axiosClient from "./axiosClient";
const sloanguildAPI = {
  getList: () => {
    return axiosClient.get<any[]>(`service`);
  },
  add: (data: any) => {
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "img") {
        if (data[key]) {
          form.append("img", data?.img[0]?.originFileObj);
        }
      } else form.append(key, data[key]);
    });

    return axiosClient.post(`service`, form);
  },
  getById: (id: string) => {
    return axiosClient.get(`service/detail/${id}`);
  },
  deleteItem: (id: string) => {
    return axiosClient.delete(`service/${id}`);
  },
  update: (data: any) => {
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "img") {
        if (data[key]) {
          form.append("img", data?.img[0]?.originFileObj);
        }
      } else form.append(key, data[key]);
    });

    return axiosClient.put(`service/${data?.id}`, form);
  },
};

export default sloanguildAPI;
