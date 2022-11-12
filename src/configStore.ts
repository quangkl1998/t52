import { configureStore } from "@reduxjs/toolkit";
import auth from "./Slices/auth";
import news from "./Slices/news";
import banner from "./Slices/banner";
import stores from "./Slices/store";
import partner from "./Slices/partner";
import media from "./Slices/media";

import clientAdmin from "./Slices/ClientAdmin";
import login from "./Slices/Login";
import newsAdmin from "./Slices/NewsAdmin";
import storeAdmin from "./Slices/StoreAdmin";
import partnerAdmin from "./Slices/PartnerAdmin";
import tagNewsAdmin from "./Slices/TagNewsAdmin";
import mediaAdmin from "./Slices/mediaAdmin";
import question from "./Slices/questionAdmin";
import corevalue from "./Slices/corevalue";
import feedback from "./Slices/feedback";
import future from "./Slices/future";
import introduce from "./Slices/introduce";
import menu from "./Slices/menu";
import service from "./Slices/service";
import submenu from "./Slices/submenu";

const store = configureStore({
    reducer: {
        auth,
        news,
        banner,
        stores,
        partner,
        media,
        clientAdmin,
        login,
        newsAdmin,
        storeAdmin,
        partnerAdmin,
        tagNewsAdmin,
        mediaAdmin,
        question,
        corevalue,
        feedback,
        future,
        introduce,
        menu,
        service,
        submenu,
    },
});

// type cho hàm dispatch
export type AppDispatch = typeof store.dispatch;

// type cho state
export type RootState = ReturnType<typeof store.getState>;

export default store;
