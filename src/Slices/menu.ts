import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import menuAPI from "Services/menuAPI";

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

export const getList = createAsyncThunk("menu/getList", async () => {
    try {
        const data = await menuAPI.getList();
        return data;
    } catch (error) {
        throw error;
    }
});

export const add = createAsyncThunk("menu/add", async (data: any) => {
    try {
        const result = await menuAPI.add(data);
        return result;
    } catch (error) {
        throw error;
    }
});

export const deleteItem = createAsyncThunk(
    "menu/deleteItem",
    async (id: string) => {
        try {
            const result = await menuAPI.deleteItem(id);
            return result;
        } catch (error) {
            throw error;
        }
    },
);

export const update = createAsyncThunk("menu/update", async (data: any) => {
    try {
        const result = await menuAPI.update(data);
        return result;
    } catch (error) {
        throw error;
    }
});

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get list

        builder.addCase(getList.pending, (state) => {
            state.isloading = true;
        });

        builder.addCase(getList.fulfilled, (state, { payload }) => {
            state.isloading = false;
            state.list = payload;
        });

        builder.addCase(getList.rejected, (state, { error }) => {
            state.isloading = true;
            state.error = error.message;
        });

        //end get list
    },
});
export default menuSlice.reducer;