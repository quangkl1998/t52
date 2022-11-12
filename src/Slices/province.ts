import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import provinceAPI from "Services/provinceAPI";
interface State {
  list: any[];
  isloading: boolean;
  error?: string | null;
}

const initialState: State = {
  list: [],
  isloading: false,
  error: null,
};

export const getList = createAsyncThunk("province/getList", async () => {
  try {
    const data = await provinceAPI.getList();
    return data;
  } catch (error) {
    throw error;
  }
});

export const getById = createAsyncThunk(
  "province/getById",
  async (id: string) => {
    try {
      const data = await provinceAPI.getById(id);
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const add = createAsyncThunk("province/add", async (data: any) => {
  try {
    const result = await provinceAPI.add(data);
    return result;
  } catch (error) {
    throw error;
  }
});

export const deleteItem = createAsyncThunk(
  "province/deleteItem",
  async (id: string) => {
    try {
      const result = await provinceAPI.deleteItem(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const update = createAsyncThunk("province/update", async (data: any) => {
  try {
    const result = await provinceAPI.update(data);
    return result;
  } catch (error) {
    throw error;
  }
});

const provinceSlice = createSlice({
  name: "province",
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
    // getById

    builder.addCase(getById.pending, (state) => {
      state.isloading = true;
    });

    builder.addCase(getById.fulfilled, (state, { payload }) => {
      state.isloading = false;
      state.list = payload;
    });

    builder.addCase(getById.rejected, (state, { error }) => {
      state.isloading = true;
      state.error = error.message;
    });

    //end getById
  },
});
export default provinceSlice.reducer;
