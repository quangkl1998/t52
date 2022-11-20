import axiosClient from "./axiosClient";

const NewsAPI = {
  getNewList: () => {
    return axiosClient.get<any>(`news`);
  },
  addNews: (data: any) => {
    const formData = new FormData();
    formData.append("img", data?.img[0].originFileObj);
    formData.append("name", data?.name);
    formData.append("content", data?.content);
    formData.append("type", data?.type);
    formData.append("slug", data?.slug);
    formData.append("descript", data?.descript);
    formData.append("contentImg", data?.contentImg);
    formData.append("menuId", data?.menuId);
    formData.append("submenuId", data?.submenuId);

    return axiosClient.post(`news`, formData);
  },
  deleteNews: (id: string) => {
    return axiosClient.delete(`news/${id}`);
  },
  uploadImage: (data: any) => {
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "img") {
        if (data[key]) {
          form.append("img", data?.img[0]?.originFileObj);
        }
      } else form.append(key, data[key]);
    });

    return axiosClient.post(`upload-images`, form);
  },

  updateNews: (data: any) => {
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "img") {
        if (data[key]) {
          form.append("img", data?.img[0]?.originFileObj);
        }
      } else form.append(key, data[key]);
    });

    return axiosClient.put(`news/${data?.id}`, form);
  },
};

export default NewsAPI;
