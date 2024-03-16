import { IoIosNotificationsOutline } from "react-icons/io";
import NotificationCart from "../../../components/Notification/NotificationCart";
import { useGetNotificationQuery } from "../../../redux/features/getNotificationApi";
import Loading from "../../../components/Loading/Loading";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Notification = () => {
  const [page, setPage] = useState(1);
  const [socketNotification,setSocketNotification] = useState([]);
  const { data, isError, isLoading, isSuccess } = useGetNotificationQuery(page);

  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(()=>{
  //   const socketNotification = io("ws://103.145.138.54:8282");
  //   socketNotification.on("admin-notification",(data)=>{
  //     setSocketNotification(data)
  //   })
  //   socketNotification.off("admin-notification", data)
   
  // },[])
  useEffect(() => {
    const socket = io("ws://103.145.138.54:8282");
    socket.on("admin-notification", (data) => {
      setSocketNotification(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [socketNotification]);
  
  if (isLoading) {
    return <Loading />;
  }
  const notification = data?.data?.attributes?.notifications?.results;
  const socketNotifications  = socketNotification?.data?.notifications?.results
  console.log("socketNotifications",socketNotifications?.notifications?.results);
  console.log("notification",notification);
  const onChange = (values) => {
    setPage(values);
  };
  console.log(data);
  const totalResults = data?.data?.attributes?.notifications?.totalResults;
  // console.log(totalResults);
  const allNotifications = socketNotifications || notification;
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
          {allNotifications?.map((item, index) => (
            <NotificationCart key={index} item={item} />
          ))}
          </div>
          <div className="flex justify-center my-10">
            <Pagination
              onChange={onChange}
              defaultCurrent={1}
              total={totalResults}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
