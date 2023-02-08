import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, coinGeckoApi } from "../../utils/api";
import { ICoin, ICoingeckoQuery, ICoinPost, ICoinSlice } from "../../utils/interfaces";

export const getCoinsList = createAsyncThunk(
    "coin/getCoinsList",
    async (data, thunkApi) => {
        try{ 
            const response = await api.get<ICoin[]>('/coins')
            return response.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
        } catch(err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

export const createCoin = createAsyncThunk(
    "coin/createCoin",
    async (newCoin: ICoinPost, thunkApi) => { 
        try{
            const response = await api.post<ICoinPost>('/coins', newCoin)
            return response.data
        } catch(err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)


export const getCoingeckoCoinById = createAsyncThunk(
    'coin/getCoingeckoCoinById',
    async(coin: string, thunkApi) => {
        try{
            const response = await coinGeckoApi.get(`/coins/${coin}`)
            return response.data
        } catch(err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

export const getCoingeckoCoinsList = createAsyncThunk(
    'coin/getCoingeckoCoinsList',
    async({currency, page, perPage}: ICoingeckoQuery,  thunkApi) => {
        try{
            const response = await coinGeckoApi.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
        } catch(err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

const initialState = {
    loading: false,
    error: null,
    data: null,
    selectedCoin: null,
    selectedCoingeckoCoin: null,
    coingeckoData: null
} as ICoinSlice

const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(getCoinsList.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getCoinsList.fulfilled, (state, action: PayloadAction<ICoin[]>) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getCoinsList.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })
        
        
        .addCase(createCoin.pending, (state) => {
            state.loading = false;
        })
        .addCase(createCoin.fulfilled, (state) => {
            state.loading = false;
        })
        .addCase(createCoin.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })


        .addCase(getCoingeckoCoinsList.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getCoingeckoCoinsList.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.coingeckoData = action.payload;
        })
        .addCase(getCoingeckoCoinsList.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })


        .addCase(getCoingeckoCoinById.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getCoingeckoCoinById.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.selectedCoingeckoCoin = action.payload;
        })
        .addCase(getCoingeckoCoinById.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})
export default coinSlice.reducer