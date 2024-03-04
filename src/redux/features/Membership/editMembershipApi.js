import { baseApi } from "../../api/baseApi";

const editMembershipApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        editMembership : builder.mutation({
            query:(values)=>{
                console.log(values);
               return {
                url:`/membership/${values?._id}`,
                method:'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body:values
            }
        }}),
        invalidatesTags:['membership']
    })
})

export const {useEditMembershipMutation} = editMembershipApi;