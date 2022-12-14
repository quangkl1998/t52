import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import corevalueAPI from "Services/corevalueAPI";

interface State {
  list: any[];
  detail: any;
  isloading: boolean;
  error?: string | null;
}

const initialState: State = {
  list: [],
  detail: null,
  isloading: false,
  error: null,
};

export const getCoreValueList = createAsyncThunk(
  "corevalue/getCoreValueList",
  async () => {
    try {
      const data = await corevalueAPI.getCoreValueList();
      return data;
    } catch (error) {
      throw error;
    }
  },
);
export const getById = createAsyncThunk(
  "corevalue/getById",
  async (id: string) => {
    try {
      const data = await corevalueAPI.getById(id);
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const addCoreValue = createAsyncThunk(
  "corevalue/addCoreValue",
  async (data: any) => {
    try {
      const result = await corevalueAPI.addCoreValue(data);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const deleteCoreValue = createAsyncThunk(
  "corevalue/deleteCoreValue",
  async (id: string) => {
    try {
      const result = await corevalueAPI.deleteCoreValue(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const updateCoreValue = createAsyncThunk(
  "corevalue/updateCoreValue",
  async (data: any) => {
    try {
      const result = await corevalueAPI.updateCoreValue(data);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

const corevalueSlice = createSlice({
  name: "corevalue",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get list

    builder.addCase(getCoreValueList.pending, (state) => {
      state.isloading = true;
    });

    builder.addCase(getCoreValueList.fulfilled, (state, { payload }) => {
      state.isloading = false;
      state.list = payload;
    });

    builder.addCase(getCoreValueList.rejected, (state, { error }) => {
      state.isloading = true;
      state.error = error.message;
    });

    //end get list

    // get detail

    builder.addCase(getById.pending, (state) => {
      state.isloading = true;
    });

    builder.addCase(getById.fulfilled, (state, { payload }) => {
      state.isloading = false;
      state.detail = payload;
    });

    builder.addCase(getById.rejected, (state, { error }) => {
      state.isloading = true;
      state.error = error.message;
    });

    //end get detail
  },
});
export default corevalueSlice.reducer;
