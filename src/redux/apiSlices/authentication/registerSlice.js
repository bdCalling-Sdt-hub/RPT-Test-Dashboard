import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    profile: {},
  };

export const register = createAsyncThunk(
    'registration/registerUser',
    async (userData, thunkApi) => {
        try{
            const response = await baseURL.post(`auth/register`);
            return response?.data;
        }catch(error){
            const axiosError = error;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const registerSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(register.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(register.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.profile= action.payload.data.data
        }),
        builder.addCase(register.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.profile= {}
        })
    }
})



export default registerSlice.reducer