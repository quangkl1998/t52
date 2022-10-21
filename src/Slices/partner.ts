import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import partnerAPI from "Services/partnerAPI";

interface State {
    listPartner: any;
    isLoading: boolean;
    error?: string;
}
const initialState: State = {
    listPartner: [],
    isLoading: false,
    error: undefined,
};

export const getAllPartner = createAsyncThunk(
    "partner/getAllPartner",
    async () => {
        try {
            const listPartner = partnerAPI.getAllPartner();
            return listPartner;
        } catch (error) {
            throw error;
        }
    },
);

const partnerSlice = createSlice({
    name: "partner",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllPartner.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllPartner.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.listPartner = payload;
        });
        builder.addCase(getAllPartner.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
    },
});

export default partnerSlice.reducer;
