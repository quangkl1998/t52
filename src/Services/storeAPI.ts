import axiosClient from "./axiosClient";

const storeAPI = {
    getStores: () => {
        return axiosClient.get<any>("t52/store");
    },
};

export default storeAPI;
