import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import introduceAPI from "Services/introduceAPI";

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

export const getList = createAsyncThunk("introduce/getList", async () => {
  try {
    const data = await introduceAPI.getList();
    return data;
  } catch (error) {
    throw error;
  }
});
export const getById = createAsyncThunk(
  "introduce/getById",
  async (id: string) => {
    try {
      const data = await introduceAPI.getById(id);
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const add = createAsyncThunk("introduce/add", async (data: any) => {
  try {
    const result = await introduceAPI.add(data);
    return result;
  } catch (error) {
    throw error;
  }
});

export const deleteItem = createAsyncThunk(
  "introduce/deleteItem",
  async (id: string) => {
    try {
      const result = await introduceAPI.deleteItem(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const update = createAsyncThunk(
  "introduce/update",
  async (data: any) => {
    try {
      const result = await introduceAPI.update(data);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

const introduceSlice = createSlice({
  name: "introduce",
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
    // get list

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

    //end get list
  },
});
export default introduceSlice.reducer;
