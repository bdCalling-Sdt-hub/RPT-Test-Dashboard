import { DatePicker } from "antd";
import AllUserList from "../../../components/AllUserList/AllUserList";
import { Space, Table } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useGetAppointmentQuery } from "../../../redux/features/getAppointmentApi";
import Loading from "../../../components/Loading/Loading";
import { useState } from "react";

const Appointments = () => {
 const [startDate,setStartDate] =  useState('')
 const [endDate,setEndDate] =  useState('')
 const [currentPage, setCurrentPage] = useState(1);
  const {
    data: allAppointment,
    isError,
    isLoading,
    isSuccess,
  } = useGetAppointmentQuery({startDate,currentPage,endDate});

  const columns = [
    {
      title: "#SI",
      dataIndex: "si",
      key: "si",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="items-center">
          <p className="font-medium">
            {record?.individualDOTInformation?.paymentInformation?.fullName}
          </p>
        </div>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (_, record) => (
        <div>
          <p className="font-medium">
            {record?.individualDOTInformation?.paymentInformation?.phoneNumber}
          </p>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, record) => (
        <div>
          <p className="font-medium">
            {record?.individualDOTInformation?.paymentInformation?.email}
          </p>
        </div>
      ),
    },
    {
      title: "Type of Test",
      dataIndex: "test",
      key: "test",
      render: (_, record) => (
        <div>
          <p className="font-medium">{record?.shoppingCart?.name}</p>
        </div>
      ),
    },
//     {
//       title: "Type",
//       dataIndex: "type",
//       key: "type",
//       render: (_, record) => (
//         <div>
//           <p className="font-medium">{record?.type
// }</p>
//         </div>
//       ),
//     },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
      render: (_, record) => (
        <div>
          <p className="font-medium">{record?.createdAt.split("T")[0]}</p>
        </div>
      ),
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
      render: (_, record) => (
        <div>
          <p className="font-medium">{record?.quantity}</p>
        </div>
      ),
    },
    {
      title: "Amount",
      key: "amount",
      dataIndex: "amount",
      render: (_, record) => (
        <div>
          <p className="font-medium">${Math.ceil( record?.shoppingCart?.
price * record?.quantity)}</p>
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            to={`/dashboard/appointments/appointment-details/${record?._id}`}
          >
            <BsInfoCircle size={18} className="text-[#3BA6F6] " />
          </Link>
         
        </Space>
      ),
    },
  ];
  // const data = [
  //   {
  //     key: '1',
  //     si:1,
  //     name: 'John Brown',
  //     img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
  //     phone: 3254546454,
  //     date:"02-24-2024",
  //     email:"ahad.aiman@gmail.com",
  //     test:"Alcohol",
  //     amount:500
  //   },
  //   {
  //       key: '2',
  //       si:2,
  //       name: 'John Brown',
  //       img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
  //       phone: 3254546454,
  //       date:"02-24-2024",
  //       email:"ahad.aiman@gmail.com",
  //       test:"Alcohol",
  //       amount:500
  //     },
  //     {
  //       key: '3',
  //       si:3,
  //       name: 'John Brown',
  //       img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
  //       phone: 3254546454,
  //       date:"02-24-2024",
  //       email:"ahad.aiman@gmail.com",
  //       test:"Alcohol",
  //       amount:500
  //     },
  //     {
  //       key: '4',
  //       si:4,
  //       name: 'John Brown',
  //       img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
  //       phone: 3254546454,
  //       date:"02-24-2024",
  //       email:"ahad.aiman@gmail.com",
  //       test:"Alcohol",
  //       amount:500
  //     },
  //     {
  //       key: '5',
  //       si:5,
  //       name: 'John Brown',
  //       img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
  //       phone: 3254546454,
  //       date:"02-24-2024",
  //       email:"ahad.aiman@gmail.com",
  //       test:"Alcohol",
  //       amount:500
  //     },
  //     {
  //       key: '6',
  //       si:6,
  //       name: 'John Brown',
  //       img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
  //       phone: 3254546454,
  //       date:"02-24-2024",
  //       email:"ahad.aiman@gmail.com",
  //       test:"Alcohol",
  //       amount:500
  //     },
  //     {
  //       key: '7',
  //       si:7,
  //       name: 'John Brown',
  //       img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
  //       phone: 3254546454,
  //       date:"02-24-2024",
  //       email:"ahad.aiman@gmail.com",
  //       test:"Alcohol",
  //       amount:500
  //     },
  //     {
  //         key: '8',
  //         si:8,
  //         name: 'John Brown',
  //         img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
  //         phone: 3254546454,
  //         date:"02-24-2024",
  //         email:"ahad.aiman@gmail.com",
  //         test:"Alcohol",
  //         amount:500
  //       },
  //       {
  //         key: '9',
  //         si:9,
  //         name: 'John Brown',
  //         img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
  //         phone: 3254546454,
  //         date:"02-24-2024",
  //         email:"ahad.aiman@gmail.com",
  //         test:"Alcohol",
  //         amount:500
  //       },
  //       {
  //         key: '10',
  //         si:10,
  //         name: 'John Brown',
  //         img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
  //         phone: 3254546454,
  //         date:"02-24-2024",
  //         email:"ahad.aiman@gmail.com",
  //         test:"Alcohol",
  //         amount:500
  //       },
  //       {
  //         key: '11',
  //         si:11,
  //         name: 'John Brown',
  //         img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
  //         phone: 3254546454,
  //         date:"02-24-2024",
  //         email:"ahad.aiman@gmail.com",
  //         test:"Alcohol",
  //         amount:500
  //       },
  //       {
  //         key: '12',
  //         si:12,
  //         name: 'John Brown',
  //         img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
  //         phone: 3254546454,
  //         date:"02-24-2024",
  //         email:"ahad.aiman@gmail.com",
  //         test:"Alcohol",
  //         amount:500
  //       },
  // ];

  const onChangeStartDate = (date, dateString) => {
    console.log(date, dateString);
    setStartDate(dateString)
  };

  const onChangeEndDate = (date, dateString) => {
    console.log(date, dateString);
    setEndDate(dateString)
  };

  if (isLoading) {
    return <Loading />;
  }
  if (isSuccess) {
    console.log(allAppointment?.data?.attributes?.results);
  }
  console.log(allAppointment?.data?.attributes?.results);
  console.log(allAppointment);
  return (
    <div>
      <div className="ml-[24px] mt-[44px]">
        <div className="flex justify-between">
          <h1 className="text-[24px] text-primary font-semibold pb-3">
            Appointments
          </h1>
          <div className="flex gap-[24px]">
            <DatePicker
              placeholder="Start Date"
              className="border-2 border-[#3BA6F6] font-bold "
              onChange={onChangeStartDate}
              picker="date"
            />
            <DatePicker
              placeholder="End Date"
              className="border-2 border-[#3BA6F6] font-bold "
              onChange={onChangeEndDate}
              picker="date"
            />
          </div>
        </div>
      </div>
      <div className="ml-[24px] mt-[24px] bg-white rounded-lg">
        <AllUserList
          data={allAppointment?.data?.attributes}
          columns={columns}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Appointments;
