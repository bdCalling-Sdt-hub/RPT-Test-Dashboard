import { baseApi } from "../api/baseApi";

const getAppointmentApi = baseApi.injectEndpoints({
    endpoints:(builder)=>{
       
       return{
            getMembership:builder.query({
                query:(page)=>{
                    console.log(page)
                 return `/membership?page=${page}`
                }
            })
        }
    }
        
        
        
    
    
})

export const {useGetMembershipQuery} = getAppointmentApi;