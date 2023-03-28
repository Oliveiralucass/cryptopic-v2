import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../utils/api";
import { IUser } from "../../utils/interfaces";

export const getUserByUsername = createAsyncThunk(
    'user/getUserById',
    async (id: string) => {
        try {   
            const response = await api.get(`/users/${id}`)
            return response.data
        } catch (error: any){
            return error.message
        }   
    }
)

export interface ILikePost{
    postId: string,
    userId: string
}

export const likePost = createAsyncThunk(
    'post/likePost',
    async ({postId, userId}: ILikePost, thunkApi) =>{
        try {

            const data = {userId}

            const response = await api.patch(`/posts/${postId}/like`, data)
            return response.data
        }  catch(err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

export interface IUserSlice{
    selectedUser: IUser | null,
    allUsers: IUser[] | null
    loading: boolean,
    error: string | null
}

const initialState: IUserSlice = {
    selectedUser: null,
    allUsers: null,
    loading: false,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getUserByUsername.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getUserByUsername.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.selectedUser = action.payload
        })
        .addCase(getUserByUsername.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })

        
        .addCase(likePost.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(likePost.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
        })
        .addCase(likePost.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default userSlice.reducer