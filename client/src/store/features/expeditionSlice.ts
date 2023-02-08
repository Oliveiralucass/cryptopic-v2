import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExpedition } from "../../utils/interfaces";
import { api } from '../../utils/api'

export const getExpeditionContents = createAsyncThunk(
    "expedition/getExpeditionContents",
    async (data, thunkApi) => {
        try{ 
            const response = await api.get<IExpedition[]>('/expedition')
            return response.data.sort((a, b) => (a.title > b.title) ? 1 : -1)
        } catch(err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

interface PostState {
    loading: boolean,
    error: null | string,
    data: null | IExpedition[]
}

const initialState = {
    loading: false,
    error: null,
    data: null
} as PostState



const expeditionSlice = createSlice({
    name: 'expedition',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getExpeditionContents.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getExpeditionContents.fulfilled, (state, action: PayloadAction<IExpedition[]>) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getExpeditionContents.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default expeditionSlice.reducer