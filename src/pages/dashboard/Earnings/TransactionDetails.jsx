import html2canvas from "html2canvas";
import { useRef } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useGetSingleAppointmentQuery } from "../../../redux/features/singleAppointmentApi";
import Loading from "../../../components/Loading/Loading";
import { useGetSinglePaymentQuery } from "../../../redux/features/getSinglePaymentApi";

const TransactionDetails = () => {
  const { id } = useParams();
  console.log(id);
  const {
    data: singlePayment,
    isLoading,
    isSuccess,
    isError,
  } = useGetSinglePaymentQuery(id);
  const componentRef = useRef();
  const navigate = useNavigate();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "",
  });

  if (isLoading) {
    return <Loading />;
  }
  console.log(singlePayment);
  const handleDownload = () => {
    const element = document.getElementById("content-to-download");

    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = "downloaded-content.png";
      link.click();
    });
  };

  return (
    <div>
      <div className="ml-[24px] cursor-pointer mt-[44px] flex items-center pb-3 gap-2">
        <MdOutlineKeyboardArrowLeft
          onClick={() => navigate("/dashboard/earnings")}
          size={34}
        />
        <h1 className="text-[24px] text-primary font-semibold">
          Transaction Details
        </h1>
      </div>
      <div className="ml-[24px] flex flex-col justify-between bg-white h-screen p-[24px] rounded-xl">
        <div ref={componentRef} id="content-to-download" className="p-[10px]">
          <h1 className="text-[18px] font-medium mb-[20px]">
            Transaction details :
          </h1>
          <div className="flex justify-between mb-[16px]">
            <p>Transaction ID:</p>
            <p>{singlePayment?.payment?.transactionId}</p>
          </div>
          {/* <div className="flex justify-between mb-[16px]">
                <p>A/C Holder Name:</p>
                <p>Jane Cooper</p>
            </div>
            <div className="flex justify-between mb-[16px]">
                <p>A/C Number:</p>
                <p>Jane Cooper</p>
            </div> */}
          <div className="flex justify-between mb-[16px]">
            <p>Received Amount:</p>
            <p>{singlePayment?.payment?.price.toFixed(2)} $</p>
          </div>
          <div className="flex justify-between mb-[16px]">
            <p>Date:</p>
            <p>{singlePayment?.payment?.createdAt.split("T")[0]}</p>
          </div>
          <div className="mt-[28px]">
            <h1 className="text-[18px] font-medium mb-[20px]">User Details:</h1>
            <div className="flex justify-between mb-[16px]">
              <p>Full Name:</p>
              <p>{singlePayment?.payment?.paymentInformation?.name
}</p>
            </div>
            {/* <div className="flex justify-between mb-[16px]">
              <p>Phone Number:</p>
              <p>{singlePayment?.payment?.paymentInformation?.phoneNumber}</p>
            </div> */}
            <div className="flex justify-between mb-[16px]">
              <p>Email:</p>
              <p>{singlePayment?.payment?.paymentInformation?.email}</p>
            </div>
            
          </div>
        </div>

        <div className="">
          <div className="flex gap-5 justify-center">
            <p
              onClick={handleDownload}
              className="px-[135px] py-[16px] text-[16px] cursor-pointer  bg-[#3BA6F6] rounded-lg text-white"
            >
              Download
            </p>
            <p
              onClick={handlePrint}
              className="px-[135px] cursor-pointer py-[16px] text-[16px]  border-2 border-[#3BA6F6] rounded-lg text-[#3BA6F6]"
            >
              Print
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
