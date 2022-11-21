import axiosClient from "./axiosClient";
const menuAPI = {
    getList: () => {
        return axiosClient.get<any[]>(`menu`);
    },
    add: (data: any) => {
        return axiosClient.post(`menu`, data);
    },
    getById: (id: string) => {
        return axiosClient.get<any>(`menu/detail/${id}`);
    },
    getListNewBySlug: (body: any) => {
        return axiosClient.get<any>(`menu/list`, {
            params: {
                slugMenu: body?.slugMenu,
                slugSubMenu: body?.slugSubMenu,
                limit: body?.limit,
            },
        });
    },
    deleteItem: (id: string) => {
        return axiosClient.delete(`menu/${id}`);
    },
    update: (data: any) => {
        return axiosClient.put(`menu/${data?.id}`, data);
    },

    getDetailMenu: (body: any) => {
        return axiosClient.get<any[]>(`menu/page`, {
            params: {
                slugMenu: body?.slugMenu,
                slugSubMenu: body?.slugSubMenu,
            },
        });
    },
};

export default menuAPI;
