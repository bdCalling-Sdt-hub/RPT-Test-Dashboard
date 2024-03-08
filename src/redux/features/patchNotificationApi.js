import {baseApi} from "../api/baseApi";

const patchNotificationApi = baseApi.injectEndpoints({
    endpoints:(builder)=>{
       
       return{
            patchNotification:builder.mutation({
                query:(_id)=>({
                    url:`/notification/${_id}`,
    
                    method: 'PATCH',
                    body:''
                }),
                invalidatesTags: [{ type: "notification", id: "LIST" }],
                onSuccess: (_, _variables, api) => {
                    api.invalidateTags("notification");
                }
            })
        }
    }
        
        
        
    
    
})

export const {usePatchNotificationMutation} = patchNotificationApi;