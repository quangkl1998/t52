import axiosClient from "./axiosClient";
const sloanguildAPI = {
  getList: () => {
    return axiosClient.get<any[]>(`loanguide`);
  },
  add: (data: any) => {
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "imgProcedure") {
        if (data[key]) {
          form.append("imgProcedure", data?.imgProcedure[0]?.originFileObj);
        }
      } else if (key === "imgProviso") {
        if (data[key]) {
          form.append("imgProviso", data?.imgProviso[0]?.originFileObj);
        }
      } else form.append(key, data[key]);
    });

    return axiosClient.post(`loanguide`, form);
  },
  getById: (id: string) => {
    return axiosClient.get(`loanguide/detail/${id}`);
  },
  deleteItem: (id: string) => {
    return axiosClient.delete(`loanguide/${id}`);
  },
  update: (data: any) => {
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "imgProcedure") {
        if (data[key]) {
          form.append("imgProcedure", data?.imgProcedure[0]?.originFileObj);
        }
      } else if (key === "imgProviso") {
        if (data[key]) {
          form.append("imgProviso", data?.imgProviso[0]?.originFileObj);
        }
      } else form.append(key, data[key]);
    });

    return axiosClient.put(`loanguide/${data?.id}`, form);
  },
};

export default sloanguildAPI;
