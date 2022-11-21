import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SolutionAPI from "Services/solutionAPI";

interface State {
  list: any;
  isLoading: boolean;
  error?: string;
}
const initialState: State = {
  list: [],
  isLoading: false,
  error: undefined,
};

export const getList = createAsyncThunk("solution/getList", async () => {
  try {
    const data = SolutionAPI.getsolutions();
    return data;
  } catch (error) {
    throw error;
  }
});

export const add = createAsyncThunk("solution/add", async (data: any) => {
  try {
    const result = await SolutionAPI.add(data);
    return result;
  } catch (error) {
    throw error;
  }
});

export const update = createAsyncThunk("solution/update", async (data: any) => {
  try {
    const result = await SolutionAPI.update(data);
    return result;
  } catch (error) {
    throw error;
  }
});

export const deleteList = createAsyncThunk(
  "solution/deleteList",
  async (id: string) => {
    try {
      const result = await SolutionAPI.delete(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

const solutionSlice = createSlice({
  name: "solution",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.list = payload;
    });
    builder.addCase(getList.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export default solutionSlice.reducer;
