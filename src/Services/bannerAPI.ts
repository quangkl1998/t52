import axiosClient from "./axiosClient";

const bannerAPI = {
  getBanner: () => {
    return axiosClient.get<any>("banner");
  },
  add: (data: any) => {
    const formData = new FormData();

    formData.append("img", data.img[0].originFileObj);
    formData.append("name", data.name);

    return axiosClient.post(`banner`, formData);
  },
  update: (data: any) => {
    const formData = new FormData();
    if (data.img) {
      formData.append("img", data.img[0].originFileObj);
    }
    formData.append("name", data.name);

    return axiosClient.put(`banner/${data?.id}`, formData);
  },
  delete: (id: string) => {
    return axiosClient.delete(`banner/${id}`);
  },
};

export default bannerAPI;
