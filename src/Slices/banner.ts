import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bannerAPI from "Services/bannerAPI";

interface State {
  listBanner: any;
  isLoading: boolean;
  error?: string;
}
const initialState: State = {
  listBanner: [],
  isLoading: false,
  error: undefined,
};

export const getBanner = createAsyncThunk("banner/getBanner", async () => {
  try {
    const listBanner = bannerAPI.getBanner();
    return listBanner;
  } catch (error) {
    throw error;
  }
});

export const add = createAsyncThunk("banner/add", async (data: any) => {
  try {
    const result = await bannerAPI.add(data);
    return result;
  } catch (error) {
    throw error;
  }
});

export const update = createAsyncThunk("banner/update", async (data: any) => {
  try {
    const result = await bannerAPI.update(data);
    return result;
  } catch (error) {
    throw error;
  }
});

export const deleteList = createAsyncThunk(
  "banner/deleteList",
  async (id: string) => {
    try {
      const result = await bannerAPI.delete(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getBanner.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBanner.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.listBanner = payload;
    });
    builder.addCase(getBanner.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export default bannerSlice.reducer;
