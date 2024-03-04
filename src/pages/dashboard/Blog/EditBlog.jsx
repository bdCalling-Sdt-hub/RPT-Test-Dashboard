import { DatePicker, Form, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { WithContext as ReactTags } from "react-tag-input";
import JoditEditor from "jodit-react";
import { useGetSingleBlogQuery } from "../../../redux/features/blog/getSingleBlogApi";
import Loading from "../../../components/Loading/Loading";
import ImgCrop from "antd-img-crop";
import Swal from "sweetalert2";
import baseURL from "../../../config";

const EditBlog = () => {
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess } = useGetSingleBlogQuery(id);
  const [publisherName, setPublisherName] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [blogName, setBlogName] = useState("");
  const [blogCoverImg, setBlogCoverImg] = useState("");
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const editor = useRef(null);
  const baseUrl = import.meta.env.VITE_API_URL;
  const singleBlog = data?.data?.attributes;
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: `${baseUrl}${singleBlog?.image?.url}`,
    },
  ]
  );
  useEffect(() => {
    // Fetch data from API
        setContent(singleBlog?.content);
  
  }, []);
console.log(singleBlog?.content);
  if (isLoading) {
    return <Loading />;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  console.log(id);

  console.log(singleBlog);

  const handleUpdateBlog = async(values) => {
    console.log({ ...values, content });
    const updateBlogData = { ...values, content };
    const formData = new FormData();
    formData.append("author", updateBlogData?.author);
    formData.append("title", updateBlogData?.title);
    formData.append("content", updateBlogData?.content);
    formData.append("description", updateBlogData?.description);
    if (fileList[0]?.originFileObj) {
      formData.append(
        "image",
        fileList[0]?.originFileObj
      );
    }
    try{
      const response = await baseURL.patch(`/blog/${id}`,formData);

      console.log(response.data)
      
      if(response.data.code==200){
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
  };
  const onChange = ({ fileList: newFileList }) => {
    // console.log(fileList?.fileList[0].originFileObj);
    setFileList(newFileList);
  };
  console.log(fileList[0]?.originFileObj);
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <div className="ml-[24px] overflow-auto">
      <div className="mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
        <MdOutlineKeyboardArrowLeft
          onClick={() => navigate("/dashboard/blog/")}
          size={34}
        />
        <h1 className="text-[24px] text-primary font-semibold">Edit Blog</h1>
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
          onFinish={handleUpdateBlog}
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
              initialValue={singleBlog?.author}
            >
              <Input
                name="publisherName"
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
          {/* <div className="flex-1">
        <Form.Item
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
           </Form.Item>
        </div> */}
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
              initialValue={singleBlog?.title}
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
                  max: 100,
                  message: "Description must be at most 100 characters.",
                },
              ]}
              initialValue={singleBlog?.description}
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
              label={
                <span className="text-[#222222] flex items-center text-[18px] font-medium">
                  {" "}
                  Upload Cover Image
                </span>
              }
              name="image"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
              ]}
              // valuePropName="fileList" // Set the valuePropName to "fileList" for Upload component
              // initialValue={singleBlog?.image?.url ? [{ uid: '-1', name: 'Image', status: 'done', url: singleBlog.image.url }] : []}
            >
              {/* <Upload
            className="p-4 bg-[white]
              rounded w-full 
              mt-[12px]
              gap-5
              inline-flex"
            {...props}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload> */}
        
                <Upload
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                >
                  {fileList.length < 1 && "+ Upload"}
                </Upload>
             

              {/* <img
                className="w-10 h-10 rounded-full"
                src={`${baseUrl}${singleBlog?.image?.url}`}
                alt=""
              /> */}
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
              size: "18px",
              height: "56px",
            }}
          >
            Update Blog
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditBlog;
