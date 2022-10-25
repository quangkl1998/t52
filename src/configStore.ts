import { configureStore } from "@reduxjs/toolkit";
import auth from "./Slices/auth";
import news from "./Slices/news";
import banner from "./Slices/banner";
import stores from "./Slices/store";
import partner from "./Slices/partner";

import clientAdmin from "./Slices/ClientAdmin";
import login from "./Slices/Login";
import newsAdmin from "./Slices/NewsAdmin";
import storeAdmin from "./Slices/StoreAdmin";
import partnerAdmin from "./Slices/PartnerAdmin";
<<<<<<< HEAD
import tagNewsAdmin from "Slices/TagNewsAdmin";
import mediaAdmin from "Slices/mediaAdmin";

const store = configureStore({
  reducer: {
    auth,
    news,
    banner,
    stores,
    partner,
    clientAdmin,
    login,
    newsAdmin,
    storeAdmin,
    partnerAdmin,
    tagNewsAdmin,
    mediaAdmin,
  },
=======
import media from "./Slices/media";

const store = configureStore({
    reducer: {
        auth,
        news,
        banner,
        stores,
        partner,
        clientAdmin,
        login,
        newsAdmin,
        storeAdmin,
        partnerAdmin,
        media,
    },
>>>>>>> f54f4d206a03d33e9ee8b22b01747b253b79ca36
});

// type cho hàm dispatch
export type AppDispatch = typeof store.dispatch;

// type cho state
export type RootState = ReturnType<typeof store.getState>;

export default store;
