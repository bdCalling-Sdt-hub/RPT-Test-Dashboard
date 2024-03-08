import { BsCalendar2 } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { useGetStatusQuery } from "../../redux/features/getStatusApi";
import Loading from "../Loading/Loading";

function Status() {
  const {data,isError,isLoading,isSuccess} = useGetStatusQuery();
  if(isLoading){
    return <Loading/>
  }

  function formatToK(number) {
    return (number / 1000).toFixed(2) + 'k';
}

  return (
    <div className="flex  gap-5">
      <div className="flex-1 rounded-lg  border-1 shadow-lg items-center py-[16px] px-[50px] bg-white border-primary border-[1px] p-[24px] flex gap-[33px]">
       
         <FaHandHoldingUsd size={64} className=" text-[#3BA6F6] p-[16px] bg-[#EBF6FE] rounded-[24px]" />
        <div>
          <h4 className="text-[18px]">Total Earnings</h4>
          <h1 className="text-[#3BA6F6] text-[32px] font-semibold">$ {formatToK(data?.total)}</h1>
        </div>
      </div>
      <div className="flex-1 rounded-lg  border-1 shadow-lg items-center py-[16px] px-[50px] bg-white border-primary border-[1px] p-[24px] flex gap-[33px]">
      <BsCalendar2 size={64} className=" text-[#3BA6F6] p-[16px] bg-[#EBF6FE] rounded-[24px]"/> 
        <div>
          <h4 className="text-[18px]">Total Appointments</h4>
          <h1 className="text-[#3BA6F6] text-[32px] font-semibold">{data?.
totalAppointment}</h1>
        </div>
      </div>
      {/* <div className="rounded-lg w-[33%] border-1 shadow-lg items-center py-[16px] px-[50px] bg-white border-primary border-[1px] p-[24px] flex gap-5">
      <HiOutlineUsers  size={64} className=" text-[#3BA6F6] p-[16px] bg-[#EBF6FE] rounded-[24px]"/>
        <div>
          <h4 className="text-[18px]">Total Users</h4>
          <h1 className="text-[#3BA6F6] text-[32px] font-semibold">7,850</h1>
        </div>
      </div> */}
    </div>
  );
}

export default Status;