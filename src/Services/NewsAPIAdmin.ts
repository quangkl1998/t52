import axiosClient from "./axiosClient";

const NewsAPI = {
  getNewList: () => {
    return axiosClient.get<any>(`news`);
  },
  addNews: (data: any) => {
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "img") {
        if (data[key]) {
          form.append("img", data?.img[0]?.originFileObj);
        }
      } else if (key === "menuId") {
        if (data[key]) {
          form.append(key, data[key]);
        }
      } else if (key === "submenuId") {
        if (data[key]) {
          form.append(key, data[key]);
        }
      } else form.append(key, data[key]);
    });

    return axiosClient.post(`news`, form);
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
      } else if (key === "menuId") {
        if (data[key]) {
          form.append(key, data[key]);
        }
      } else if (key === "submenuId") {
        if (data[key]) {
          form.append(key, data[key]);
        }
      } else form.append(key, data[key]);
    });

    return axiosClient.put(`news/${data?.id}`, form);
  },
};

export default NewsAPI;
