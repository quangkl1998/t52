import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserValues } from "Interface/auth";

interface State {
    user: UserValues | null;
    isLoading: boolean;
    error?: string;
}
const initialState: State = {
    user: null || JSON.parse(localStorage.getItem("user") as string),
    isLoading: false,
    error: undefined,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
