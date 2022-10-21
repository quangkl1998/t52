import axiosClient from "./axiosClient";

const partnerAPI = {
    getAllPartner: () => {
        return axiosClient.get<any>("t52/partner");
    },
};

export default partnerAPI;
