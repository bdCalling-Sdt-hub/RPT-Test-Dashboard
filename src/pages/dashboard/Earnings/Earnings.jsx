import { DatePicker, Space } from "antd";
import TotalEarningSection from "../../../components/TotalEarningSection/TotalEarningSection";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { BsInfoCircle } from "react-icons/bs";
import AllUserList from "../../../components/AllUserList/AllUserList";
import { useGetPaymentQuery } from "../../../redux/features/getPaymentApi";
import Loading from "../../../components/Loading/Loading";
import { useState } from "react";


const Earnings = () => {
  const [startDate,setStartDate]=useState('')
  const [endDate,setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

    const {data:paymentList,isLoading,isSuccess,isError} = useGetPaymentQuery({startDate,endDate,currentPage})

    const columns = [
        {
            title: '#Tr.ID',
            dataIndex: 'tr',
            key: 'tr',
            render: (_, record) => <a>{record?.transactionId
              
            }</a>,
          },
        {
          title: 'Full Name',
          dataIndex: 'name',
          key: 'name',
          render: (_, record) => (
            <div className='flex gap-2 items-center'>
              <p className='font-medium'>{record?.paymentInformation?.fullName}</p>
            </div>
          ),
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
          render: (_, record) => (
            <div className='flex gap-2 items-center'>
              <p className='font-medium'>{record?.paymentInformation?.phoneNumber}</p>
            </div>
          ),
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          render: (_, record) => (
            <div className='flex gap-2 items-center'>
              <p className='font-medium'>{record?.paymentInformation?.email}</p>
            </div>
          ),
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (_, record) => (
              <div className='flex gap-2 items-center'>
                <p className='font-medium'>{record?.price.toFixed(2)}</p>
              </div>
            ),
          },
        {
            title: 'Date',
            key: 'date',
            dataIndex: 'date',
            render: (_, record) => (
              <div className='flex gap-2 items-center'>
                <p className='font-medium'>{record?.createdAt.split('T')[0]}</p>
              </div>
            ),
            
          },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Link to={`/dashboard/earnings/transaction-details/${record?._id}`} ><BsInfoCircle size={18} className='text-[#3BA6F6] ' /></Link>
            </Space>
          ),
        },
      ];
      // const data = [
      //   {
      //     key: '1',
      //     tr:123456,
      //     name: 'John Brown',
      //     img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
      //     phone: 3254546454,
      //     date:"02-24-2024",
      //     amount:500,
      //     email:"ahad.aiman@gmail.com",
      //     test:"Alcohol",
      //   },
      //   {
      //       key: '2',
      //       tr:123456,
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
      //       tr:123456,
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
      //       tr:123456,
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
      //       tr:123456,
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
      //       tr:123456,
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
      //       tr:123456,
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
      //         tr:123456,
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
      //         tr:123456,
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
      //         tr:123456,
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
      //         tr:123456,
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
      //         tr:123456,
      //         name: 'John Brown',
      //         img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
      //         phone: 3254546454,
      //         date:"02-24-2024",
      //         email:"ahad.aiman@gmail.com",
      //         test:"Alcohol",
      //         amount:500
      //       }
      // ];
   
   
   console.log(paymentList?.payments
    );
   if(isLoading){
    return <Loading/>
   }
      const onChangeStart = (date, dateString) => {
        console.log(date, dateString);
        setStartDate(dateString)
      };
      const onChangeEnd = (date, dateString) => {
        console.log(date, dateString);
        setEndDate(dateString)
      };
// console.log();
    return (
        <div>
            <div className="ml-[24px]">
            <TotalEarningSection/>
            </div>
            <div className="flex items-center gap-[24px] ml-[24px] my-[30px]">
                <h1 className="text-[20px] font-medium">Transactions</h1>
                <DatePicker placeholder="Start Date" className="border-2 border-[#3BA6F6] font-bold "  onChange={onChangeStart}  picker="date" />
                <DatePicker placeholder="End Date" className="border-2 border-[#3BA6F6] font-bold "  onChange={onChangeEnd}  picker="date" />
            </div>
            <div className='ml-[24px] bg-white rounded-lg'>
               <AllUserList data={paymentList?.payments} columns={columns} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
        </div>
    );
}

export default Earnings;
