import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clientAPI from "Services/clientAPI";
import storeAPI from "Services/storeAPI";

interface State {
    result: any;
    isLoading: boolean;
    error?: string;
}
const initialState: State = {
    result: "",
    isLoading: false,
    error: undefined,
};

export const postClient = createAsyncThunk(
    "client/postClient",
    async (values: any) => {
        try {
            const result = clientAPI.postClient(values);
            return result;
        } catch (error) {
            throw error;
        }
    },
);

const storeSlice = createSlice({
    name: "client",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(postClient.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(postClient.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.result = payload;
        });
        builder.addCase(postClient.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
    },
});

export default storeSlice.reducer;
