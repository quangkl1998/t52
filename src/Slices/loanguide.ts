import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import loanguideAPI from "Services/loanguide";

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

export const getList = createAsyncThunk("loanguide/getList", async () => {
  try {
    const data = await loanguideAPI.getList();
    return data;
  } catch (error) {
    throw error;
  }
});

export const add = createAsyncThunk("loanguide/add", async (data: any) => {
  try {
    const result = await loanguideAPI.add(data);
    return result;
  } catch (error) {
    throw error;
  }
});

export const getById = createAsyncThunk(
  "loanguide/getById",
  async (id: string) => {
    try {
      const result = await loanguideAPI.getById(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
);
export const deleteItem = createAsyncThunk(
  "loanguide/deleteItem",
  async (id: string) => {
    try {
      const result = await loanguideAPI.deleteItem(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const update = createAsyncThunk(
  "loanguide/update",
  async (data: any) => {
    try {
      const result = await loanguideAPI.update(data);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

const serviceSlice = createSlice({
  name: "loanguide",
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
export default serviceSlice.reducer;
