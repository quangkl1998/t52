import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserValues } from "Interface/auth";

interface State {
    newsDetail: any;
    isLoading: boolean;
    error?: string;
}
const initialState: State = {
    newsDetail: null,
    isLoading: false,
    error: undefined,
};

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setNewsDetail: (state, { payload }) => {
            state.newsDetail = payload;
        },
    },
    extraReducers(builder) {},
});

export const { setNewsDetail } = newsSlice.actions;

export default newsSlice.reducer;
