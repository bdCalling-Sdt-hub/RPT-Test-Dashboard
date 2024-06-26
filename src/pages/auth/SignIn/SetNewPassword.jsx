import logo from "../../../assets/signup/rtp_labs_logo.png";
import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { IconLock } from "@tabler/icons-react";
import baseURL from "../../../config";
import Swal from "sweetalert2";

const SetNewPassword = () => {
  const [form] = Form.useForm();
  const {email} = useParams();
  const navigate = useNavigate()
  console.log(form);
  console.log(email);

  const onFinish = async(values) => {
    console.log("Received values of form: ", values);
    const data = {email:email,password:values?.password}
    console.log(data);
    try{
      const response = await baseURL.post(`/auth/reset-password`,data);

      console.log(response.data)
      if(response.data.code==200){
          Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
          });
          navigate(`/`);
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


        <Form
          form={form}
          name="dependencies"
          autoComplete="off"
          style={{
            maxWidth: 600,
          }}
          layout="vertical"
          className="space-y-4 fit-content object-contain"
          onFinish={onFinish}
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
                    new Error("The new password that you entered do not match!")
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
              className="block w-[350px] h-[56px] px-2 py-4 mt-2 text-white bg-[#3BA6F6] rounded-lg"
            >
              Update password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SetNewPassword;
