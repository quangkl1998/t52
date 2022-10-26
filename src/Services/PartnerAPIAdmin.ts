import axiosClient from "./axiosClient";

const PartnerAPI = {
  getPartnerList: () => {
    return axiosClient.get<any[]>(`partner`);
  },
  addPartner: (data: any) => {
    const formData = new FormData();

    formData.append("img", data.img[0].originFileObj);
    formData.append("name", data.name);

    return axiosClient.post(`partner`, formData);
  },
  updatePartner: (data: any) => {
    const formData = new FormData();
    if (data.img) {
      formData.append("img", data.img[0].originFileObj);
    }
    formData.append("name", data.name);

    return axiosClient.put(`partner/${data?.id}`, formData);
  },
  deletePartner: (id: string) => {
    return axiosClient.delete(`partner/${id}`);
  },
};

export default PartnerAPI;
