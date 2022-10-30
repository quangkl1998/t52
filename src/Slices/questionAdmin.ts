import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PartnerAPI from "Services/PartnerAPIAdmin";
import QuestionAPIAdmin from "Services/questionAPIAdmin";

interface State {
    questions: any[];
    isloading: boolean;
    error?: string | null;
}

const initialState: State = {
    questions: [],
    isloading: false,
    error: null,
};

export const getQuestionList = createAsyncThunk(
    "question/getQuestionList",
    async () => {
        try {
            const data = await QuestionAPIAdmin.getQuestionList();
            return data;
        } catch (error) {
            throw error;
        }
    },
);

export const addQuestion = createAsyncThunk(
    "question/addQuestion",
    async (data: any) => {
        try {
            const result = await QuestionAPIAdmin.addQuestion(data);
            return result;
        } catch (error) {
            throw error;
        }
    },
);

export const updateQuestion = createAsyncThunk(
    "question/updateQuestion",
    async (data: any) => {
        try {
            const result = await QuestionAPIAdmin.updateQuestion(data);
            return result;
        } catch (error) {
            throw error;
        }
    },
);

export const deleteQuestion = createAsyncThunk(
    "question/deleteQuestion",
    async (id: string) => {
        try {
            const result = await QuestionAPIAdmin.deleteQuestion(id);
            return result;
        } catch (error) {
            throw error;
        }
    },
);

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getQuestionList.pending, (state) => {
            state.isloading = true;
        });

        builder.addCase(getQuestionList.fulfilled, (state, { payload }) => {
            state.isloading = false;
            state.questions = payload;
        });

        builder.addCase(getQuestionList.rejected, (state, { error }) => {
            state.isloading = true;
            state.error = error.message;
        });
    },
});

export default questionSlice.reducer;
