import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import storeAPI from "Services/storeAPI";

interface State {
    listStore: any;
    listProvince: any;
    listDistrict: any;
    isLoading: boolean;
    error?: string;
}
const initialState: State = {
    listStore: [],
    listProvince: [],
    listDistrict: [],
    isLoading: false,
    error: undefined,
};

export const getStores = createAsyncThunk(
    "stores/getStores",
    async (param: any) => {
        try {
            const listStore = storeAPI.getStores(param);
            return listStore;
        } catch (error) {
            throw error;
        }
    },
);
export const findByName = createAsyncThunk(
    "stores/findByName",
    async (param: any) => {
        try {
            const listStore = storeAPI.findByName(param);
            return listStore;
        } catch (error) {
            throw error;
        }
    },
);
export const getProvince = createAsyncThunk(
    "province/getProvince",
    async (param: any) => {
        try {
            const listProvince = storeAPI.getProvince(param);
            return listProvince;
        } catch (error) {
            throw error;
        }
    },
);
export const getDistrict = createAsyncThunk(
    "district/getDistrict",
    async (param: any) => {
        try {
            const listDistrict = storeAPI.getDistrict(param);
            return listDistrict;
        } catch (error) {
            throw error;
        }
    },
);
export const getDistrictWithProvince = createAsyncThunk(
    "province/getDistrictWithProvince",
    async (id: any) => {
        try {
            const listDistrict = storeAPI.getDistrictWithProvince(id);
            return listDistrict;
        } catch (error) {
            throw error;
        }
    },
);
export const getStoreWithDistrict = createAsyncThunk(
    "district/getStoreWithDistrict",
    async (id: any) => {
        try {
            const listDistrict = storeAPI.getStoreWithDistrict(id);
            return listDistrict;
        } catch (error) {
            throw error;
        }
    },
);

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
        builder.addCase(findByName.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(findByName.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.listStore = payload;
        });
        builder.addCase(findByName.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });

        builder.addCase(getProvince.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProvince.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.listProvince = payload;
        });
        builder.addCase(getProvince.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
        builder.addCase(getDistrict.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getDistrict.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.listDistrict = payload;
        });
        builder.addCase(getDistrict.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
    },
});

export default storeSlice.reducer;
