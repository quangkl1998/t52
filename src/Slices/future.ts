import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import futureAPI from "Services/futureAPI";

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

export const getFutureList = createAsyncThunk(
  "future/getFutureList",
  async () => {
    try {
      const data = await futureAPI.getFutureList();
      return data;
    } catch (error) {
      throw error;
    }
  },
);
export const getById = createAsyncThunk(
  "future/getById",
  async (id: string) => {
    try {
      const data = await futureAPI.getById(id);
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
      const result = await futureAPI.addFuture(data);
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
      const result = await futureAPI.deleteFuture(id);
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
      const result = await futureAPI.updateFuture(data);
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
export default futureSlice.reducer;
