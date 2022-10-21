import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import storeAPI from "Services/storeAPI";

interface State {
    listStore: any;
    isLoading: boolean;
    error?: string;
}
const initialState: State = {
    listStore: [],
    isLoading: false,
    error: undefined,
};

export const getStores = createAsyncThunk("news/getNews", async () => {
    try {
        const listStore = storeAPI.getStores();
        return listStore;
    } catch (error) {
        throw error;
    }
});

const storeSlice = createSlice({
    name: "stores",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getStores.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStores.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.listStore = payload;
        });
        builder.addCase(getStores.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
    },
});

export default storeSlice.reducer;
