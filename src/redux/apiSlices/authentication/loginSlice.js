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
    console.log("redux",value);
    try{
        const response = await baseURL.post(`auth/login`,value,{
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        console.log(response);
        console.log(response?.data?.data?.attributes?.tokens?.access?.token);
        localStorage.setItem('token', response?.data?.data?.attributes?.tokens?.access?.token);
        localStorage.setItem('login-user',JSON.stringify(response?.data?.data?.attributes))
        localStorage.setItem('user-update',JSON.stringify(response?.data?.data?.attributes?.user))
        return response?.data?.data?.attributes?.user
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