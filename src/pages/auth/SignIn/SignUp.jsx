import logo from "../../../assets/signup/rtp_labs_logo.png";
import messageIcon from "../../../assets/signup/messageIcon.png";
import lockIcon from "../../../assets/signup/lockIcon.png";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="min-h-[100vh] bg-[#EBF6FE] flex justify-center items-center">
      <div className="bg-[#C2E3FC] px-[144px] py-[124px] rounded-lg w-[638px]">
        <img src={logo} alt="" />
        <h1 className="text-[24px] font-medium mt-[24px] mb-[32px]">
          Sign in to continue!
        </h1>
        <form className="space-y-7">
          <div className="flex items-center gap-2 border-b-2 border-[#4E4E4E]  outline-none focus:border-blue-400">
            <div className="bg-white rounded-full p-[6px]">
              <img className="w-[12px] " src={messageIcon} alt="" />
            </div>
            <input
              type="email"
              className="w-full p-2 text-sm text-[black] text-[16px]  bg-transparent border-[#4E4E4E] outline-none"
              placeholder="Enter your email"
            />
            <div></div>
          </div>
          <div>
          <div className="flex items-center gap-2 border-b-2 border-[#4E4E4E] outline-none focus:border-blue-400">
            <div className="bg-white rounded-full py-[6px] px-[7px]">
              <img className="w-[10px] h-[12px] " src={lockIcon} alt="" />
            </div>
            <input
              type="email"
              className="w-full p-2 text-sm text-[black] text-[16px] bg-transparent border-[#4E4E4E] outline-none"
              placeholder="Enter your password"
            />
        
          </div>
            <span className="text-xs text-red-600">Email field required</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                className="bg-[#3BA6F6] size-[20px]"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <span className="text-[#3BA6F6] font-medium">Remember me</span>
            </div>
            <Link to='/forgot_password' className="text-[#3BA6F6] font-medium">Forget password?</Link>
          </div>

          <button className="block w-[350px] px-2 py-4 mt-2 text-white bg-[#3BA6F6] rounded-lg">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
