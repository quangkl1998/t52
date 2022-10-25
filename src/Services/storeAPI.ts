import axiosClient from "./axiosClient";

const storeAPI = {
    getStores: () => {
        return axiosClient.get<any>("store");
    },
};

export default storeAPI;
