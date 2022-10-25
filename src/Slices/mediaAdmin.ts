import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MediaAdminAPI from "Services/mediaAdminAPI";

interface State {
  media: any[];

  isloading: boolean;
  error?: string | null;
}

const initialState: State = {
  media: [],

  isloading: false,
  error: null,
};

export const getMediaAdminList = createAsyncThunk(
  "media/getMediaAdminList",
  async () => {
    try {
      const data = await MediaAdminAPI.getMediaAdminList();
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const addMediaAdmin = createAsyncThunk(
  "media/addMediaAdmin",
  async (data: any) => {
    try {
      const result = await MediaAdminAPI.addMediaAdmin(data);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const updateMediaAdmin = createAsyncThunk(
  "media/updateMediaAdmin",
  async (data: any) => {
    try {
      const result = await MediaAdminAPI.updateMediaAdmin(data);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const deleteMediaAdmin = createAsyncThunk(
  "media/deleteMediaAdmin",
  async (id: string) => {
    try {
      const result = await MediaAdminAPI.deleteMediaAdmin(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

const MediaAdminSlice = createSlice({
  name: "media",

  initialState,
  reducers: {},
  extraReducers(builder) {
    //getlist
    builder.addCase(getMediaAdminList.pending, (state) => {
      state.isloading = true;
    });

    builder.addCase(getMediaAdminList.fulfilled, (state, { payload }) => {
      state.isloading = false;
      state.media = payload;
    });

    builder.addCase(getMediaAdminList.rejected, (state, { error }) => {
      state.isloading = true;
      state.error = error.message;
    });

    //end getlist
  },
});
export default MediaAdminSlice.reducer;
