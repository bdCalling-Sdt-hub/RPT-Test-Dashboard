import { DatePicker, Space } from "antd";
import TotalEarningSection from "../../../components/TotalEarningSection/TotalEarningSection";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { BsInfoCircle } from "react-icons/bs";
import AllUserList from "../../../components/AllUserList/AllUserList";


const Earnings = () => {

    const columns = [
        {
            title: '#Tr.ID',
            dataIndex: 'tr',
            key: 'tr',
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
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
          },
        {
            title: 'Date',
            key: 'date',
            dataIndex: 'date',
            
          },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Link to='/dashboard/earnings/transactiondetails' ><BsInfoCircle size={18} className='text-[#3BA6F6] ' /></Link>
              <a><RxCross2 size={18} className='text-[red]'/></a>
            </Space>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          tr:123456,
          name: 'John Brown',
          img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
          phone: 3254546454,
          date:"02-24-2024",
          amount:500,
          email:"ahad.aiman@gmail.com",
          test:"Alcohol",
        },
        {
            key: '2',
            tr:123456,
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
            tr:123456,
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
            tr:123456,
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
            tr:123456,
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
            tr:123456,
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
            tr:123456,
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
              tr:123456,
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
              tr:123456,
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
              tr:123456,
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
              tr:123456,
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
              tr:123456,
              name: 'John Brown',
              img:"https://i.ibb.co/T48mrYj/197381012-2915728158682381-6698162649397856913-n.jpg",
              phone: 3254546454,
              date:"02-24-2024",
              email:"ahad.aiman@gmail.com",
              test:"Alcohol",
              amount:500
            }
      ];
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };

    return (
        <div>
            <div className="ml-[24px]">
            <TotalEarningSection/>
            </div>
            <div className="flex items-center gap-[24px] ml-[24px] my-[30px]">
                <h1 className="text-[20px] font-medium">Transactions</h1>
                <DatePicker placeholder="Start Date" className="border-2 border-[#3BA6F6] font-bold "  onChange={onChange}  picker="date" />
                <DatePicker placeholder="End Date" className="border-2 border-[#3BA6F6] font-bold "  onChange={onChange}  picker="date" />
            </div>
            <div className='ml-[24px] bg-white rounded-lg'>
               <AllUserList data={data} columns={columns}/>
            </div>
        </div>
    );
}

export default Earnings;
