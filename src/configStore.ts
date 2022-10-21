import { configureStore } from "@reduxjs/toolkit";
import auth from "./Slices/auth";
import news from "./Slices/news";
import banner from "./Slices/banner";
import stores from "./Slices/store";
import partner from "./Slices/partner";

const store = configureStore({
    reducer: { auth, news, banner, stores, partner },
});

// type cho hàm dispatch
export type AppDispatch = typeof store.dispatch;

// type cho state
export type RootState = ReturnType<typeof store.getState>;

export default store;
