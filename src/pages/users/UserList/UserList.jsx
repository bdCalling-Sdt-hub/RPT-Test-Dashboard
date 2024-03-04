import AllUserList from "../../../components/AllUserList/AllUserList";
import { Space, Table } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useGetAllUserQuery } from "../../../redux/features/AllUser/getAllUser";
import { useState } from "react";


const UserList = () => {
  const {data:AllUser,isLoading,isError,isSuccess} = useGetAllUserQuery();
  console.log(AllUser?.data?.attributes?.users);
    const baseUrl = import.meta.env.VITE_API_URL;
    const users = AllUser?.data?.attributes?.users;
    
  const columns = [
    {
        title: '#SI',
        dataIndex: '',
        key: '',
        render: (text, record, index) => index + 1,
    },

    
    
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <div className='flex gap-2 items-center'>
          <img className='w-[34px] h-[34px] rounded-full' src={`${baseUrl}${record.image?.url}`} alt="" />
          <p className='font-medium'>{record.name}</p>
        </div>
      ),
    },
    {
      title: 'Phone',
      dataIndex: 'phoneNumber',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
      {
        title: 'Role',
        key: 'role',
        dataIndex: 'role',
        
      },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/dashboard/users/users-details/${record?.id}`} ><BsInfoCircle size={18} className='text-[#3BA6F6] ' /></Link>
          <a><RxCross2 size={18} className='text-[red]'/></a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      si:1,
      name: 'John Brown',
      img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
      phone: 3254546454,
      date:"02-24-2024",
      email:"ahad.aiman@gmail.com",
    },
    {
        key: '2',
        si:2,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        date:"02-24-2024",
        email:"ahad.aiman@gmail.com",
      },
      {
        key: '3',
        si:3,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        date:"02-24-2024",
        email:"ahad.aiman@gmail.com",
      },
      {
        key: '4',
        si:4,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        date:"02-24-2024",
        email:"ahad.aiman@gmail.com",
      },
      {
        key: '5',
        si:5,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        date:"02-24-2024",
        email:"ahad.aiman@gmail.com",
      },
      {
        key: '6',
        si:6,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        date:"02-24-2024",
        email:"ahad.aiman@gmail.com",
      },
  ];

    return (
        <div>
           <div className="ml-[24px] mt-[44px]">
            <h1 className="text-[24px] text-primary font-semibold pb-3">
              User List
            </h1>
          </div>
          <div className='ml-[24px] mt-[24px]'>
               <AllUserList data={users} columns={columns}/>
            </div>
        </div>
    );
}

export default UserList;
