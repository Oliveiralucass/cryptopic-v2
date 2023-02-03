import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../utils/api";
import { IClaimSlice, IUser } from "../../utils/interfaces";

export interface IAddGlossaryContent {
    xp: number,
    safyr: number,
    userId: string,
    glossaryId: string
}

export const addGlossaryContent = createAsyncThunk(
    'createContent/addGlossaryContent',
    async ({xp, safyr, userId, glossaryId}: IAddGlossaryContent) => {
        try {

            const postData = {
                xp,
                safyr
            }

            const response = await api.post(`/userContent/${userId}/glossaryContentCompleted/${glossaryId}`, postData)
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
    }
})

export default claimSlice.reducer