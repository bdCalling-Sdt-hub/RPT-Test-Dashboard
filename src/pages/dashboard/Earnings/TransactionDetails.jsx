import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const TransactionDetails = () => {
    const navigate = useNavigate();
    return (
        <div>
           <div className="ml-[24px] mt-[44px] flex items-center pb-3 gap-2">
           <MdOutlineKeyboardArrowLeft

          onClick={() => navigate("/dashboard/earnings")}
          size={34}
        />
            <h1 className="text-[24px] text-primary font-semibold">
              Transaction Details
            </h1>
          </div>
          <div  className="ml-[24px] flex flex-col justify-between bg-white h-screen p-[24px] rounded-xl">
            <div className="">
            <h1 className="text-[18px] font-medium mb-[20px]">User Details:</h1>
            <div className="flex justify-between mb-[16px]">
                <p>Transaction ID:</p>
                <p>Jane Cooper</p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>A/C Holder Name:</p>
                <p>Jane Cooper</p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>A/C Number:</p>
                <p>Jane Cooper</p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>Received amount:</p>
                <p>Jane Cooper</p>
            </div>
            <div className="mt-[28px]">
            <h1 className="text-[18px] font-medium mb-[20px]">User Details:</h1>
            <div className="flex justify-between mb-[16px]">
                <p>Full Name:</p>
                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>Phone Number:</p>
                <p>(319) 555-0115</p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>Email:</p>
                <p>aiman@gmail.com</p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>Type of Test:</p>
                <p>aiman@gmail.com</p>
            </div>
            </div>
            </div>
           
            
            <div className="">
                <div className="flex gap-5 justify-center">
                    <p className="px-[135px] py-[16px] text-[16px] cursor-pointer  bg-[#3BA6F6] rounded-lg text-white">Download</p>
                    <p className="px-[135px] cursor-pointer py-[16px] text-[16px]  border-2 border-[#3BA6F6] rounded-lg text-[#3BA6F6]">Print</p>
                </div>
            </div>
           
          </div>
        </div>
    );
}

export default TransactionDetails;
