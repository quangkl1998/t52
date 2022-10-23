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
    console.log(formData, "698");
    return axiosClient.post(`news`, formData);
  },
  deleteNews: (id: string) => {
    return axiosClient.delete(`news/${id}`);
  },
  uploadImage: (data: any) => {
    const formData = new FormData();

    formData.append("img", data?.img[0].originFileObj);
    formData.append("name", data?.name);

    return axiosClient.post(`upload-images`, formData);
  },

  updateNews: (data: any) => {
    console.log(1, 687);
    const formData = new FormData();
    // formData.append("img", data?.img[0].originFileObj);
    formData.append("name", data?.name);
    formData.append("content", data?.content);
    formData.append("type", data?.type);
    formData.append("slug", data?.slug);
    formData.append("descript", data?.descript);
    console.log(formData, "6988 ");
    console.log(558);
    return axiosClient.put(`news/${data?.id}`, formData);
  },
};

export default NewsAPI;
