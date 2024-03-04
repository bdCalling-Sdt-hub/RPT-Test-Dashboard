import { useRef } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import html2canvas from 'html2canvas';
import { useGetSingleAppointmentQuery } from "../../../redux/features/singleAppointmentApi";
import Loading from "../../../components/Loading/Loading";


const AppointmentDetails = () => {
    const componentRef = useRef();
    const navigate = useNavigate();
    const {id} = useParams();
    const {data,isError,isLoading,isSuccess} = useGetSingleAppointmentQuery(id)
    console.log(id);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        pageStyle: "",
      });

      const handleDownload = () => {
        const element = document.getElementById('content-to-download');
    
        html2canvas(element).then((canvas) => {
          const link = document.createElement('a');
          link.href = canvas.toDataURL();
          link.download = 'downloaded-content.png';
          link.click();
        });
      };
      if(isLoading){
        return <Loading/>
      }
      console.log(data);
    return (
        <div>
           <div className="ml-[24px] cursor-pointer mt-[44px] flex items-center pb-3 gap-2">
           <MdOutlineKeyboardArrowLeft

          onClick={() => navigate("/dashboard/appointments")}
          size={34}
        />
            <h1 className="text-[24px] text-primary font-semibold">
              Appointments Details 
            </h1>
          </div>
          <div className="ml-[24px] flex flex-col justify-between bg-white h-screen p-[24px] rounded-xl">
            <div ref={componentRef} id="content-to-download" className="p-[10px]">
            <h1 className="text-[18px] font-medium mb-[20px]">User Details:</h1>
            <div className="flex justify-between mb-[16px]">
                <p>First Name:</p>
                <p>Jane Cooper</p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>Phone Number:</p>
                <p>Jane Cooper</p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>Email:</p>
                <p>Jane Cooper</p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>Type of Test:</p>
                <p>Jane Cooper</p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>Date:</p>
                <p>Jane Cooper</p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>Amount</p>
                <p>Jane Cooper</p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>Payment status:</p>
                <p>Jane Cooper</p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>Joining date:</p>
                <p><span className="text-green-500 font-medium" >paid</span></p>
            </div>
            <div className="mt-[28px]">
            <h1 className="text-[18px] font-medium mb-[20px]">Site Details:</h1>
            <div className="flex justify-between mb-[16px]">
                <p>Location:</p>
                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>Phone Number:</p>
                <p>(319) 555-0115</p>
            </div>
          
            </div>
            </div>
           
            
            <div className="">
                <div className="flex gap-5 justify-center">
                    <p onClick={handleDownload} className="px-[135px] py-[16px] text-[16px] cursor-pointer  bg-[#3BA6F6] rounded-lg text-white">Download</p>
                    <p onClick={handlePrint} className="px-[135px] cursor-pointer py-[16px] text-[16px]  border-2 border-[#3BA6F6] rounded-lg text-[#3BA6F6]">Print</p>
                </div>
            </div>
           
          </div>
        </div>
    );
}

export default AppointmentDetails;
