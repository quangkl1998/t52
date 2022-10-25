import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LoginAPI from "Services/LoginAPI";
interface State {
  loginresult: any;
  isloading: boolean;
  error?: string;
}
const initialState: State = {
  loginresult: null || JSON.parse(localStorage.getItem("user") as string),
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

const LoginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
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
  },
});
export default LoginSlice.reducer;
