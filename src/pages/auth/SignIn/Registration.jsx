
import { Button, Checkbox, Form, Input } from "antd";
import logo from "../../../assets/signup/rtp_labs_logo.png";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IconLock } from "@tabler/icons-react";
import { FaRegUser } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import baseURL from "../../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Registration = () => {
    const navigate = useNavigate();



  const handleRegister = async (values) => {
    console.log("Received values of form: ", values);
    
    try{
        const response = await baseURL.post(`/auth/register`,{...values,role:"employee"});

        console.log(response.data)
        const token = response?.data?.data?.attributes.tokens?.access.token;
        console.log(token);
        if(response.data.code==201){
            localStorage.setItem('token',token)
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
            navigate(`/verify_email/${values.email}`);
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
        <img src={logo} alt="" />
        <h1 className="text-[24px] font-medium mt-[24px] mb-[32px]">
          Employee Registration 
        </h1>
        <Form
          name="normal_register"
          // className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleRegister}
          className="space-y-4"
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please Input Your name!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter Your Name"
              prefix={
                <FaRegUser
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
              required
              bordered={false}
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please Input Your Email!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter Your Email"
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
              required
              bordered={false}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please Input Your Password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              // onChange={handleChange}
              placeholder="Enter Your Password"
              prefix={
                <IconLock
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
          {/* <Form.Item
            name="role"
            rules={[
              {
                required: true,
                message: "Please Input Your name!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter Your Role Like admin/employee"
              prefix={
                <RiAdminLine
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
              required
              bordered={false}
            />
          </Form.Item> */}

          

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="block w-[350px] h-[56px] px-2 py-4 mt-2 text-white bg-[#3BA6F6] rounded-lg"
            >
              Registration
            </Button>
          
          </Form.Item>
        </Form>
      </div>
    </div>
    
  );
};

export default Registration;
