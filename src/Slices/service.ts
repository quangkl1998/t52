import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import serviceAPI from "Services/serviceAPI";

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

export const getList = createAsyncThunk("service/getList", async () => {
  try {
    const data = await serviceAPI.getList();
    return data;
  } catch (error) {
    throw error;
  }
});

export const add = createAsyncThunk("service/add", async (data: any) => {
  try {
    const result = await serviceAPI.add(data);
    return result;
  } catch (error) {
    throw error;
  }
});

export const deleteItem = createAsyncThunk(
  "service/deleteItem",
  async (id: string) => {
    try {
      const result = await serviceAPI.deleteItem(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const update = createAsyncThunk("service/update", async (data: any) => {
  try {
    const result = await serviceAPI.update(data);
    return result;
  } catch (error) {
    throw error;
  }
});

const serviceSlice = createSlice({
  name: "service",
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
  },
});
export default serviceSlice.reducer;
