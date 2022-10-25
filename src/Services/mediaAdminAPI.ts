import axiosClient from "./axiosClient";

const MediaAdminAPI = {
  getMediaAdminList: () => {
    return axiosClient.get<any[]>(`media`);
  },
  addMediaAdmin: (data: any) => {
    return axiosClient.post(`media`, data);
  },
  deleteMediaAdmin: (id: string) => {
    return axiosClient.delete(`media/${id}`);
  },
  updateMediaAdmin: (data: any) => {
    return axiosClient.put<any>(`media/${data.id}`, data);
  },
};

export default MediaAdminAPI;
