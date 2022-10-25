import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mediaAPI from "Services/mediaAPI";

interface State {
    newsDetail: any;
    listMedia: any;
    isLoading: boolean;
    error?: string;
}
const initialState: State = {
    newsDetail: null,
    listMedia: [],
    isLoading: false,
    error: undefined,
};

export const getMedia = createAsyncThunk("media/getMedia", async () => {
    try {
        const listMedia = mediaAPI.getMedia();
        return listMedia;
    } catch (error) {
        throw error;
    }
});

const mediaSlice = createSlice({
    name: "media",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getMedia.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMedia.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.listMedia = payload;
        });
        builder.addCase(getMedia.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
    },
});

export default mediaSlice.reducer;
