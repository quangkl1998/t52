import axiosClient from "./axiosClient";

const clientAPI = {
    postClient: (values: any) => {
        return axiosClient.post<any>("t52/client", values);
    },
};

export default clientAPI;
