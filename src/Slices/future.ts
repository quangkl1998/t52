import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import futurekAPI from "Services/futureAPI";

interface State {
    list: any[];
    isloading: boolean;
    error?: string | null;
}

const initialState: State = {
    list: [],
    isloading: false,
    error: null,
};

export const getFutureList = createAsyncThunk(
    "future/getFutureList",
    async () => {
        try {
            const data = await futurekAPI.getFutureList();
            return data;
        } catch (error) {
            throw error;
        }
    },
);

export const addFuture = createAsyncThunk(
    "future/addFuture",
    async (data: any) => {
        try {
            const result = await futurekAPI.addFuture(data);
            return result;
        } catch (error) {
            throw error;
        }
    },
);

export const deleteFuture = createAsyncThunk(
    "future/deleteFuture",
    async (id: string) => {
        try {
            const result = await futurekAPI.deleteFuture(id);
            return result;
        } catch (error) {
            throw error;
        }
    },
);

export const updateFuture = createAsyncThunk(
    "future/updateFuture",
    async (data: any) => {
        try {
            const result = await futurekAPI.updateFuture(data);
            return result;
        } catch (error) {
            throw error;
        }
    },
);

const futureSlice = createSlice({
    name: "future",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get list

        builder.addCase(getFutureList.pending, (state) => {
            state.isloading = true;
        });

        builder.addCase(getFutureList.fulfilled, (state, { payload }) => {
            state.isloading = false;
            state.list = payload;
        });

        builder.addCase(getFutureList.rejected, (state, { error }) => {
            state.isloading = true;
            state.error = error.message;
        });

        //end get list
    },
});
export default futureSlice.reducer;
