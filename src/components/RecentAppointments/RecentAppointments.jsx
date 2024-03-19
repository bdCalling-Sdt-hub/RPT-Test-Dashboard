import { Space, Table, Tag } from 'antd';
import { BsInfoCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

import Loading from '../Loading/Loading';
import { useGetRecentAppointmentQuery } from '../../redux/features/getRecentAppointmentApi';

 

const RecentAppointments = () => {
  const {
    data: allAppointment,
    isError,
    isLoading,
    isSuccess,
  } = useGetRecentAppointmentQuery();
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
          {record?.individualDOTInformation?.paymentInformationData?.name}
          </p>
        </div>
      ),
    },
    // {
    //   title: "Phone",
    //   dataIndex: "phone",
    //   key: "phone",
    //   render: (_, record) => (
    //     <div>
    //       <p className="font-medium">
    //         {record?.individualDOTInformation?.paymentInformation?.phoneNumber}
    //       </p>
    //     </div>
    //   ),
    // },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, record) => (
        <div>
          <p className="font-medium">
          {record?.individualDOTInformation?.paymentInformationData?.email}
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
          <p className="font-medium">{record?.shoppingCart?.name || record?.shoppingCart?.title }</p>
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
  if(isLoading){
    return <Loading/>
  }
  console.log(allAppointment);
  const resentAppointment = allAppointment?.data?.attributes?.results.slice(0,5);
  console.log(resentAppointment);
    return (
        <Table  pagination={false} columns={columns} dataSource={resentAppointment} />
    );
}

export default RecentAppointments;
