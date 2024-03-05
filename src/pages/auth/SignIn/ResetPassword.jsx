import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "../../../assets/signup/rtp_labs_logo.png";


const ResetPassword = () => {
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
            name="re_enter_password"
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
}

export default ResetPassword;
