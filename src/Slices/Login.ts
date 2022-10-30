import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LoginAPI from "Services/LoginAPI";
interface State {
  loginresult: any;
  managers: any;
  isloading: boolean;
  error?: string;
}
const initialState: State = {
  loginresult: null || JSON.parse(localStorage.getItem("user") as string),
  managers: [],
  isloading: false,
  error: undefined,
};

export const LoginAction = createAsyncThunk("auth/Login", async (data: any) => {
  try {
    const result = await LoginAPI.LoginAction(data);
    return result;
  } catch (error) {
    throw error;
  }
});

export const getManagerList = createAsyncThunk(
  "auth/getManagerList",
  async () => {
    try {
      const data = await LoginAPI.getManagerList();
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const addManagerAdmin = createAsyncThunk(
  "auth/addManagerAdmin",
  async (data: any) => {
    try {
      const result = await LoginAPI.addManagerAdmin(data);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const updateManagerAdmin = createAsyncThunk(
  "auth/updateManagerAdmin",
  async (data: any) => {
    try {
      const result = await LoginAPI.updateManagerAdmin(data);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const deleteManagerAdmin = createAsyncThunk(
  "auth/deleteManagerAdmin",
  async (id: string) => {
    try {
      const result = await LoginAPI.deleteManagerAdmin(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

const LoginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    //Login
    builder.addCase(LoginAction.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(LoginAction.fulfilled, (state, { payload }) => {
      state.isloading = false;
      state.loginresult = payload;
    });
    builder.addCase(LoginAction.rejected, (state, { error }) => {
      state.isloading = true;
      state.error = error.message;
    });
    //End Login

    // get Manager
    builder.addCase(getManagerList.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getManagerList.fulfilled, (state, { payload }) => {
      state.isloading = false;
      state.managers = payload;
    });
    builder.addCase(getManagerList.rejected, (state, { error }) => {
      state.isloading = true;
      state.error = error.message;
    });
    // End Manager
  },
});
export default LoginSlice.reducer;
