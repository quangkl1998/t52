import axiosClient from "./axiosClient";

const bannerAPI = {
  getBanner: () => {
    return axiosClient.get<any>("banner");
  },
};

export default bannerAPI;
