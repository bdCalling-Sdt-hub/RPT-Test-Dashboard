import { Button, DatePicker, Form, Input, Upload, message } from "antd";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { LuImagePlus } from "react-icons/lu";

// const getBase64 = (img, callback) => {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => callback(reader.result));
//   reader.readAsDataURL(img);
// };
// const beforeUpload = (file) => {
//   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//   if (!isJpgOrPng) {
//     message.error("You can only upload JPG/PNG file!");
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error("Image must smaller than 2MB!");
//   }
//   return isJpgOrPng && isLt2M;
// };

const EditProfile = () => {
  // State to store the image URL
  const [imageUrl, setImageUrl] = useState(
    "https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg"
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const props = {
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    listType: "picture",
    showUploadList: false, // Disable the default upload list
    beforeUpload(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const img = document.createElement("img");
          img.src = reader.result;
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = "red";
            ctx.textBaseline = "middle";
            ctx.font = "33px Arial";
            ctx.fillText("", 20, 20);
            canvas.toBlob((result) => {
              resolve(result);
              setImageUrl(URL.createObjectURL(result));
              // console.log(result);// Update the image URL
            });
          };
        };
      });
    },
  };
  const handleUpdateProfile = (values) => {
    console.log({
      ...values,
      imageUrl,
      dateOfBirth: `${values.dateOfBirth.$D}-${values.dateOfBirth.$M + 1}-${
        values.dateOfBirth.$y
      }`,
      phoneNumber,
    });
  };
  return (
    <div>
      <div className="flex  items-center ml-[24px] mt-[40px] mb-[63px]">
        <MdOutlineKeyboardArrowLeft
          onClick={() => navigate("/dashboard/profileinformation")}
          size={30}
        />
        <h1 className="text-[20px] font-medium"> Edit Profile</h1>
      </div>
      <div className="ml-[24px] bg-white p-[36px] rounded-xl">
        <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={handleUpdateProfile}
          //   onFinishFailed={handleCompanyInformationFailed}
          autoComplete="off"
        >
          <div className="flex ">
            <div className="w-[33%] ml-[24px] flex flex-col justify-center items-center gap-[30px]">
              <div className="w-[242px] h-[242px] relative rounded-full flex flex-col justify-center items-center">
                {/* <img
            className="w-[242px] h-[242px] rounded-full flex justify-center items-center backdrop-brightness-50"
            src={imageUrl}
            alt=""
          /> */}
                <Upload
                  {...props}
                  name="avatar"
                  listType="picture-circle"
                  className="avatar-uploader-aiman"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  // beforeUpload={beforeUpload}
                  onChange={(info) => {
                    if (info.file.status !== "uploading") {
                      console.log(info?.file, info.fileList);
                      // setImageUrl(info?.file?.name)
                    }
                    if (info.file.status === "done") {
                      message.success(
                        `${info.file.name} file uploaded successfully`
                      );
                    } else if (info.file.status === "error") {
                      message.error(`${info.file.name} file upload failed.`);
                    }
                  }}
                >
                  <img
                    className="w-[242px] h-[242px] rounded-full flex justify-center items-center opacity-50"
                    src={imageUrl}
                    alt=""
                  />

                  <Button
                    className="border-none text-[16px] text-[#3BA6F6] bg-[white] absolute text-primary hover:text-primary"
                    icon={<LuImagePlus size={17} className="text-[#3BA6F6]" />}
                  >
                    Change Picture
                  </Button>
                </Upload>
                <div>
                  {/* <Upload
              {...props}
              onChange={(info) => {
                if (info.file.status !== "uploading") {
                  console.log(info.file, info.fileList);
                }
                if (info.file.status === "done") {
                  message.success(
                    `${info.file.name} file uploaded successfully`
                  );
                } else if (info.file.status === "error") {
                  message.error(`${info.file.name} file upload failed.`);
                }
              }}
            >
              <Button
                className="border-none text-[16px] text-[#3BA6F6] bg-[white] absolute text-primary hover:text-primary"
                icon={<LuImagePlus size={17} className="text-[#3BA6F6]"/>}
              >
                Change Picture
              </Button>
          </Upload> */}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[20px] text-[#4E4E4E]">Admin</p>
                <h1 className="text-[#222222] text-[30px] font-medium">
                  Bessie Cooper
                </h1>
              </div>
            </div>

            <div className="flex-1 w-[66%]">
              <div className="flex flex-col gap-[24px]">
                <div className="flex gap-[25px]">
                  <div className="flex-1">
                    <Form.Item
                      label={
                        <span className="text-[#222222] text-[18px] font-medium">
                          First Name
                        </span>
                      }
                      name="firstName"
                      className="flex-1"
                      rules={[
                        {
                          required: true,
                          message: "Please input your First Name!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="First name"
                        className="p-4 bg-[#EBF6FE]
               rounded w-full 
               justify-start 
               border-none
               mt-[12px]
               items-center 
               gap-4 inline-flex outline-none focus:border-none focus:bg-[#EBF6FE] hover:bg-[#EBF6FE]"
                        type="text"
                      />
                    </Form.Item>
                  </div>
                  <div className="flex-1">
                    {/* <label
                  htmlFor=""
                  className="text-[#222222] text-[18px] font-medium mb-[12px]"
                >
                  Last Name
                </label> */}
                    <Form.Item
                      label={
                        <span className="text-[#222222] text-[18px] font-medium">
                          Last Name
                        </span>
                      }
                      name="lastName"
                      className="flex-1"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Last Name!",
                        },
                      ]}
                    >
                      <Input
                        // onChange={(e) => setLastName(e.target.value)}
                        placeholder="First name"
                        className="p-4 bg-[#EBF6FE]
               rounded w-full 
               justify-start 
               border-none
               mt-[12px]
               items-center 
               gap-4 inline-flex outline-none focus:border-none focus:bg-[#EBF6FE] hover:bg-[#EBF6FE]"
                        type="text"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="flex-1">
                  <Form.Item
                    label={
                      <span className="text-[#222222] text-[18px] font-medium">
                        Email
                      </span>
                    }
                    name="email"
                    className="flex-1"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Email"
                      className="p-4 bg-[#EBF6FE]
              mt-[12px]
               rounded w-full 
               justify-start 
               border-none
               items-center 
               gap-4 inline-flex outline-none focus:border-none focus:bg-[#EBF6FE] hover:bg-[#EBF6FE]"
                      type="text"
                    />
                  </Form.Item>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor=""
                    className="text-[#222222] text-[18px] font-medium mb-[12px]"
                  >
                    Phone Number
                  </label>

                  <PhoneInput
                    placeholder="Enter phone number"
                    international
                    countryCallingCodeEditable={false}
                    style={{
                      marginTop: "12px",
                    }}
                    defaultCountry="US"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                  />
                </div>
                <div className="flex-1">
                  <Form.Item
                    label={
                      <span className="text-[#222222] text-[18px] font-medium">
                        Date Of Birth
                      </span>
                    }
                    name="dateOfBirth"
                    className="flex-1"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Date Of Birth!",
                      },
                    ]}
                  >
                    <DatePicker
                      className="p-4 bg-[#EBF6FE]
                mt-[12px]
                 rounded w-full 
                 justify-start 
                 border-none
                 items-center 
                 gap-4 inline-flex outline-none focus:border-none focus:bg-[#EBF6FE] hover:bg-[#EBF6FE]"
                      type="date"
                      prefix={" "}
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
          <Button
            htmlType="submit"
            className="text-[18px] w-full mt-[50px] mb-[20px] cursor-pointer h-[60px] bg-[#3BA6F6] text-white rounded-lg"
          >
            Update profile
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;
