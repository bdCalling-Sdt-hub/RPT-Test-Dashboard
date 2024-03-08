import logo from "../../../assets/signup/rtp_labs_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";
import { IconLock } from "@tabler/icons-react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { useGetUserQuery } from "../../../redux/features/authentication/loginApi";
import Loading from "../../../components/Loading/Loading";
import { login } from "../../../redux/apiSlices/authentication/loginSlice";
import Swal from "sweetalert2";
import baseURL from "../../../config";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, user } = useSelector((state) => state.login);
  const onFinish = async ({ email, password, remember }) => {
    // console.log("Received values of form: ", email,password);

    try {
      const response = await baseURL.post(
        `/auth/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response?.data);
      if (response.data.code == 200) {
        localStorage.setItem(
          "token",
          response?.data?.data?.attributes?.tokens?.access?.token
        );
        localStorage.setItem(
          "login-user",
          JSON.stringify(response?.data?.data?.attributes)
        );
        localStorage.setItem(
          "user-update",
          JSON.stringify(response?.data?.data?.attributes?.user)
        );
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Registration Fail", error?.response?.data?.message);
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: error?.response?.data?.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }

    // dispatch(login({email,password}))
    // .then(response => {
    //   console.log(response);
    //   Swal.fire({
    //     position: "center",
    //     icon: "success",
    //     title: "Login Successfully",
    //     showConfirmButton: false,
    //     timer: 1500
    //   }).then(() => {
    //     navigate("/dashboard")
    //   });
    // })
    // .catch(error => {

    //   Swal.fire({
    //     icon: "error",
    //     title: "Error...",
    //     text: error?.response?.data?.message,
    //     footer: '<a href="#">Why do I have this issue?</a>'
    //   });
    //   console.log(error)
    // });
  };
  console.log(user, isSuccess);
  // const {data,isError,isLoading,isSuccess} = useGetUserQuery();
  // if(isLoading){
  //   return <Loading size={"large"}/>
  // }
  // if(isSuccess){

  //   console.log(data);
  // }
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
          <div>
            <Link to="/register" className="text-[#3BA6F6] font-medium">
              Do not have account? Register Please
            </Link>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="block w-[350px] h-[56px] px-2 py-4 mt-2 text-white bg-[#3BA6F6] rounded-lg"
            >
              Log in
            </Button>
            {/* <Link to="/dashboard"
              // type="primary"
              // htmlType="submit"
              className="block text-center w-[350px] h-[56px] px-2 py-4 mt-2 hover:text-white text-white bg-[#3BA6F6] rounded-lg"
            >
              Log In
            </Link> */}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
