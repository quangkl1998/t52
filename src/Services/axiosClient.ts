import axios from "axios";

const axiosClient = axios.create({
    // baseURL: "https://t52-loan-nodejs.herokuapp.com/t52",
    // http://t52tiennhanh.net:8080
    baseURL: "http://localhost:8080",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzNhZDQ3ZjA4YWI1MGIzMGNhM2EwMSIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjY0MzUyOTg4LCJleHAiOjE2NjY5NDQ5ODh9.3uw9T_ew9cmoMTYbixwMQFS8jPK74Ct8vPQVRBVLv_kds4324g",
    },
});

axiosClient.interceptors.request.use((config) => {
    //config là nội dung của request
    // ta có thể thay đổi nội dung của request trước khi  nó đc gửi lên server

    if (config.headers) {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken) {
            config.headers.tokenauth = `Bearer ${accessToken}`;
        }
    }
    return config;
});

axiosClient.interceptors.response.use(
    (reponse) => {
        return reponse.data;
    },
    (error) => {
        return error.response.data;
    },
);

export default axiosClient;
