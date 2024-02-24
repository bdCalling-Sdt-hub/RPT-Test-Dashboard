import { Button, DatePicker, Form, Input, Upload, message } from "antd";
import { useState } from "react";

import { CiCalendarDate } from "react-icons/ci";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { LuImagePlus } from "react-icons/lu";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const EditProfile = () => {
  // State to store the image URL
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    "https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg"
  );
console.log(imageUrl);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [updatedValue,setUpdatedValue] = useState({})
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

  // const handleChange = (info) => {
  //   if (info.file.status === "uploading") {
  //     setLoading(true);
  //     return;
  //   }
  //   if (info.file.status === "done") {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, (url) => {
  //       setLoading(false);
  //       setImageUrl(url);
  //     });
  //   }
  // };
  // const uploadButton = (
  //   <button
  //     style={{
  //       border: 0,
  //       background: "none",
  //     }}
  //     type="button"
  //   >
  //     {loading ? <LoadingOutlined /> : <PlusOutlined />}
  //     <div
  //       style={{
  //         marginTop: 8,
  //       }}
  //     >
  //       Upload
  //     </div>
  //   </button>
  // );
    const handleUpdateProfile = (e)=>{
        e.preventDefault();
        setUpdatedValue({firstName,lastName,email,phoneNumber,dateOfBirth,imageUrl})

      }
      console.log(updatedValue);
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
                icon={<LuImagePlus size={17} className="text-[#3BA6F6]"/>}
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
                <label
                  htmlFor=""
                  className="text-[#222222] text-[18px] font-medium"
                >
                  First Name
                </label>
                <Input
                  onChange={(e) => setFirstName(e.target.value)}
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
              </div>
              <div className="flex-1">
                <label
                  htmlFor=""
                  className="text-[#222222] text-[18px] font-medium mb-[12px]"
                >
                  Last Name
                </label>
                <Input
                  onChange={(e) => setLastName(e.target.value)}
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
              </div>
            </div>
            <div className="flex-1">
              <label
                htmlFor=""
                className="text-[#222222] text-[18px] font-medium mb-[12px]"
              >
                Email
              </label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
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
              <label
                htmlFor=""
                className="text-[#222222] text-[18px] font-medium mb-[12px]"
              >
                Date Of Birth
              </label>
              <Input
                onChange={(e) => setDateOfBirth(e.target.value)}
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
              
    
 

            </div>
          </div>
        
        </div>
        
      </div>
      <button onClick={handleUpdateProfile} className="text-[18px] w-full mt-[50px] mb-[20px] cursor-pointer py-[15px] bg-[#3BA6F6] text-white rounded-lg">
      Update profile
      </button>
      </div>
      
    </div>
  );
};

export default EditProfile;
