import axiosClient from "./axiosClient";
const introduceAPI = {
  getList: () => {
    return axiosClient.get<any[]>(`introduce`);
  },
  getById: (id: string) => {
    return axiosClient.get<any[]>(`introduce/detail/${id}`);
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
    return axiosClient.post(`introduce`, form);
  },
  deleteItem: (id: string) => {
    return axiosClient.delete(`introduce/${id}`);
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
    return axiosClient.put(`introduce/${data?.id}`, form);
  },
};

export default introduceAPI;
