import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TagNewsAPIAdmin from "Services/TagNewsAPIAdmin";

interface State {
  tag: any[];

  isloading: boolean;
  error?: string | null;
}

const initialState: State = {
  tag: [],

  isloading: false,
  error: null,
};

export const getTagNewsList = createAsyncThunk(
  "TagNews/getTagNewsList",
  async () => {
    try {
      const data = await TagNewsAPIAdmin.getTagNewsList();
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const addTagNews = createAsyncThunk(
  "TagNews/addTagNews",
  async (data: any) => {
    try {
      const result = await TagNewsAPIAdmin.addTagNews(data);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const updateTagNews = createAsyncThunk(
  "TagNews/updateTagNews",
  async (data: any) => {
    try {
      const result = await TagNewsAPIAdmin.updateTagNews(data);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const deleteTagNews = createAsyncThunk(
  "TagNews/deleteTagNews",
  async (id: string) => {
    try {
      const result = await TagNewsAPIAdmin.deleteTagNews(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

const TagNewsSlice = createSlice({
  name: "tag",

  initialState,
  reducers: {},
  extraReducers(builder) {
    //getlist
    builder.addCase(getTagNewsList.pending, (state) => {
      state.isloading = true;
    });

    builder.addCase(getTagNewsList.fulfilled, (state, { payload }) => {
      state.isloading = false;
      state.tag = payload;
    });

    builder.addCase(getTagNewsList.rejected, (state, { error }) => {
      state.isloading = true;
      state.error = error.message;
    });

    //end getlist
  },
});
export default TagNewsSlice.reducer;
