import axiosClient from "./axiosClient";
const futurekAPI = {
  getFutureList: () => {
    return axiosClient.get<any[]>(`future`);
  },
  getById: (id: string) => {
    return axiosClient.get<any[]>(`future/detail/${id}`);
  },
  addFuture: (data: any) => {
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "img") {
        if (data[key]) {
          form.append("img", data?.img[0]?.originFileObj);
        }
      } else form.append(key, data[key]);
    });
    return axiosClient.post(`future`, form);
  },
  deleteFuture: (id: string) => {
    return axiosClient.delete(`future/${id}`);
  },
  updateFuture: (data: any) => {
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "img") {
        if (data[key]) {
          form.append("img", data?.img[0]?.originFileObj);
        }
      } else form.append(key, data[key]);
    });
    return axiosClient.put(`future/${data?.id}`, form);
  },
};

export default futurekAPI;
