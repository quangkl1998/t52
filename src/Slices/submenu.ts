import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import submenuAPI from "Services/submenuAPI";

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

export const getList = createAsyncThunk("submenu/getList", async () => {
  try {
    const data = await submenuAPI.getList();
    return data;
  } catch (error) {
    throw error;
  }
});
export const getById = createAsyncThunk(
  "submenu/getById",
  async (id: string) => {
    try {
      const data = await submenuAPI.getById(id);
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const add = createAsyncThunk("submenu/add", async (data: any) => {
  try {
    const result = await submenuAPI.add(data);
    return result;
  } catch (error) {
    throw error;
  }
});

export const deleteItem = createAsyncThunk(
  "submenu/deleteItem",
  async (id: string) => {
    try {
      const result = await submenuAPI.deleteItem(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const update = createAsyncThunk("submenu/update", async (data: any) => {
  try {
    const result = await submenuAPI.update(data);
    return result;
  } catch (error) {
    throw error;
  }
});

const submenuSlice = createSlice({
  name: "submenu",
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
export default submenuSlice.reducer;
