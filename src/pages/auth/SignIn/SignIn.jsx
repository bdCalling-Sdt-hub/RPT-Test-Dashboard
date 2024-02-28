import logo from "../../../assets/signup/rtp_labs_logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";
import { IconLock } from "@tabler/icons-react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { useGetUserQuery } from "../../../redux/features/authentication/loginApi";


const SignIn = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const {data,isError,isLoading,isSuccess} = useGetUserQuery();
  if(isLoading){
    return 'Loading....'
  }
  if(isSuccess){

    console.log(data);
  }
  return (
    <div className="min-h-[100vh] bg-[#EBF6FE] flex justify-center items-center">
      <div className="bg-[#C2E3FC] px-[144px] py-[124px] rounded-lg w-[638px]">
        <img src={logo} alt="" />
        <h1 className="text-[24px] font-medium mt-[24px] mb-[32px]">
          Sign In To Continue!
        </h1>
        <Form
          name="normal_login"
          // className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          className="space-y-4"
        >
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
              name="current_password"
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

        
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>
                    <span className="text-[#3BA6F6] font-medium">
                      {" "}
                      Remember Me
                    </span>
                  </Checkbox>
                </Form.Item>
                {/* <input
                className="bg-[#3BA6F6] size-[20px]"
                type="checkbox"
                name=""
                id=""
              />{" "} */}
                {/* <span className="text-[#3BA6F6] font-medium">Remember me</span> */}
              </div>
              <div>

              <Link
                to="/forgot_password"
                className="text-[#3BA6F6] font-medium"
              >
                Forget password?
              </Link>
              </div>
            </div>
      

          <Form.Item>
            {/* <Button
              type="primary"
              htmlType="submit"
              className="block w-[350px] h-[56px] px-2 py-4 mt-2 text-white bg-[#3BA6F6] rounded-lg"
            >
              Log in
            </Button> */}
            <Link to="/dashboard"
              // type="primary"
              // htmlType="submit"
              className="block text-center w-[350px] h-[56px] px-2 py-4 mt-2 hover:text-white text-white bg-[#3BA6F6] rounded-lg"
            >
              Log In
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
