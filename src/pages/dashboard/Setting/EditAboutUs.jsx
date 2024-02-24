import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Input } from 'antd';
import { useState } from "react";
const { TextArea } = Input;


const EditAboutUs = () => {
    const navigate = useNavigate();
    const [aboutUsContent,setAboutUsContent] = useState('');
    const handleUpdateAboutUs = ()=>{
        console.log(aboutUsContent);
    }
    return (
        <div className="relative ml-[24px]">
        <div className=" mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
       <MdOutlineKeyboardArrowLeft

      onClick={() => navigate("/dashboard/settings/about-us")}
      size={34}
    />
        <h1 className="text-[24px] text-primary font-semibold">
         Edit About Us
        </h1>
      </div>
      <div className=" text-justify mt-[24px] h-screen ">
      <TextArea rows={30} autoFocus  value={aboutUsContent}/>
        
      </div>
    <button onClick={handleUpdateAboutUs} className="absolute text-center bottom-10 bg-[#3BA6F6]
        text-white mt-5 py-3 rounded-lg w-full text-[18px] font-medium  duration-200">Update</button>
    </div>
    );
}

export default EditAboutUs;
