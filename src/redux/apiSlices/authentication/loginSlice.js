import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../config";

const initialState = {
    error:false,
    success:false,
    loading:false,
    isSuccess:false,
    user:{}
}

export const login = createAsyncThunk('login',async (value,thunkApi)=>{
    try{
        const response = await baseURL.post(`auth/login`,{email,password},{
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        localStorage.setItem('token', response?.data?.access_token);
        return response?.data.user
    }catch(error){
        const message = error?.message
        return thunkApi.rejectWithValue(message);
    }
})


export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state)=>{
            state.loading = true;
            state.isSuccess = false
        }),
        builder.addCase(login.fulfilled,(state,action)=>{
            state.error = false,
            state.success = true,
            state.loading = false,
            state.isSuccess = true,
            state.user = action.payload
        }),
        builder.addCase(login.rejected,(state)=>{
            state.error= true;
            state.success= false;
            state.loading= false;
            state.isSuccess = false;
            state.user= {}
        })
    }
})

export default loginSlice.reducer;