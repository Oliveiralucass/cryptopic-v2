import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../utils/api';
import { IAuthSlice, ICreateAccount, ILogin } from '../../utils/interfaces';

export const createAccount = createAsyncThunk(
    'auth/createAccount',
    async (newUser: ICreateAccount) => {
        try{
            const response = await api.post('/auth/register', newUser)
            return console.log(response.data)
        } catch (error: any){
            return error.message
        }   
    }
)

export const handleLogin = createAsyncThunk(
    'auth/handleLogin',
    async (login: ILogin) => {
        try{
            const response = await api.post('/auth/login', login)
            return console.log(response.data)
        } catch (error: any){
            return error.message
        }   
    }
)



const initialState: IAuthSlice = {
    user: null,
    token: null,
    posts: [],
    loading: false,
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setCoinsLiked: (state, action) => {
            if(state.user) {
                state.user.profile.coinsLiked = action.payload.coinsLiked;
            } else {
                console.log('user friends non-existent'); 
            }
        },
        setPosts: (state, action) =>{
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map(post => {
                if(post._id === action.payload.post_id) return action.payload.post
                return post;
            })

            state.posts = updatedPosts;
        },
    },
    extraReducers(builder) {
        builder
        .addCase(createAccount.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(createAccount.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            console.log(action.payload)
        })
        .addCase(createAccount.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })
        .addCase(handleLogin.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(handleLogin.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            console.log(action.payload)
        })
        .addCase(handleLogin.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})

export const { setLogin, setLogout, setCoinsLiked, setPosts, setPost } = authSlice.actions;

export default authSlice.reducer;