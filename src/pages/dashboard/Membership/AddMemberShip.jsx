import { Input } from "antd";
import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AddMemberShip = () => {
  const [firstName, setMemberShiptName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [features,setFeatures] = useState({features:[]})
  const navigate = useNavigate();
  console.log(features);
  const handleAddMembership = ()=>{

  }
  return (
    <div className="ml-[24px]">
      <div className="mt-[32px] flex items-center pb-3 gap-2">
        <MdOutlineKeyboardArrowLeft
          onClick={() => navigate("/dashboard/membership")}
          size={34}
        />
        <h1 className="text-[24px] text-primary font-semibold">
          Add Membership
        </h1>
      </div>
      <div className="mt-[20px]">
        <div className="flex flex-col gap-[24px]">
          
          <div className="flex-1">
            <label
              htmlFor=""
              className="text-[#222222] text-[18px] font-medium mb-[12px]"
            >
              Membership Name
            </label>
            <Input
              onChange={(e) =>setMemberShiptName(e.target.value)}
              placeholder="Membership Name"
              className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
              type="text"
           
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor=""
              className="text-[#222222] text-[18px] font-medium mb-[12px]"
            >
              Price
            </label>
            <Input
              onChange={(e) => setDateOfBirth(e.target.value)}
              placeholder="Price"
              className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
              type="text"
            
            />
          </div>
          <div className="flex gap-[25px]">
            <div className="flex-1">
              <label
                htmlFor=""
                className="text-[#222222] text-[18px] font-medium"
              >
                Price per Drug Test
              </label>
              <Input
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Price"
                className="p-4 bg-[white]
               rounded w-full 
               justify-start 
               border-none
               mt-[12px]
               items-center 
               gap-4 inline-flex outline-none focus:border-none"
                type="text"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor=""
                className="text-[#222222] text-[18px] font-medium mb-[12px]"
              >
               Price Per Breath Alcohol Test
              </label>
              <Input
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Price"
                className="p-4 bg-[white]
                  rounded w-full 
                  justify-start 
                  border-none
                  mt-[12px]
                  items-center 
                  gap-4 inline-flex outline-none focus:border-none"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1">
            <label
              htmlFor=""
              className="text-[#222222] text-[18px] font-medium mb-[12px]"
            >
              Features
            </label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Features"
              className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
              type="text"
            />
            <Input
              onChange={(e) => setFeatures((pre)=>({features:[...pre.features,e.target.value]}))}
              placeholder="Features"
              className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
              type="text"
            />
            <Input
              onChange={(e) => setFeatures((pre)=>({features:[...pre.features,e.target.value]}))}
              placeholder="Features"
              className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
              type="text"
            />
            <Input
              onChange={(e) => setFeatures((pre)=>({features:[...pre.features,e.target.value]}))}
              placeholder="Features"
              className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
              type="text"
            />
            <Input
              onChange={(e) =>setFeatures((pre)=>({features:[...pre.features,e.target.value]}))}
              placeholder=" Features"
              className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
              type="text"
            />
            <Input
              onChange={(e) => setFeatures((pre)=>({features:[...pre.features,e.target.value]}))}
              placeholder="Features"
              className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
              type="text"
            />
            <Input
              onChange={(e) => setFeatures((pre)=>({features:[...pre.features,e.target.value]}))}
              placeholder="Membership Name"
              className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
              type="text"
            />

          </div>
        </div>
        <button onClick={handleAddMembership} className="text-[18px] w-full mt-[50px] mb-[20px] cursor-pointer py-[15px] bg-[#3BA6F6] text-white rounded-lg">
      Add Membership
      </button>
      </div>
    </div>
  );
};

export default AddMemberShip;
