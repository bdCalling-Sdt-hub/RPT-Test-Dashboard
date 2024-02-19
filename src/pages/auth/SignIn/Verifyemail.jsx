import logo from "../../../assets/signup/rtp_labs_logo.png";

import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import OTPInput from "react-otp-input";
import { useState } from "react";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");

  return (
    <div className="min-h-[100vh] bg-[#EBF6FE] flex justify-center items-center">
      <div className="bg-[#C2E3FC] px-[144px] py-[124px] rounded-lg w-[638px]">
        <div className="object-contain w-[400px]">
          <img src={logo} alt="" />
          <div className="flex items-center gap-2">
            <Link to="/forgot_password">
              {" "}
              <GoArrowLeft className="text-[24px]" />
            </Link>

            <h1 className="text-[24px] my-[24px] font-medium">Verify email</h1>
          </div>
          <p className="text-[16px] mb-[24px] text-[#4E4E4E] font-medium">
            Please enter the OTP we have sent you in your email.{" "}
          </p>
        </div>

        <form className="space-y-7 fit-content object-contain">
          <div className="flex items-center gap-2  outline-none focus:border-blue-400 object-contain w-[350px]">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={{
                height:'44px',
                background:'transparent',
                width:'44px',
                borderBottom: '1px solid #4E4E4E',
                marginRight:'18px',
                outline:'none'
              }}
              renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} 
              
              />}
            />
          </div>
          <div className="flex justify-between w-[350px]">
            <p className="text-[#4E4E4E] text-[16px] font-medium">Didn’t receive the code?</p>
            <p className="cursor-pointer text-[#3BA6F6] text-[16px] font-medium" >Resend</p>
          </div>

          <input
            type="submit"
            value="Verify"
            className="block w-[350px] px-2 py-4 mt-2 text-white bg-[#3BA6F6] rounded-lg cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
