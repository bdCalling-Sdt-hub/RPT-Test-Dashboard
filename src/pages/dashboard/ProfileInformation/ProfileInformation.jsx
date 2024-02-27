import { Input } from "antd";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";

const ProfileInformation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  console.log(value);
  return (
    <div>
      <div className="flex justify-between items-center ml-[24px] mt-[40px] mb-[63px]">
        <h1 className="text-[30px] font-medium">Profile Information</h1>
        <div
            onClick={(e) =>navigate("/dashboard/editprofile")}
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
            src="https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <p className="text-[20px] text-[#4E4E4E]">Admin</p>
            <h1 className="text-[#222222] text-[30px] font-medium">
              Bessie Cooper
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
                  First Name
                </label>
                <Input
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
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
              <div className="flex-1">
                <label
                  htmlFor=""
                  className="text-[#222222] text-[18px] font-medium mb-[12px]"
                >
                  Last Name
                </label>
                <Input
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="First name"
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
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
              <PhoneInput
                placeholder="Enter phone number"
                international
                countryCallingCodeEditable={false}
                style={{
                    marginTop:"12px",
                   
                }}
                defaultCountry="US"
                value={value}
                onChange={(e)=>console.log(e)}
                
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor=""
                className="text-[#222222] text-[18px] font-medium mb-[12px]"
              >
                Date Of Birth
              </label>
              <Input
                onChange={(e) => setDateOfBirth(e.target.value)}
                placeholder="Date Of Birth"
                className="p-4 bg-[#EBF6FE]
                rounded w-full 
                justify-start 
                border-none
                mt-[12px]
                items-center 
                gap-4 inline-flex outline-none focus:border-none focus:bg-[#EBF6FE] hover:bg-[#EBF6FE]"
                prefix={<CiCalendarDate size={20} />}
               
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
