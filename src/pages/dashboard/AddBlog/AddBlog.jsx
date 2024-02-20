import { Input } from 'antd';
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const AddBlog = () => {
    const [publisherName,setPublisherName] = useState("");
    const navigate = useNavigate()
    return (
        <div className='ml-[24px]'>
            <div className="ml-[24px] mt-[44px] flex items-center pb-3 gap-2">
           <MdOutlineKeyboardArrowLeft

          onClick={() => navigate("/dashboard/blog/add-blog")}
          size={34}
        />
            <h1 className="text-[24px] text-primary font-semibold">
              Add Blog
            </h1>
          </div>
          <div>
          <div className="flex-1">
            <Input
              onChange={(e) =>setPublisherName(e.target.value)}
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
          </div>
          <div className="flex-1">
            <Input
              onChange={(e) =>setPublisherName(e.target.value)}
              placeholder="Publish Date"
              className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
              type="date"
           
            />
          </div>
          <div className="flex-1">
            <Input
              onChange={(e) =>setPublisherName(e.target.value)}
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
          </div>
            <div className='flex-1'>

          <Upload className="p-4 bg-[white]
              rounded w-full 
              mt-[12px]
              gap-5
              inline-flex"
              {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
            </div>
          </div>
        </div>
    );
}

export default AddBlog;
