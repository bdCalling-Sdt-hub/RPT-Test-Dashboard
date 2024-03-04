import logo from "../../../assets/signup/rtp_labs_logo.png";
import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { HiOutlineMailOpen } from "react-icons/hi";
import baseURL from "../../../config";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const onFinish = async(values) => {
    console.log("Received values of form: ", values);
    try{
      const response = await baseURL.post(`/auth/forgot-password`,values);
      if(response.data.code==200){
          Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
          });
          navigate(`/verify_email_password/${values.email}`);
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
        <div className="object-contain">
          <img src={logo} alt="" />
          <div className="flex items-center gap-2">
            <Link to="/">
              {" "}
              <GoArrowLeft className="text-[24px]" />
            </Link>

            <h1 className="text-[24px] font-medium my-[24px]">
              Forgot password
            </h1>
          </div>
          <p className="text-[16px] mb-[24px] text-[#4E4E4E] ">
            Please enter your email address to reset your password{" "}
          </p>
        </div>

        <Form initialValues={{
            remember: true,
          }}
          onFinish={onFinish} className="space-y-7 fit-content object-contain">
          <div className="">
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              size="large"  
              placeholder="Enter your email"
              name="email"
              prefix={
                <HiOutlineMailOpen
                  className="mr-2 bg-white rounded-full p-[6px]"
                  size={28}
                  color="#0071E3"
                />
              }
              style={{
                borderBottom: "2px solid #4E4E4E",
                height: "52px",
                background: "#C2E3FC",
                outline: "none",
                marginBottom: "20px",
              }}
            
              bordered={false}
            />
          </Form.Item>
            
            {/* <div className="bg-white rounded-full p-[6px]">
              <img className="w-[12px] " src={messageIcon} alt="" />
            </div>
            <input
              type="email"
              className="w-full p-2 text-sm text-[black] text-[16px]  bg-transparent border-[#4E4E4E] outline-none"
              placeholder="Enter your email"
            /> */}
          </div>
          {/* <span className="text-xs text-red-600">Email field required</span> */}

          {/* <input type="submit" value='Send OTP' className="block w-[350px] px-2 py-4 mt-2 text-white bg-[#3BA6F6] rounded-lg cursor-pointer"/> */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="block w-[350px] h-[56px] px-2 py-4 mt-2 text-white bg-[#3BA6F6] rounded-lg"
            >
            Send OTP
            </Button>
          </Form.Item>
         
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
