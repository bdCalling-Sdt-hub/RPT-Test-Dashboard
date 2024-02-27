import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Dropdown, Button, Menu } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import SearchBox from "../SearchBox/SearchBox";
const Header = () => {
  const date = new Date(); // Assuming the input date is in ISO 8601 format (YYYY-MM-DD)

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const userData = JSON.parse(localStorage.getItem("yourInfo"));
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  // const notificationData = [
  //   {
  //     id: 1,
  //     message: "You have received $500 from John Doe",
  //     date: "Fri, 12:30pm",
  //   },
  //   {
  //     id: 2,
  //     message:
  //       "New Appointment has created With John Doe at 10:20am, 20/11/2023",
  //     date: "Fri, 12:30pm",
  //   },
  //   {
  //     id: 3,
  //     message: "You have received $500 from John Doe",
  //     date: "Fri, 12:30pm",
  //   },
  //   {
  //     id: 4,
  //     message: "You have received $500 from John Doe",
  //     date: "Fri, 12:30pm",
  //   },
  //   {
  //     id: 5,
  //     message: "You have received $500 from John Doe",
  //     date: "Fri, 12:30pm",
  //   },
  //   {
  //     id: 6,
  //     message: "You have received $500 from John Doe",
  //     date: "Fri, 12:30pm",
  //   },
  // ];

  // const menu = (
  //   <Menu>
  //     <Menu.Item
  //       disabled
  //       className="bg-white hover:bg-white border-b-2 rounded-none border-b-primary"
  //     >
  //       <div className="flex justify-between  items-center">
  //         <h1 className="text-[24px] text-primary mx-auto font-bold">
  //           Notifications
  //         </h1>
  //       </div>
  //     </Menu.Item>

  //     {notificationData.slice(0, 5).map((data) => (
  //       <Menu.Item key={data?.id}>
  //         <div className="flex justify-between items-center gap-3">
  //           <div>
  //             <IoIosNotificationsOutline
  //               style={{ cursor: "pointer" }}
  //               className={` bg-secondary w-[40px] h-[40px] rounded-[4px] text-primary p-1 `}
  //             />
  //           </div>
  //           <div className="w-[360px]">
  //             <h1>{data?.message}</h1>
  //             <p>{data?.date}</p>
  //           </div>
  //         </div>
  //       </Menu.Item>
  //     ))}

  //     <Menu.Item>
  //       <div className="flex justify-center mx-auto items-center gap-3">
  //         <button
  //           onClick={(e) => navigate("/notification")}
  //           className="bg-primary text-white rounded-[4px] px-[16px] py-[8px]"
  //         >
  //           Load More
  //         </button>
  //       </div>
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <div className="flex justify-between items-center rounded-md mb-[24px] p-[16px] bg-[#FFFFFF]">
      <div>
        <MdMenu className="h-[42px] w-[42px] text-[#3BA6F6]" />
      </div>
      <div className="">
        <SearchBox />
      </div>
      <div className="flex gap-5">
        {/* <Dropdown overlay={menu} placement="bottomRight" arrow> */}
          <div
              onClick={(e) => navigate("notification")}
            className="relative flex items-center "
          >
            <Badge style={{backgroundColor:"#3BA6F6"}} count={5}>
              <IoIosNotificationsOutline
                style={{ cursor: "pointer" }}
                className={` bg-primary w-[52px] h-[52px] text-[#3BA6F6] border-2 border-[#3BA6F6] rounded-full p-2 `}
              />
            </Badge>
          </div>
        {/* </Dropdown> */}
        <div onClick={() => navigate("profileinformation")} className="flex items-center cursor-pointer mr-[30px] bg-primary text-white rounded-full p-1">
          <FaRegUser className="text-[#3BA6F6] border-2 border-[#3BA6F6] rounded-full p-2 w-[52px] h-[52px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
