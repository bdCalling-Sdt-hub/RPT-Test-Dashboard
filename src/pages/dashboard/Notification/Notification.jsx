import { IoIosNotificationsOutline } from "react-icons/io";


const Notification = () => {
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
            <div className="flex bg-white gap-[16px] items-center p-[16px] my-[16px] rounded-lg">
              {/* <div className="w-10 h-10 flex p-[7px] rounded bg-[#EEF6EA] "> */}
              <IoIosNotificationsOutline
                style={{ cursor: "pointer" }}
                className={` bg-primary w-[52px] h-[52px] text-[#3BA6F6] border-2 border-[#3BA6F6] rounded-full p-2 `}
              />
              {/* </div> */}
              
                <h1 className="text-[16px] font-normal">
                    Jane has booked an appointment for drug testing.
                </h1>
                <p className="text-[14px] text-[#979797]">Fri, 12:30pm</p>
            
            </div>
            <div className="flex bg-white gap-[16px] items-center p-[16px] my-[16px] rounded-lg">
              {/* <div className="w-10 h-10 flex p-[7px] rounded bg-[#EEF6EA] "> */}
              <IoIosNotificationsOutline
                style={{ cursor: "pointer" }}
                className={` bg-primary w-[52px] h-[52px] text-[#3BA6F6] border-2 border-[#3BA6F6] rounded-full p-2 `}
              />
              {/* </div> */}
              
                <h1 className="text-[16px] font-normal">
                    Jane has booked an appointment for drug testing.
                </h1>
                <p className="text-[14px] text-[#979797]">Fri, 12:30pm</p>
            
            </div>
            <div className="flex bg-white gap-[16px] items-center p-[16px] my-[16px] rounded-lg">
              {/* <div className="w-10 h-10 flex p-[7px] rounded bg-[#EEF6EA] "> */}
              <IoIosNotificationsOutline
                style={{ cursor: "pointer" }}
                className={` bg-primary w-[52px] h-[52px] text-[#3BA6F6] border-2 border-[#3BA6F6] rounded-full p-2 `}
              />
              {/* </div> */}
              
                <h1 className="text-[16px] font-normal">
                    Jane has booked an appointment for drug testing.
                </h1>
                <p className="text-[14px] text-[#979797]">Fri, 12:30pm</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Notification;
