import axiosClient from "./axiosClient";

const clientAPI = {
    postClient: (values: any) => {
        return axiosClient.post<any>("client", values);
    },
};

export default clientAPI;
