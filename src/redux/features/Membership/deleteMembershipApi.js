import { baseApi } from "../../api/baseApi";

const deleteMembershipApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        deleteMembership : builder.mutation({
            query:(id)=>{
                console.log(id);
               return {
                url:`/membership/${id}`,
                method:'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }
        }}),
        invalidatesTags:['membership']
    })
})

export const {useDeleteMembershipMutation} = deleteMembershipApi;