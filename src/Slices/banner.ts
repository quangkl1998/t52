import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserValues } from "Interface/auth";
import bannerAPI from "Services/bannerAPI";
import newsAPI from "Services/newsAPI";

interface State {
    listBanner: any;
    isLoading: boolean;
    error?: string;
}
const initialState: State = {
    listBanner: [],
    isLoading: false,
    error: undefined,
};

export const getBanner = createAsyncThunk("news/getBanner", async () => {
    try {
        const listBanner = bannerAPI.getBanner();
        return listBanner;
    } catch (error) {
        throw error;
    }
});

const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getBanner.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getBanner.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.listBanner = payload;
        });
        builder.addCase(getBanner.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
    },
});

export default bannerSlice.reducer;
