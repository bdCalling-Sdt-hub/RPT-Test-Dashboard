import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import baseURL from "../../config";
import { useState } from "react";
import { usePatchNotificationMutation } from "../../redux/features/patchNotificationApi";


const NotificationCart = ({item}) => {
    const {createdAt,message,title, linkId,_id,viewStatus
        } = item;
        const [setId,result] = usePatchNotificationMutation()

        // function formatDate(inputDate) {
        //     const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        //     const date = new Date(inputDate);
        //     const dayOfWeek = daysOfWeek[date.getUTCDay()];
        //     const hours = date.getUTCHours();
        //     const minutes = date.getUTCMinutes();
        //     const ampm = hours >= 12 ? 'pm' : 'am';
        //     const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        //     const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        
        //     const formattedDate = `${dayOfWeek}, ${formattedHours}:${formattedMinutes}${ampm}`;
        
        //     return formattedDate;
        // }
        console.log(result);
        function calculateTimeDifference(dateString) {
            const now = new Date();
            const date = new Date(dateString);
        
            const secondsAgo = Math.floor((now - date) / 1000);
            const minutesAgo = Math.floor(secondsAgo / 60);
            const hoursAgo = Math.floor(minutesAgo / 60);
            const daysAgo = Math.floor(hoursAgo / 24);
            const yearsAgo = Math.floor(daysAgo / 365);
        
            if (yearsAgo > 0) {
              return yearsAgo === 1 ? "1 year ago" : `${yearsAgo} years ago`;
            } else if (daysAgo > 0) {
              return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
            } else if (hoursAgo > 0) {
              return hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`;
            } else if (minutesAgo > 0) {
              return minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`;
            } else {
              return "just now";
            }
        }
        const handleActiveNotification = async() =>{
          console.log("aiman");
          try {
            // const response = await baseURL.patch(`/notification/${_id}`,{},{
            //   headers: {
            //       "Content-Type": "application/json",
            //       authorization: `Bearer ${localStorage.getItem('token')}`,
                 
            //   }});
      
            // console.log(response.data.code)
            setId(_id)
            
          } catch (error) {
            console.log(error);
          }

        }
       return(
        <Link to={`/dashboard/appointments/appointment-details/${linkId}`} onClick={handleActiveNotification}   className={`flex rounded-lg my-[16px]  ${
          viewStatus ? "bg-white" : "bg-[#e8e6fca8]"
      } p-[16px] gap-[16px] justify-between items-center`} >
        <div className={`flex gap-[16px] items-center p-[16px] `}>
              {/* <div className="w-10 h-10 flex p-[7px] rounded bg-[#EEF6EA] "> */}
              <IoIosNotificationsOutline
                style={{ cursor: "pointer" }}
                className={` bg-primary w-[52px] h-[52px] text-[#3BA6F6] border-2 border-[#3BA6F6] rounded-full p-2 `}
              />
              {/* </div> */}
              
                <h1 className="text-[16px] font-normal">
                    {`Ahad`} has booked an appointment for {message}.
                </h1>
                {/* <p className="text-[14px] text-[#979797]">{formatDate(createdAt)}</p> */}
            
            </div>
            <div>
                <small>{calculateTimeDifference(createdAt)}</small>
            </div>
            </Link>
    );
}

export default NotificationCart;
