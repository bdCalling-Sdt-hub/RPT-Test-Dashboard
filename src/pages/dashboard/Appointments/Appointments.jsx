import { DatePicker } from "antd";
import AllUserList from "../../../components/AllUserList/AllUserList";
import { Space, Table } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";


const Appointments = () => {
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
        title: 'Type of Test',
        dataIndex: 'test',
        key: 'test',
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
          <Link to={`/dashboard/appointments/appointment-details/${record?.key}`} ><BsInfoCircle size={18} className='text-[#3BA6F6] ' /></Link>
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
      test:"Alcohol",
      amount:500
    },
    {
        key: '2',
        si:2,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        date:"02-24-2024",
        email:"ahad.aiman@gmail.com",
        test:"Alcohol",
        amount:500
      },
      {
        key: '3',
        si:3,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        date:"02-24-2024",
        email:"ahad.aiman@gmail.com",
        test:"Alcohol",
        amount:500
      },
      {
        key: '4',
        si:4,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        date:"02-24-2024",
        email:"ahad.aiman@gmail.com",
        test:"Alcohol",
        amount:500
      },
      {
        key: '5',
        si:5,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        date:"02-24-2024",
        email:"ahad.aiman@gmail.com",
        test:"Alcohol",
        amount:500
      },
      {
        key: '6',
        si:6,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        date:"02-24-2024",
        email:"ahad.aiman@gmail.com",
        test:"Alcohol",
        amount:500
      },
      {
        key: '7',
        si:7,
        name: 'John Brown',
        img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
        phone: 3254546454,
        date:"02-24-2024",
        email:"ahad.aiman@gmail.com",
        test:"Alcohol",
        amount:500
      },
      {
          key: '8',
          si:8,
          name: 'John Brown',
          img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
          phone: 3254546454,
          date:"02-24-2024",
          email:"ahad.aiman@gmail.com",
          test:"Alcohol",
          amount:500
        },
        {
          key: '9',
          si:9,
          name: 'John Brown',
          img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
          phone: 3254546454,
          date:"02-24-2024",
          email:"ahad.aiman@gmail.com",
          test:"Alcohol",
          amount:500
        },
        {
          key: '10',
          si:10,
          name: 'John Brown',
          img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
          phone: 3254546454,
          date:"02-24-2024",
          email:"ahad.aiman@gmail.com",
          test:"Alcohol",
          amount:500
        },
        {
          key: '11',
          si:11,
          name: 'John Brown',
          img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
          phone: 3254546454,
          date:"02-24-2024",
          email:"ahad.aiman@gmail.com",
          test:"Alcohol",
          amount:500
        },
        {
          key: '12',
          si:12,
          name: 'John Brown',
          img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
          phone: 3254546454,
          date:"02-24-2024",
          email:"ahad.aiman@gmail.com",
          test:"Alcohol",
          amount:500
        },
  ];

    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
    return (
        <div>
           <div className="ml-[24px] mt-[44px]">
            <div className="flex justify-between">
            <h1 className="text-[24px] text-primary font-semibold pb-3">
              Appointments
            </h1>
            <div className="flex gap-[24px]">
            <DatePicker placeholder="Start Date" className="border-2 border-[#3BA6F6] font-bold "  onChange={onChange}  picker="date" />
            <DatePicker placeholder="End Date" className="border-2 border-[#3BA6F6] font-bold "  onChange={onChange}  picker="date" />
            </div>
            </div>
          </div>
          <div className='ml-[24px] mt-[24px] bg-white rounded-lg'>
               <AllUserList data={data} columns={columns} />
          </div>
        </div>
    );
}

export default Appointments;
