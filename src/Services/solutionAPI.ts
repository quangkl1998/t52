import axiosClient from "./axiosClient";

const SolutionAPI = {
  getsolutions: () => {
    return axiosClient.get<any>("solutions");
  },
  add: (data: any) => {
    const formData = new FormData();

    formData.append("img", data.img[0].originFileObj);
    formData.append("title", data.title);

    return axiosClient.post(`solutions`, formData);
  },
  update: (data: any) => {
    const formData = new FormData();
    if (data.img) {
      formData.append("img", data.img[0].originFileObj);
    }
    formData.append("title", data.title);

    return axiosClient.put(`solutions/${data?.id}`, formData);
  },
  delete: (id: string) => {
    return axiosClient.delete(`solutions/${id}`);
  },
};

export default SolutionAPI;
