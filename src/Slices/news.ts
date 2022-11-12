import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserValues } from "Interface/auth";
import newsAPI from "Services/newsAPI";

interface State {
  newsDetail: any;
  listNew: any;
  listNewPagination: any;
  isLoading: boolean;
  error?: string;
}
const initialState: State = {
  newsDetail: null,
  listNew: [],
  listNewPagination: {
    pageAt: 0,
    totalItem: 0,
    totalPages: 0,
    content: [],
  },
  isLoading: false,
  error: undefined,
};

export const getNews = createAsyncThunk("news/getNews", async () => {
  try {
    const listNew = newsAPI.getNews();
    return listNew;
  } catch (error) {
    throw error;
  }
});
export const getNewsLimit = createAsyncThunk(
  "news/getNewsLimit",
  async (limit: any) => {
    try {
      const listNew = newsAPI.getNewsLimit(limit);
      return listNew;
    } catch (error) {
      throw error;
    }
  },
);
export const getNewDetail = createAsyncThunk(
  "news/getNewDetail",
  async (slug: string) => {
    try {
      const newsDetail = newsAPI.getNewDetail(slug);
      return newsDetail;
    } catch (error) {
      throw error;
    }
  },
);
export const getNewPagination = createAsyncThunk(
  "news/getNewPagination",
  async (para: any) => {
    try {
      const listNew = newsAPI.getNewPagination(para);
      return listNew;
    } catch (error) {
      throw error;
    }
  },
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsDetail: (state, { payload }) => {
      state.newsDetail = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getNews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNews.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.listNew = payload?.rows;
    });
    builder.addCase(getNews.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(getNewsLimit.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNewsLimit.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.listNew = payload;
    });
    builder.addCase(getNewsLimit.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(getNewDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNewDetail.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.newsDetail = payload;
    });
    builder.addCase(getNewDetail.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(getNewPagination.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNewPagination.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      let a = state.listNewPagination.content;
      payload.content.map((e: any) => {
        a.push(e);
      });

      state.listNewPagination = { ...payload };
      state.listNewPagination.content = a;
    });
    builder.addCase(getNewPagination.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export const { setNewsDetail } = newsSlice.actions;

export default newsSlice.reducer;
