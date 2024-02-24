import { Input, Modal, Switch } from "antd";
import logo from "../../../assets/signup/rtp_labs_logo.png";
import {
  IconChevronLeft,
  IconChevronRight,
  IconLock,
  IconMail,
} from "@tabler/icons-react";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import { GoArrowLeft } from "react-icons/go";
const Setting = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelTitle, setModelTitle] = useState("");
  const [otp, setOtp] = useState("");
  const [changeAuth, setChangeAuth] = useState("");
  const [emails, setEmail] = useState("");
  const [resetAuth, setResetAuth] = useState("");
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const handleChange = (e) => {
    setChangeAuth((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReset = (e) => {
    setResetAuth((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNavigate = (value) => {
    if (value === "notification") {
      return;
    }
    // else if (value === "hidden-fee") {
    //   return;
    // }
    // else if (value === "hidden-fee-percentage") {
    //   setModelTitle("Set hidden fee percentage");
    //   setIsModalOpen(true);
    // }
    else if (value === "change-password") {
      setModelTitle("Change password");
      setIsModalOpen(true);
    } else {
      navigate(`/dashboard/settings/${value}`);
    }
  };

  const settingsItem = [
    {
      title: "Notification",
      path: "notification",
    },
    {
      title: "Change password",
      path: "change-password",
    },
    {
      title: "About us",
      path: "about-us",
    },
  ];

  const handleChangePassword = (e) => {
    e.preventDefault();
    const value = {
      current_password: changeAuth.current_password,
      new_password: changeAuth.new_password,
      confirm_password: changeAuth.confirm_password,
    };
    console.log(value);
    // dispatch(updatePassword(value)).then(response => {
    //   if(response.payload.message){
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: response.payload.message,
    //       showConfirmButton: false,
    //       timer: 1500
    //     }).then(()=>{
    //       setIsModalOpen(false)
    //     })
    //   }
    // })
    // .catch(error => {
    //   console.log(error)
    // });
  };
  console.log(emails);
  const handleForgetPassword = (e) => {
    e.preventDefault();
    // if(emails){
    //   dispatch(forgetPassword({email: emails})).then(response => {
    //       Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: response.payload,
    //         showConfirmButton: false,
    //         timer: 1500
    //       }).then(()=>{
    //         setModelTitle("Verify OTP")
    //       })
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     });
    // }
  };
  console.log(otp);
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // dispatch(verifiedOtpReset(otp)).then(response => {
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: response.payload,
    //       showConfirmButton: false,
    //       timer: 1500
    //     }).then(()=>{
    //       setModelTitle("Reset Password")
    //     })
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // const value = {
    //   email : resetEmail as string,
    //   password: resetAuth.password as string,
    //   password_confirmation: resetAuth.confirmation_password as string

    // }
    // dispatch(resetPassword(value)).then(response => {
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: response.payload,
    //       showConfirmButton: false,
    //       timer: 1500
    //     }).then(()=>{
    //       setIsModalOpen(false)
    //     })
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   });
  };

  return (
    <div className="ml-[24px] mt-[60px]">
      {settingsItem.map((setting, index) => (
        <div
          key={index}
          className="border border-[#0071e3] py-4 mb-2 px-4 text-sm rounded-lg bg-white flex items-center justify-between cursor-pointer hover:bg-[#e6f1fc] hover:textblack"
          onClick={() => handleNavigate(setting.path)}
        >
          <h2>{setting.title}</h2>
          <h2>
            {setting.path === "notification" ? (
              <Switch
                defaultChecked
                onChange={onChange}
                // style={{ background: "#0071e3" }}
              />
            ) : (
              <MdKeyboardArrowRight />
            )}
          </h2>
        </div>
      ))}
      {/* <div className="flex justify-between rounded-lg items-center px-[24px] py-[16px] bg-[white]">
        <p className="text-[18px] text-[#222222] font-medium">Notification</p>
        <Switch defaultChecked onChange={onChange} />
      </div>
      <div className="flex justify-between rounded-lg my-[24px] items-center px-[24px] py-[16px] bg-[white]">
        <p className="text-[18px] text-[#222222] font-medium">
          Change Password
        </p>
        <MdKeyboardArrowRight size={20} />
      </div>
      <Modal
        title={
          <div
            onClick={() => setIsModalOpen(false)}
            className="flex items-center cursor-pointer justify-start gap-4 text-[#0071E3] mb-4"
          >
            <IconChevronLeft />
            <p>{modelTitle}</p>
          </div>
        }
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
      ></Modal>
      <div className="flex justify-between rounded-lg my-[24px] items-center px-[24px] py-[16px] bg-[white]">
        <p className="text-[18px] text-[#222222] font-medium">About Us</p>
        <MdKeyboardArrowRight size={20} />
      </div> */}
      <Modal
        title={
          <div
            onClick={() => setIsModalOpen(false)}
            className="flex bg-[#C2E3FC] items-center cursor-pointer justify-start gap-4 text-[#0071E3] mb-4"
          >
            <div className="object-contain">
              <img src={logo} alt="" />
              <div className="flex items-center gap-2">
                <Link to="/dashboard/settings">
                  {" "}
                  <GoArrowLeft className="text-[24px] text-black" />
                </Link>

                <h1 className="text-[24px] text-black font-medium my-[24px]">
                  {modelTitle}
                </h1>
              </div>
              
            </div>
          </div>
        }
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
      >
        {/* {modelTitle === "Set hidden fee percentage" && (
              <form>
                <input
                  type="text"
                  className="my-4 w-full bg-transparent border-b py-3 px-2 outline-none focus:border-[#b278fb] duration-100"
                  placeholder="Set hidden fee percentage"
                  name=""
                  id=""
                />

                <button
                  type="submit"
                  className="bg-[#b278fb]
            text-white mt-5 py-3 rounded-full w-full hover:bg-white hover:text-[#b278fb] duration-200"
                >
                  Save
                </button>
              </form>
            )} */}

        {modelTitle === "Change password" && (
          <div className="">
            <p className="text-[18px] mb-[24px] text-[#4E4E4E] ">
                Your password must be 8-10 character long.{" "}
              </p>
            <form className="w-full" onSubmit={handleChangePassword}>
              <Input.Password
                size="large"
                onChange={handleChange}
                placeholder="Enter your password"
                name="current_password"
                prefix={<IconLock className="mr-2 bg-white rounded-full p-[6px]" size={28} color="#0071E3" />}
                style={{
                  borderBottom: "2px solid #4E4E4E",
                  height: "52px",
                  background:'#C2E3FC',
                  outline: "none",
                  marginBottom: "20px",
                }}
                bordered={false}
              />
              <Input.Password
                size="large"
                name="new_password"
                onChange={handleChange}
                placeholder="Enter your password"
                prefix={<IconLock  className="mr-2 bg-white rounded-full p-[6px]" size={28} color="#0071E3" />}
                style={{
                    borderBottom: "2px solid #4E4E4E",
                    height: "52px",
                    background:'#C2E3FC',
                    outline: "none",
                    marginBottom: "20px",
                }}
                bordered={false}
              />

              <Input.Password
                size="large"
                name="confirm_password"
                onChange={handleChange}
                placeholder="Enter your password"
                prefix={<IconLock  className="mr-2 bg-white rounded-full p-[6px]" size={28} color="#0071E3" />}
                style={{
                    borderBottom: "2px solid #4E4E4E",
                    height: "52px",
                    background:'#C2E3FC',
                    outline: "none",
                    marginBottom: "20px",
                }}
                bordered={false}
              />
              <p className=" text-[#3BA6F6] font-medium">
                <button onClick={() => setModelTitle("Forget password")}>
                  Forget Password
                </button>
              </p>

              <button
                type="submit"
                className="bg-[#3BA6F6]
                  text-white mt-5 py-3 rounded-lg w-full font-medium text-lg border  duration-200"
              >
                Change password
              </button>
            </form>
          </div>
        )}

        {modelTitle === "Forget password" && (
            <div>
          <form onSubmit={handleForgetPassword}>
            <p className="text-[16px] mb-[14px] text-[#4E4E4E]">
              Please enter your email address to recover your account.
            </p>
            <Input
              size="large"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              prefix={<IconMail  className="mr-2 bg-white rounded-full p-[6px]" size={28} color="#0071E3"  />}
              style={{
                borderBottom: "2px solid #4E4E4E",
                height: "52px",
                background:'#C2E3FC',
                outline: "none",
                marginBottom: "20px",
              }}
              bordered={false}
            />

            <button
              onClick={() => setModelTitle("Verify OTP")}
              type="submit"
              className="bg-[#3BA6F6]
            text-white mt-5 py-3 rounded-lg w-full  duration-200"
            >
              Send OTP
            </button>
          </form>
          </div>
        )}

        {modelTitle === "Verify OTP" && (
            <div className="">
          <form onSubmit={handleVerifyOtp}>
            <p className="text-[16px] mb-[14px] text-[#4E4E4E]">
              Please enter your email address to recover your account.
            </p>
            <div className="">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={{
                height:'44px',
                background:'transparent',
                width:'65px',
                fontSize:"20px",
                borderBottom: '1px solid #4E4E4E',
                marginRight:'20px',
                outline:'none'
              }}
              renderInput={(props) => <input {...props} />}
            />
            <p className="flex items-center justify-between mt-2 mb-6">
              Didn’t receive code?
              <button className="font-medium text-[#3BA6F6]">Resend</button>
            </p>
            </div>
           

            <button
              type="submit"
              className="bg-[#3BA6F6]
            w-full
            text-white mt-5 py-3 rounded-lg duration-200"
            >
              Verify
            </button>
          </form>
          </div>
        )}

        {modelTitle === "Reset Password" && (
          <form className="w-full" onSubmit={handleResetPassword}>
            <p className="text-[16px] mb-[14px] text-[#4E4E4E]">
              Set a new password and it should be 8-10 characters long.
            </p>
            <Input.Password
              size="large"
              placeholder="Enter your password"
              name="password"
              onChange={handleReset}
              prefix={<IconLock className="mr-2 bg-white rounded-full p-[6px]" size={28} color="#0071E3" />}
              style={{
                borderBottom: "2px solid #4E4E4E",
                height: "52px",
                background:'#C2E3FC',
                outline: "none",
                marginBottom: "20px",
              }}
              bordered={false}
            />
            <Input.Password
              size="large"
              name="confirmation_password"
              onChange={handleReset}
              placeholder="Re-Enter your password"
              prefix={<IconLock  className="mr-2 bg-white rounded-full p-[6px]" size={28} color="#0071E3" />}
              style={{
                borderBottom: "2px solid #4E4E4E",
                height: "52px",
                background:'#C2E3FC',
                outline: "none",
                marginBottom: "20px",
              }}
              bordered={false}
            />

            <button
              type="submit"
              className="bg-[#3BA6F6]
            text-white mt-5 py-3 rounded-lg text-[16px] font-medium w-full duration-200"
            >
              Update password
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Setting;
