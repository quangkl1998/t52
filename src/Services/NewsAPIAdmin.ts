import axiosClient from "./axiosClient";

const NewsAPI = {
  getNewList: () => {
    return axiosClient.get<any>(`news`);
  },
  addNews: (data: any) => {
    return axiosClient.post(`news`, data);
  },
  uploadImage: (data: any) => {
    const formData = new FormData();

    formData.append("img", data.img[0].originFileObj);
    formData.append("name", data.name);

    return axiosClient.post(`upload-images`, formData);
  },
};

export default NewsAPI;
