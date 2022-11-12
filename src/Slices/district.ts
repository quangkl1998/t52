import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import districtAPI from "Services/districtAPI";
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

export const getList = createAsyncThunk("district/getList", async () => {
  try {
    const data = await districtAPI.getList();
    return data;
  } catch (error) {
    throw error;
  }
});

export const getById = createAsyncThunk(
  "district/getById",
  async (id: string) => {
    try {
      const data = await districtAPI.getById(id);
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const add = createAsyncThunk("district/add", async (data: any) => {
  try {
    const result = await districtAPI.add(data);
    return result;
  } catch (error) {
    throw error;
  }
});

export const deleteItem = createAsyncThunk(
  "district/deleteItem",
  async (id: string) => {
    try {
      const result = await districtAPI.deleteItem(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const update = createAsyncThunk("district/update", async (data: any) => {
  try {
    const result = await districtAPI.update(data);
    return result;
  } catch (error) {
    throw error;
  }
});

const districtSlice = createSlice({
  name: "district",
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
export default districtSlice.reducer;
