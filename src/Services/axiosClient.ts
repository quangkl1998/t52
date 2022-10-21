import axios, { AxiosError } from "axios";

const axiosClient = axios.create({
    baseURL: "https://t52-loan-nodejs.herokuapp.com",
    headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzNhZDQ3ZjA4YWI1MGIzMGNhM2EwMSIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjY0MzUyOTg4LCJleHAiOjE2NjY5NDQ5ODh9.3uw9T_ew9cmoMTYbixwMQFS8jPK74Ct8vPQVRBVLv_kds4324g",
    },
});

//request
axiosClient.interceptors.request.use((config) => {
    if (config.headers) {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.tokenauth = `${accessToken}`;
        }
    }
    return config;
});

//response
axiosClient.interceptors.response.use(
    (response: any) => {
        return response.data;
    },
    (error: AxiosError<{ content: string }>) => {
        return error.response?.data;
    },
);

export default axiosClient;
