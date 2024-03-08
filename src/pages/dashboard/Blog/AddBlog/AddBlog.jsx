import { DatePicker, Form, Input } from "antd";
import React, { useRef, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { WithContext as ReactTags } from "react-tag-input";
import JoditEditor from "jodit-react";
import dayjs from 'dayjs';
import baseURL from "../../../../config";
import Swal from "sweetalert2";




const AddBlog = () => {
  // const [publisherName, setPublisherName] = useState("");
  // const [publishDate,setPublishDate] = useState("");
  // const [blogName,setBlogName] = useState("");
  // const [blogCoverImg,setBlogCoverImg] = useState('')
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const editor = useRef(null);
  // const [tags, setTags] = useState([]);
  // const handleDelete = (i) => {
  //   setTags(tags?.filter((tag, index) => index !== i));
  // };

  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);

      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  // const handleAddition = (tag) => {
  //   console.log(tag);
  //   setTags([...tags, tag]);
  // };
  const handleAddBlog = async (values)=>{
    console.log({...values,content});
    const blogData = {...values,content}
    console.log(blogData);
    const formData = new FormData();


    //Append individual fields to  the FormDAta object
    formData.append("author",blogData?.author)
    formData.append("title",blogData?.title)
    formData.append("content",blogData?.content)
    formData.append("description",blogData?.description)
    formData.append("tags",JSON.stringify(blogData?.tags))
    if(blogData?.image){
      formData.append("image",blogData?.image?.fileList[0].originFileObj)
    }
    try{
      const response = await baseURL.post(`/blog`,formData,{
        headers: {
         "Content-Type": "multipart/form-data",
            authorization: `Bearer ${localStorage.getItem('token')}`,
           
        }});

      console.log(response.data)
      
      if(response.data.code==201){
          Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
          });
          navigate('/dashboard/blog', { replace: true });
          window.location.reload();
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

  }

  // const handleAddToBlog = (e)=>{
  //   e.preventDefault();
  //   const blogDetails = {
  //     publisherName,
  //     publishDate,
  //     blogName,
  //     blogCoverImg,
  //     content,
  //     tags


  //   } 
  //   console.log(blogDetails);
  // }
 
  return (
    <div className="ml-[24px] overflow-auto">
      <div className="mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
        <MdOutlineKeyboardArrowLeft
          onClick={() => navigate("/dashboard/blog/")}
          size={34}
        />
        <h1 className="text-[24px] text-primary font-semibold">Add Blog</h1>
      </div>
      <div>
      <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={handleAddBlog}
        //   onFinishFailed={handleCompanyInformationFailed}
          autoComplete="off"
        >
        <div className="flex-1">
        <Form.Item
              name="author"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
              ]}
            >
          <Input
            // name="publisherName"
            // onChange={(e) => setPublisherName(e.target.value)}
            placeholder="Publisher Name"
            className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
            type="text"
          />
        </Form.Item>
        </div>
        <div className="flex-1">
        {/* <Form.Item
              name="publisherDate"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
              ]}
            >

          <DatePicker 
            format="YYYY-MM-DD"
            // onChange={(e) => setPublishDate(e.target.value)}
            placeholder="Publish Date"
            showTime={false}
            className="p-4 bg-[white]
              rounded w-[100%]
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
            // type="date"
            // disabledDate={(current) => current && current < moment().endOf('day')}
          />
        </Form.Item> */}
        </div>
        <div className="flex-1">
        <Form.Item
              name="title"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
              ]}
            >

          <Input
            // onChange={(e) => setBlogName(e.target.value)}
            placeholder="Blog Name"
            className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
            type="text"
          />
        </Form.Item>
        </div>
        <div className="flex-1">
        <Form.Item
              name="description"
              className="flex-1"
              
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
                {
                  max: 400,
                  message: "Description must be at most 100 characters.",
                },
              ]}
            >

          <Input.TextArea
            // onChange={(e) => setBlogName(e.target.value)}
            placeholder="Short Description"
            className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
            type="text"
          />
        </Form.Item>
        </div>
        <div className="flex-1 mt-[16px]">
          {/* <label htmlFor="" className="text-[#222222]  text-[18px] font-medium">
            Upload Cover Image
          </label> */}
          <Form.Item
            label={<span className="text-[#222222]  text-[18px] font-medium"> Upload Cover Image</span>}
              name="image"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
              ]}
            >
          <Upload
            className="p-4 bg-[white]
              rounded w-full 
              mt-[12px]
              gap-5
              inline-flex"
            {...props}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
          </Form.Item>
        </div>
        <div className="flex-1 mt-[16px]">
          <label htmlFor="" className="text-[#222222]text-[18px] font-medium">
            Blog Details
          </label>
          <div className="mt-[16px]">
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => {
                setContent(newContent);
              }}
            />
          </div>
        </div>

        {/* <div className="flex-1 mt-[16px]">
          <label htmlFor="" className="text-[#222222]text-[18px] font-medium">
            Add Tag
          </label>
          <div
            className="p-4 bg-[white]
              rounded w-full 
              mt-[12px]
              gap-5
              inline-flex"
          >
            <ReactTags
              tags={tags}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              inputFieldPosition="inline"
            />
          </div>
        </div> */}
        <Button
        htmlType="submit"
        // onClick={handleAddToBlog}
        block
        style={{
          marginTop: "30px",
          backgroundColor: "#3BA6F6",
          color: "#fff",
          size:"18px",
          height: "56px",
        }}
      >
        Add Blog
      </Button>
      </Form>
      </div>
    </div>
  );
};

export default AddBlog;
