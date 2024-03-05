import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import baseURL from "../../../config";
import OTPInput from "react-otp-input";
import { GoArrowLeft } from "react-icons/go";
import logo from "../../../assets/signup/rtp_labs_logo.png";


const VerifyEmailForPassword = () => {
    const [otp, setOtp] = useState("");
    const {email} = useParams();
    const navigate = useNavigate();
    const handleReset = () => {
   
    
        // const email= localStorage.getItem("resetEmail");
        // if(email){
        //   dispatch(forgetPassword({email : email}));
        // }
      };


    console.log(email);

    const handleMatchOtp = async() => {
    
        console.log(otp);
        try{
          const response = await baseURL.post(`/auth/verify-email`,{
            email: email,
            oneTimeCode: otp
        });
    
          console.log(response.data)
          const token = response?.data?.data?.attributes.tokens?.access.token;
          console.log(token);
          if(response.data.code==200){
              localStorage.setItem('token',token)
              localStorage.setItem('user',response?.data?.data?.attributes?.user)
              Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: response.data.message,
                  showConfirmButton: false,
                  timer: 1500
              });
              navigate(`/set_new_password/${email}`);
          }
      }catch(error){
          console.log("Registration Fail",error?.response?.data?.message);
          Swal.fire({
              icon: "error",
              title: "Error...",
              text: error?.response?.data?.message,
              footer: '<a href="#">Why do I have this issue?</a>'
            });
      }
      };
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
  
              <h1 className="text-[24px] my-[24px] font-medium">Verify Email For Reset Password</h1>
            </div>
            <p className="text-[16px] mb-[24px] text-[#4E4E4E] font-medium">
              Please enter the OTP we have sent you in your email.{" "}
            </p>
          </div>
  
          <div className="space-y-7 fit-content object-contain">
            <div className="flex items-center gap-2  outline-none focus:border-blue-400 object-contain w-[350px]">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputStyle={{
                  height: "44px",
                  background: "transparent",
                  width: "44px",
                  borderBottom: "1px solid #4E4E4E",
                  marginRight: "18px",
                  outline: "none",
                }}
                renderSeparator={<span> </span>}
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <div className="flex justify-between w-[350px]">
              <p className="text-[#4E4E4E] text-[16px] font-medium">
                Didn’t receive the code?
              </p>
              <p
                onClick={handleReset}
                className="cursor-pointer text-[#3BA6F6] text-[16px] font-medium"
              >
                Resend
              </p>
            </div>
  
            <button  onClick={handleMatchOtp} className="block w-[350px] px-2 py-4 mt-2 text-white bg-[#3BA6F6] rounded-lg cursor-pointer">
              Verify
            </button>
          </div>
        </div>
      </div>
    );
}

export default VerifyEmailForPassword;
