import axiosClient from "./axiosClient";

const partnerAPI = {
  getAllPartner: () => {
    return axiosClient.get<any>("partner");
  },
};

export default partnerAPI;
