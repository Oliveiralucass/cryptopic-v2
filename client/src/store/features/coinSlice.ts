import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, coinGeckoApi } from "../../utils/api";
import { ICoin, ICoingeckoQuery, ICoinPost, ICoinSlice, IPost } from "../../utils/interfaces";

export const getCoinsList = createAsyncThunk(
    'coin/getCoinsList',
    async (data, thunkApi) => {
        try{ 
            const response = await api.get<ICoin[]>('/coins')
            return response.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
        } catch(err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

export const getCoinById = createAsyncThunk(
    'coin/getCoinById',
    async (coinId: string, thunkApi) => {
        try{ 
            const response = await api.get<ICoin>(`/coins/${coinId}`)
            return response.data
        } catch(err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }

)

export const createCoin = createAsyncThunk(
    'coin/createCoin',
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
    async({currency, page, perPage}: ICoingeckoQuery, thunkApi) => {
        try{
            const response = await coinGeckoApi.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
            return response.data
        } catch(err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

export interface ILikeCoin {
    id: string, 
    coinId: string
}




export const likeCoin = createAsyncThunk(
    'coin/likeCoin',
    async({id, coinId}: ILikeCoin, thunkApi) => {
        try{
            const response = await api.post(`/coins/${id}/likeCoin/${coinId}`)
            return response.data
        } catch(err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

export interface ICreatePost {
    userId: string,
    coinId: string,
    title: string, 
    message: string,
    coinApiId: string
}

export const createPost = createAsyncThunk(
    'coin/createPost',
    async({ userId, coinId, title, message, coinApiId }: ICreatePost, thunkApi) => {
        try { 
            const post = {
                userId,
                coinId,
                title,
                message,
                coinApiId
            }

            const response = await api.post('/posts', post, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            return response.data
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

export const getPostById = createAsyncThunk(
    'post/getPostById',
    async(postId: String, thunkApi) => {
        try {
            const response = await api.get(`/posts/${postId}`)

            return response.data
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

export const getDefaultPostsFeed = createAsyncThunk(
    'post/getDefaultPostsFeed',
    async(data, thunkApi) => {
        try {
            const response = await api.get(`/posts`)

            return response.data
        } catch (err: any) {
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
    postFeed: null,
    selectedPost: null,
    coingeckoData: null,
    activeFiat: {locale: 'pt-BR', currency: 'usd'}
} as ICoinSlice

const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers:{
        setActiveFiat: (state, action) => {
            state.activeFiat = action.payload
        }
    },
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


        .addCase(getCoinById.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getCoinById.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.selectedCoin = action.payload;
        })
        .addCase(getCoinById.rejected, (state, action: PayloadAction<any>) => {
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


        .addCase(likeCoin.pending, (state) => {
            state.loading = true;
        })
        .addCase(likeCoin.fulfilled, (state) => {
            state.loading = false;
        })
        .addCase(likeCoin.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })


        .addCase(createPost.pending, (state) => {
            state.loading = true;
        })
        .addCase(createPost.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.selectedCoin = action.payload
        })
        .addCase(createPost.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })


        .addCase(getPostById.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getPostById.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.selectedPost = action.payload;
        })
        .addCase(getPostById.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })


        .addCase(getDefaultPostsFeed.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getDefaultPostsFeed.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.postFeed = action.payload;
        })
        .addCase(getDefaultPostsFeed.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})
export default coinSlice.reducer