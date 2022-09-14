import { configureStore } from "@reduxjs/toolkit";
import auth from "./Slices/auth";
import news from "./Slices/news";

const store = configureStore({
    reducer: { auth, news },
});

// type cho hàm dispatch
export type AppDispatch = typeof store.dispatch;

// type cho state
export type RootState = ReturnType<typeof store.getState>;

export default store;
