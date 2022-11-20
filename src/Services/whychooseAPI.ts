import axiosClient from "./axiosClient";

const whychooseAPI = {
  getwhychoose: () => {
    return axiosClient.get<any>("whychoose");
  },
  add: (data: any) => {
    const formData = new FormData();

    formData.append("img", data.img[0].originFileObj);
    formData.append("title", data.title);

    return axiosClient.post(`whychoose`, formData);
  },
  update: (data: any) => {
    const formData = new FormData();
    if (data.img) {
      formData.append("img", data.img[0].originFileObj);
    }
    formData.append("title", data.title);

    return axiosClient.put(`whychoose/${data?.id}`, formData);
  },
  delete: (id: string) => {
    return axiosClient.delete(`whychoose/${id}`);
  },
};

export default whychooseAPI;
