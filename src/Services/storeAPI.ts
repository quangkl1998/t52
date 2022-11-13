import axiosClient from "./axiosClient";

const storeAPI = {
    getStores: (param: any) => {
        if (param) {
            return axiosClient.get<any>("store", {
                params: {
                    provinceId: param?.provinceId,
                    districtId: param?.districtId,
                },
            });
        }
        return axiosClient.get<any>("store");
    },
    findByName: (param: any) => {
        return axiosClient.get<any>(`store/${param}`);
    },
    getProvince: (param: any) => {
        if (param) {
            return axiosClient.get<any>("province", {
                params: {
                    provinceId: param?.provinceId,
                },
            });
        }
        return axiosClient.get<any>("province");
    },
    getDistrict: (param: any) => {
        if (param) {
            return axiosClient.get<any>("district", {
                params: {
                    provinceId: param?.provinceId,
                },
            });
        }
        return axiosClient.get<any>("district");
    },
    getDistrictWithProvince: (id: any) => {
        return axiosClient.get<any>(`province/detail/${id}`);
    },
    getStoreWithDistrict: (id: any) => {
        return axiosClient.get<any>(`province/detail/${id}`);
    },
};

export default storeAPI;
