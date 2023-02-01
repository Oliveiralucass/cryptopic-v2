import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../utils/api";
import { IGlossary } from "../../utils/interfaces";

export const getGlossaryContents = createAsyncThunk(
    'glossary/getGlossaryContents',
    async (data, thunkApi) => {
        try{
            const response = await api.get<IGlossary[]>('/glossary')
            return response.data
        } catch (error: any){
            return thunkApi.rejectWithValue(error.message)
        }   
    }
)

interface PostState {
    loading: boolean,
    error: null | string,
    data: null | IGlossary[]
}

const initialState = {
    loading: false,
    error: null,
    data: null
} as PostState

const glossarySlice = createSlice({
    name: 'glossary',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(getGlossaryContents.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getGlossaryContents.fulfilled, (state, action: PayloadAction<IGlossary[]>) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getGlossaryContents.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default glossarySlice.reducer