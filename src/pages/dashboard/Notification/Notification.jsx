import { IoIosNotificationsOutline } from "react-icons/io";
import NotificationCart from "../../../components/Notification/NotificationCart";
import { useGetNotificationQuery } from "../../../redux/features/getNotificationApi";
import Loading from "../../../components/Loading/Loading";
import { Pagination } from "antd";
import { useState } from "react";


const Notification = () => {
  const [page, setPage] = useState(1);
  const {data,isError,isLoading,isSuccess,} = useGetNotificationQuery(page);
  if(isLoading){
    return <Loading/>
  }
  const notification = data?.data?.attributes?.notifications?.results;
  console.log(notification);
  const onChange = (values) => {
    console.log(values);
    setPage(values);
  };
  console.log(data);
  const totalResults = data?.data?.attributes?.notifications?.totalResults;
  console.log(totalResults);
  
    return (
        <div>
      <div className="pl-[24px] ">
        <div className="rounded-xl overflow-hidden">
          <div className="">
            <h1 className="text-[24px] text-primary font-semibold pb-3">
              Notification
            </h1>
          </div>
          <div className="flex flex-col">
    
            {
              notification?.map((item,index)=> <NotificationCart key={item?._id} item={item}/>)
            }
         
          </div>
          <div className="flex justify-center my-10">
        <Pagination onChange={onChange} defaultCurrent={1} total={totalResults} />
        
      </div>
        </div>
      </div>
    </div>
    );
}

export default Notification;
