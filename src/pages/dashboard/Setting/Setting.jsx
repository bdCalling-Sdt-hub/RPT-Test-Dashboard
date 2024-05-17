import { Button, Form, Input, Modal, Switch } from "antd";
import logo from "../../../assets/signup/rtp_labs_logo.png";
import {
  IconChevronLeft,
  IconChevronRight,
  IconLock,
  IconMail,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import { GoArrowLeft } from "react-icons/go";
import baseURL from "../../../config";
import Swal from "sweetalert2";
import { HiOutlineMailOpen } from "react-icons/hi";
const Setting = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelTitle, setModelTitle] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [form] = Form.useForm();
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user-update")) || {};
    console.log(user);
    setEmail(user.email);
  }, []);
  console.log(email);

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
      setModelTitle("Change Password");
      setIsModalOpen(true);
    } else {
      navigate(`/dashboard/settings/${value}`);
    }
  };

  const settingsItem = [
    // {
    //   title: "Notification",
    //   path: "notification",
    // },
    {
      title: "Change Password",
      path: "change-password",
    },
    // {
    //   title: "About us",
    //   path: "about-us",
    // },
  ];

  const handleChangePassword = async (values) => {
    const data = {
      oldPassword: values?.oldPassword,
      newPassword: values?.newPassword,
    };
    try {
      const response = await baseURL.post(`/auth/change-password`, data);

      console.log(response.data);
      if (response.data.code == 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/dashboard/settings`);
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
  };

  const handleForgetPassword = async (values) => {
    console.log(values);
    try {
      const response = await baseURL.post(`/auth/forgot-password`, values);
      if (response.data.code == 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setModelTitle("Verify OTP");
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
  };
  console.log(otp);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await baseURL.post(`/auth/verify-email`, {
        email: email,
        oneTimeCode: otp,
      });

      console.log(response.data);
      const token = response?.data?.data?.attributes.tokens?.access.token;
      console.log(token);
      if (response.data.code == 200) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", response?.data?.data?.attributes?.user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate(`/set_new_password/${email}`);
        setModelTitle("Reset Password");
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
  };

  const handleResetPassword = async (values) => {
    // e.preventDefault();
    console.log(values);

    const data = { email: email || "", password: values?.password };
    console.log(data);
    try {
      const response = await baseURL.post(`/auth/reset-password`, data);

      console.log(response?.data);
      if (response.data.code == 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setIsModalOpen(false);
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
  };

  return (
    <div className="ml-[24px] mt-[60px]">
      {settingsItem.map((setting, index) => (
        <div
          key={index}
          className="border border-[#0071e3] py-4 mb-2 px-4 text-sm rounded-lg bg-white flex items-center justify-between cursor-pointer hover:bg-[#e6f1fc] hover:textblack"
          onClick={() => handleNavigate(setting.path)}
        >
          <h2>{setting?.title}</h2>
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

        {modelTitle === "Change Password" && (
          <div className="">
            <p className="text-[18px] mb-[24px] text-[#4E4E4E] ">
              Your password must be 8-10 character long.{" "}
            </p>
            <Form
              form={form}
              name="dependencies"
              autoComplete="off"
              style={{
                maxWidth: 600,
              }}
              layout="vertical"
              className="space-y-4 fit-content object-contain"
              onFinish={handleChangePassword}
            >
              <Form.Item
                name="oldPassword"
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
                  placeholder="Enter Your Old Password"
                  name="oldPassword"
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

              <Form.Item
                name="newPassword"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  // onChange={handleChange}
                  placeholder="Set Your New Password"
                  name="newPassword"
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

              {/* Field */}
              <Form.Item
                name="reenterPassword"
                dependencies={["newPassword"]}
                rules={[
                  {
                    required: true,
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Re-enter Password"
                  name="re_enter_password"
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
              <p className=" text-[#3BA6F6] font-medium">
                <button onClick={() => setModelTitle("Forget Password")}>
                  Forget Password
                </button>
              </p>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="block w-full h-[56px] px-2 py-4 mt-2 text-white bg-[#3BA6F6] rounded-lg"
                >
                  Update Password
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}

        {modelTitle === "Forget Password" && (
          <div>
            <Form
              initialValues={{
                remember: true,
              }}
              onFinish={handleForgetPassword}
              className="space-y-7 fit-content object-contain"
            >
              <div className="">
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
                    bordered={false}
                  />
                </Form.Item>
              </div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="block w-full h-[56px] px-2 py-4 mt-2 text-white bg-[#3BA6F6] rounded-lg"
                >
                  Send OTP
                </Button>
              </Form.Item>
            </Form>
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
                    height: "44px",
                    background: "transparent",
                    width: "65px",
                    fontSize: "20px",
                    borderBottom: "1px solid #4E4E4E",
                    marginRight: "20px",
                    outline: "none",
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
          <Form
            form={form}
            name="dependencies"
            autoComplete="off"
            style={{
              maxWidth: 600,
            }}
            layout="vertical"
            className="space-y-4 fit-content object-contain"
            onFinish={handleResetPassword}
          >
            <Form.Item
              name="enter_password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password
                size="large"
                // onChange={handleChange}
                placeholder="Set your password"
                name="set_password"
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

            {/* Field */}
            <Form.Item
              name="password"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("enter_password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Re-enter password"
                name="re_enter_password"
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
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="block w-full h-[56px] px-2 py-4 mt-2 text-white bg-[#3BA6F6] rounded-lg"
              >
                Update Password
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default Setting;
