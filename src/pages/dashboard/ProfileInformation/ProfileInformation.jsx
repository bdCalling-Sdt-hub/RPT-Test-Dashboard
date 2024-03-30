import { Input } from "antd";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";

const ProfileInformation = () => {
  const [currentUser,setCurrentUser] = useState()
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL;
  useEffect(()=>{
    const storedUser = localStorage.getItem('user-update');
    const user = JSON.parse(storedUser);
    console.log(user);
    setCurrentUser(user);
  },[])
  console.log(currentUser);
  return (
    <div>
      <div className="flex justify-between items-center ml-[24px] mt-[40px] mb-[63px]">
        <h1 className="text-[30px] font-medium">Profile Information</h1>
        <div
            onClick={(e) =>navigate(`/dashboard/edit-profile/${currentUser?.id}`)}
          className="flex gap-2 items-center py-[15px]
                 px-[40px]
                  bg-[#3BA6F6]
                  rounded-lg
                  text-white
                  cursor-pointer
                  "
        >
          <FaEdit size={17} />
          <p>Edit Profile</p>
        </div>
      </div>
      <div className="lg:flex  ml-[24px] bg-white p-[36px] rounded-xl">
        <div className="w-[33%] ml-[24px] flex flex-col justify-center items-center gap-[30px]">
          <img
            className="w-[242px] h-[242px] rounded-full"
            src={`${baseUrl}${currentUser?.image?.url}`}
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <p className="text-[20px] text-[#4E4E4E]">{currentUser?.role.toUpperCase()}</p>
            <h1 className="text-[#222222] text-[30px] font-medium">
             {currentUser?.name.toUpperCase()}
            </h1>
          </div>
        </div>

        <div className="flex-1 w-[66%]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex gap-[25px]">
              <div className="flex-1">
                <label
                  htmlFor=""
                  className="text-[#222222] text-[18px] font-medium"
                >
                  Name
                </label>
                <Input
              
                  placeholder="First name"
                  value={currentUser?.name}
                  className="p-4 bg-[#EBF6FE]
               rounded w-full 
               justify-start 
               border-none
               mt-[12px]
               items-center 
               gap-4 inline-flex outline-none focus:border-none focus:bg-[#EBF6FE] hover:bg-[#EBF6FE]"
                  type="text"
                  readOnly
                />
              </div>
              
            </div>
            <div className="flex-1">
              <label
                htmlFor=""
                className="text-[#222222] text-[18px] font-medium mb-[12px]"
              >
                Email
              </label>
              <Input
          
                placeholder="Email"
                value={currentUser?.email}
                className="p-4 bg-[#EBF6FE]
              mt-[12px]
               rounded w-full 
               justify-start 
               border-none
               items-center 
               gap-4 inline-flex outline-none focus:border-none focus:bg-[#EBF6FE] hover:bg-[#EBF6FE]"
                type="text"
                readOnly
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor=""
                className="text-[#222222] text-[18px] font-medium mb-[12px]"
              >
                Phone Number
              </label>
              <Input
            
                placeholder="Phone Number"
                value={currentUser?.phoneNumber}
                className="p-4 bg-[#EBF6FE]
              mt-[12px]
               rounded w-full 
               justify-start 
               border-none
               items-center 
               gap-4 inline-flex outline-none focus:border-none focus:bg-[#EBF6FE] hover:bg-[#EBF6FE]"
                type="text"
                readOnly
              />
            </div>
            {/* <div className="flex-1">
              <label
                htmlFor=""
                className="text-[#222222] text-[18px] font-medium mb-[12px]"
              >
                Date Of Birth
              </label>
              <Input
                // onChange={(e) => setDateOfBirth(e.target.value)}
                placeholder="Date Of Birth"
                value={currentUser?.dateOfBirth}
                className="p-4 bg-[#EBF6FE]
                rounded w-full 
                justify-start 
                border-none
                mt-[12px]
                items-center 
                gap-4 inline-flex outline-none focus:border-none focus:bg-[#EBF6FE] hover:bg-[#EBF6FE]"
                prefix={<CiCalendarDate size={20} />}
               
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
