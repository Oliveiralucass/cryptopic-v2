import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../utils/api";
import { IClaimSlice, IUser } from "../../utils/interfaces";

export interface IAddContent {
    xp: number,
    safyr: number,
    userId: string,
    contentId: string
}

export const addGlossaryContent = createAsyncThunk(
    'createContent/addGlossaryContent',
    async ({xp, safyr, userId, contentId}: IAddContent) => {
        try {
            const postData = {
                xp,
                safyr
            }

            const response = await api.post(`/userContent/${userId}/glossaryContentCompleted/${contentId}`, postData)
            return response.data
        } catch (error: any){
            return error.message
        }   
    }
)

export const addDiscoverContent = createAsyncThunk(
    'createContent/addDiscoverContent',
    async ({xp, safyr, userId, contentId}: IAddContent) => {
        try {
            const postData = {
                xp,
                safyr
            }

            const response = await api.post(`/userContent/${userId}/discoverContentCompleted/${contentId}`, postData)
            return response.data
        } catch (error: any){
            return error.message
        }   
    }
)

export const addExpeditionContent = createAsyncThunk(
    'createContent/addExpeditionContent',
    async ({xp, safyr, userId, contentId}: IAddContent) => {
        try {
            const postData = {
                xp,
                safyr
            }

            const response = await api.post(`/userContent/${userId}/expeditionContentCompleted/${contentId}`, postData)
            return response.data
        } catch (error: any){
            return error.message
        }   
    }
)

const initialState: IClaimSlice = {
    data: null,
    loading: false,
    error: null,
}

export const claimSlice = createSlice({
    name: 'claim',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(addGlossaryContent.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(addGlossaryContent.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(addGlossaryContent.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })


        .addCase(addDiscoverContent.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(addDiscoverContent.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(addDiscoverContent.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })


        .addCase(addExpeditionContent.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(addExpeditionContent.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(addExpeditionContent.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default claimSlice.reducer