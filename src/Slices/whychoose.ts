import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import whychooseAPI from "Services/whychooseAPI";

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

export const getwhychoose = createAsyncThunk(
  "whychoose/getwhychoose",
  async () => {
    try {
      const data = whychooseAPI.getwhychoose();
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const add = createAsyncThunk("whychoose/add", async (data: any) => {
  try {
    const result = await whychooseAPI.add(data);
    return result;
  } catch (error) {
    throw error;
  }
});

export const update = createAsyncThunk(
  "whychoose/update",
  async (data: any) => {
    try {
      const result = await whychooseAPI.update(data);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const deleteList = createAsyncThunk(
  "whychoose/deleteList",
  async (id: string) => {
    try {
      const result = await whychooseAPI.delete(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

const whychooseSlice = createSlice({
  name: "whychoose",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getwhychoose.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getwhychoose.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.list = payload;
    });
    builder.addCase(getwhychoose.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export default whychooseSlice.reducer;
