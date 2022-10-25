import axiosClient from "./axiosClient";

const TagNewsAPIAdmin = {
  getTagNewsList: () => {
    return axiosClient.get<any[]>(`typenews`);
  },
  addTagNews: (data: any) => {
    return axiosClient.post(`typenews`, data);
  },
  deleteTagNews: (id: string) => {
    return axiosClient.delete(`typenews/${id}`);
  },

  updateTagNews: (data: any) => {
    return axiosClient.put<any>(`typenews/${data.id}`, data);
  },
};

export default TagNewsAPIAdmin;
