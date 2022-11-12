import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import feedbackAPI from "Services/feedbackAPI";

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

export const getFeedbackList = createAsyncThunk(
    "feedback/getFeedbackList",
    async () => {
        try {
            const data = await feedbackAPI.getFeedbackList();
            return data;
        } catch (error) {
            throw error;
        }
    },
);

export const addFeedback = createAsyncThunk(
    "feedback/addFeedback",
    async (data: any) => {
        try {
            const result = await feedbackAPI.addFeedback(data);
            return result;
        } catch (error) {
            throw error;
        }
    },
);

export const deleteFeedback = createAsyncThunk(
    "feedback/deleteFeedback",
    async (id: string) => {
        try {
            const result = await feedbackAPI.deleteFeedback(id);
            return result;
        } catch (error) {
            throw error;
        }
    },
);

export const updateFeedback = createAsyncThunk(
    "feedback/updateFeedback",
    async (data: any) => {
        try {
            const result = await feedbackAPI.updateFeedback(data);
            return result;
        } catch (error) {
            throw error;
        }
    },
);

const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get list

        builder.addCase(getFeedbackList.pending, (state) => {
            state.isloading = true;
        });

        builder.addCase(getFeedbackList.fulfilled, (state, { payload }) => {
            state.isloading = false;
            state.list = payload;
        });

        builder.addCase(getFeedbackList.rejected, (state, { error }) => {
            state.isloading = true;
            state.error = error.message;
        });

        //end get list
    },
});
export default feedbackSlice.reducer;
