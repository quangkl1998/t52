import axiosClient from "./axiosClient";

const mediaAPI = {
    getMedia: () => {
        return axiosClient.get<any>("media");
    },
};

export default mediaAPI;
