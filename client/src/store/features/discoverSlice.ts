import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDiscover } from "../../utils/interfaces";
import { api } from '../../utils/api'

export const getDiscoverContents = createAsyncThunk(
    "discover/getDiscoverContents",
    async (data, thunkApi) => {
        try{ 
            const response = await api.get<IDiscover[]>('/discover')
            return response.data.sort((a, b) => (a.title > b.title) ? 1 : -1)
        } catch(err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

interface PostState {
    loading: boolean,
    error: null | string,
    data: null | IDiscover[]
}

const initialState = {
    loading: false,
    error: null,
    data: null
} as PostState



const discoverSlice = createSlice({
    name: 'discover',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getDiscoverContents.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getDiscoverContents.fulfilled, (state, action: PayloadAction<IDiscover[]>) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getDiscoverContents.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default discoverSlice.reducer