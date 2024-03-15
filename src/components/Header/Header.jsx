import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Badge, Dropdown, Button, Menu } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import SearchBox from "../SearchBox/SearchBox";
import { useGetNotificationQuery } from "../../redux/features/getNotificationApi";
import { io } from "socket.io-client";
import Loading from "../Loading/Loading";
const Header = () => {
  const date = new Date(); // Assuming the input date is in ISO 8601 format (YYYY-MM-DD)
  
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const userData = JSON.parse(localStorage.getItem("yourInfo"));
  const {data,isError,isLoading,isSuccess} = useGetNotificationQuery(1);
  const [socketNotification,setSocketNotification] = useState([]);
  useEffect(()=>{
    const socketNotification = io("ws://103.145.138.54:8282");
    socketNotification.on("connect",()=>{
      socketNotification.on("admin-notification",(data)=>{
        console.log(data);
        setSocketNotification(data);
      })
    })
    socketNotification.off("admin-notification", data)
  },[])


  const notification = data?.data?.attributes;
  console.log(notification);
  const socketNotifications = socketNotification?.data?.totalUnreadNotifications;
  const navigate = useNavigate();
  if(isLoading){
    return <Loading/>
  }
  return (
    <div className="flex justify-between items-center rounded-md mb-[24px] p-[16px] bg-[#FFFFFF]">
      <div className="flex items-center gap-5">
        <MdMenu className="h-[42px] w-[42px] text-[#3BA6F6]" />
        {/* {
          location.pathname == "/dashboard/users" || location.pathname == '/dashboard/appointments' || location.pathname == '/dashboard/earnings' ? <div className="">
          <SearchBox />
        </div>:<></>
        } */}
        
      </div>

      <div className="flex gap-5">
        {/* <Dropdown overlay={menu} placement="bottomRight" arrow> */}
        <div
          onClick={(e) => navigate("notification")}
          className="relative flex items-center "
        >
          <Badge style={{ backgroundColor: "#3BA6F6" }} count={ socketNotifications ? socketNotifications : notification?.totalUnreadNotifications
}>
            <IoIosNotificationsOutline
              style={{ cursor: "pointer" }}
              className={` bg-primary w-[52px] h-[52px] text-[#3BA6F6] border-2 border-[#3BA6F6] rounded-full p-2 `}
            />
          </Badge>
        </div>
        {/* </Dropdown> */}
        <div
          onClick={() => navigate("profile-information")}
          className="flex items-center cursor-pointer mr-[30px] bg-primary text-white rounded-full p-1"
        >
          <FaRegUser className="text-[#3BA6F6] border-2 border-[#3BA6F6] rounded-full p-2 w-[52px] h-[52px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
