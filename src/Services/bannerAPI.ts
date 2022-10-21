import axiosClient from "./axiosClient";

const bannerAPI = {
    getBanner: () => {
        return axiosClient.get<any>("t52/banners");
    },
};

export default bannerAPI;
