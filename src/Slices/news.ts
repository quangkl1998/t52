import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserValues } from "Interface/auth";
import newsAPI from "Services/newsAPI";

interface State {
    newsDetail: any;
    listNew: any;
    isLoading: boolean;
    error?: string;
}
const initialState: State = {
    newsDetail: null,
    listNew: [],
    isLoading: false,
    error: undefined,
};

export const getNews = createAsyncThunk("news/getNews", async () => {
    try {
        const listNew = newsAPI.getNews();
        return listNew;
    } catch (error) {
        throw error;
    }
});
export const getNewDetail = createAsyncThunk(
    "news/getNewDetail",
    async (id: string) => {
        try {
            const newsDetail = newsAPI.getNewDetail(id);
            return newsDetail;
        } catch (error) {
            throw error;
        }
    },
);

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setNewsDetail: (state, { payload }) => {
            state.newsDetail = payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(getNews.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getNews.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.listNew = payload;
        });
        builder.addCase(getNews.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
        builder.addCase(getNewDetail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getNewDetail.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.newsDetail = payload;
        });
        builder.addCase(getNewDetail.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
    },
});

export const { setNewsDetail } = newsSlice.actions;

export default newsSlice.reducer;
