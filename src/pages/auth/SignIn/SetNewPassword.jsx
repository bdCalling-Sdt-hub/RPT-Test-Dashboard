import logo from "../../../assets/signup/rtp_labs_logo.png";
import lockIcon from "../../../assets/signup/lockIcon.png";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
const SetNewPassword = () => {
    return (
        <div className="min-h-[100vh] bg-[#EBF6FE] flex justify-center items-center">
        <div className="bg-[#C2E3FC] px-[144px] py-[124px] rounded-lg w-[638px]">
          <div className="object-contain">
            <img src={logo} alt="" />
            <div className="flex items-center gap-2">
              <Link to="/verify_email">
                {" "}
                <GoArrowLeft className="text-[24px]" />
              </Link>
  
              <h1 className="text-[24px] font-medium my-[24px]">
              Set a new password
              </h1>
            </div>
            <p className="text-[16px] mb-[24px] text-[#4E4E4E] ">
            Your password must be 8-10 character long.{" "}
            </p>
          </div>
  
          <form className="space-y-7 fit-content object-contain">
            <div className="flex items-center gap-2 border-b-2 border-[#4E4E4E]  outline-none focus:border-blue-400 object-contain w-[350px]">
              <div className="bg-white rounded-full p-[6px]">
                <img className="w-[12px] " src={lockIcon} alt="" />
              </div>
              <input
                type="password"
                className="w-full p-2 text-sm text-[black] text-[16px]  bg-transparent border-[#4E4E4E] outline-none"
                placeholder="Set your password"
              />
            </div>
            <div className="flex items-center gap-2 border-b-2 border-[#4E4E4E]  outline-none focus:border-blue-400 object-contain w-[350px]">
              <div className="bg-white rounded-full p-[6px]">
                <img className="w-[12px] " src={lockIcon} alt="" />
              </div>
              <input
                type="password"
                className="w-full p-2 text-sm text-[black] text-[16px]  bg-transparent border-[#4E4E4E] outline-none"
                placeholder="Re-enter password"
              />
            </div>
            <span className="text-xs text-red-600">password field required</span>
  
            <input type="submit" value='Update password' className="block px-2 py-4 mt-2 text-white bg-[#3BA6F6] rounded-lg cursor-pointer w-[350px]"/>
             
           
          </form>
        </div>
      </div>
    );
}

export default SetNewPassword;
