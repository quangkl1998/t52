import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import NewsAPI from "Services/NewsAPIAdmin";

interface State {
  newsList: any[];
  isloading: boolean;
  error?: string | null;
}

const initialState: State = {
  newsList: [],
  isloading: false,
  error: null,
};

export const getNewsList = createAsyncThunk("news/getNewList", async () => {
  try {
    const data = await NewsAPI.getNewList();

    return data;
  } catch (error) {
    throw error;
  }
});

export const addNews = createAsyncThunk("news/addNews", async (data: any) => {
  try {
    const result = await NewsAPI.addNews(data);
    return result;
  } catch (error) {
    throw error;
  }
});

export const uploadImage = createAsyncThunk(
  "news/uploadImage",
  async (data: any) => {
    try {
      const result = await NewsAPI.uploadImage(data);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

const newsSlice = createSlice({
  name: "news",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    // get list

    builder.addCase(getNewsList.pending, (state) => {
      state.isloading = true;
    });

    builder.addCase(getNewsList.fulfilled, (state, { payload }) => {
      state.isloading = false;
      state.newsList = payload.rows;
    });

    builder.addCase(getNewsList.rejected, (state, { error }) => {
      state.isloading = true;
      state.error = error.message;
    });

    // end get list
  },
});
export default newsSlice.reducer;
