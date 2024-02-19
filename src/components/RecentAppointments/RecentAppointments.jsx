import { Space, Table, Tag } from 'antd';
import { BsInfoCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
const columns = [
    {
        title: '#SI',
        dataIndex: 'si',
        key: 'si',
        render: (text) => <a>{text}</a>,
      },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <div className='flex gap-2 items-center'>
          <img className='w-[34px] h-[34px] rounded-full' src={record.img} alt="" />
          <p className='font-medium'>{record.name}</p>
        </div>
      ),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Type Of Test',
      key: 'test',
      dataIndex: 'test',
      
    },
    {
        title: 'Date',
        key: 'date',
        dataIndex: 'date',
        
      },
      {
        title: 'Amount',
        key: 'amount',
        dataIndex: 'amount',
        
      },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a><BsInfoCircle size={18} className='text-[#3BA6F6] ' /></a>
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
      email:"ahad.aiman@gmail.com",
      test:" Breath alcohol Testing ",
      date:"02-24-2024",
      amount:500,
    },
    {
        key: '2',
        si:2,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        email:"ahad.aiman@gmail.com",
        test:" Breath alcohol Testing ",
        date:"02-24-2024",
        amount:500,
      },
      {
        key: '3',
        si:3,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        email:"ahad.aiman@gmail.com",
        test:" Breath alcohol Testing ",
        date:"02-24-2024",
        amount:500,
      },
      {
        key: '4',
        si:4,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        email:"ahad.aiman@gmail.com",
        test:" Breath alcohol Testing ",
        date:"02-24-2024",
        amount:500,
      },
      {
        key: '5',
        si:5,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        email:"ahad.aiman@gmail.com",
        test:" Breath alcohol Testing ",
        date:"02-24-2024",
        amount:500,
      },
      {
        key: '6',
        si:6,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        email:"ahad.aiman@gmail.com",
        test:" Breath alcohol Testing ",
        date:"02-24-2024",
        amount:500,
      },
  ];

const RecentAppointments = () => {
    return (
        <Table  pagination={false} columns={columns} dataSource={data} />
    );
}

export default RecentAppointments;
