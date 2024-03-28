import { useRef } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import { useGetSingleAppointmentQuery } from "../../../redux/features/singleAppointmentApi";
import Loading from "../../../components/Loading/Loading";

const AppointmentDetails = () => {
  const componentRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isError, isLoading, isSuccess } =
    useGetSingleAppointmentQuery(id);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "",
  });

  const handleDownload = () => {
    const element = document.getElementById("content-to-download");

    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = "downloaded-content.png";
      link.click();
    });
  };
  if (isLoading) {
    return <Loading />;
  }
  console.log(data?.data?.attributes);
  const appointmentDetails = data?.data?.attributes;
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
      <div className="ml-[24px] flex flex-col justify-between bg-white min-h-screen p-[24px] rounded-xl">
        <div ref={componentRef} id="content-to-download" className="p-[10px]">
          {appointmentDetails?.type == "individual" ? (
            <div>
              <h1 className="text-[28px] font-medium mb-[20px]">
                {appointmentDetails?.shoppingCart?.name}
              </h1>
              <div className="flex justify-between mb-[16px]">
                <p>First Name:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.data?.fastName
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Last Name:</p>
                <p>
                  {
                     appointmentDetails?.individualDOTInformation
                     ?.data?.lastName
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Phone Number:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.data?.phone
                  }
                </p>
              </div>

              <div className="flex justify-between mb-[16px]">
                <p>Result Email:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.data?.resultEmail
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Test Reason:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.data?.testReason
                  }
                </p>
              </div>
            </div>
          ) : appointmentDetails?.type == "individual-non-dot-test" ? (
            <div>
              <h1 className="text-[28px] font-medium mb-[20px]">
                {appointmentDetails?.shoppingCart?.name}
              </h1>
              <div className="flex justify-between mb-[16px]">
                <p>First Name:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.data?.fastName
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Last Name:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data?.lastName
                  }
                </p>
              </div>
              {/* <div className="flex justify-between mb-[16px]">
                <p>Company Name:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.data?.companyName
                  }
                </p>
              </div> */}
              <div className="flex justify-between mb-[16px]">
                <p>Phone Number:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.data?.phoneNumber
                  }
                </p>
              </div>

              <div className="flex justify-between mb-[16px]">
                <p>Email:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.data?.email
                  }
                </p>
              </div>
              {/* <div className="flex justify-between mb-[16px]">
                <p>Test Reason:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.individualInformation?.testReason
                  }
                </p>
              </div> */}
            </div>
          ) : appointmentDetails?.type == "individual-dot-test" ? (
            <div>
              <h1 className="text-[28px] font-medium mb-[20px]">
                {appointmentDetails?.shoppingCart?.name}
              </h1>
              <div className="flex justify-between mb-[16px]">
                <p>First Name:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data?.fastName
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Last Name:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data?.lastName
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Phone Number:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data
                     .phoneNumber
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Date Of Birth:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data?.dateOfBirth.split(
                      "T"
                    )[0]
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Company Name:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.data?.companyContactName
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Company Address:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.data?.companyAddress
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Company Phone Number:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.data?.companyPhoneNumber
                  }
                </p>
              </div>

              <div className="flex justify-between mb-[16px]">
                <p>DOT Agency:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.data?.dotAgency
                  }
                </p>
              </div>

              <div className="flex justify-between mb-[16px]">
                <p>Result Email:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.data?.resultEmail
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Test Reason:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation
                      ?.data?.testReason
                  }
                </p>
              </div>
            </div>
          ) : appointmentDetails?.type == "choice-membership-dot" ? (
            <div>
              <h1 className="text-[28px] font-medium mb-[20px]">
                {appointmentDetails?.shoppingCart?.name}
              </h1>
              <div className="flex justify-between mb-[16px]">
                <p>Company Name:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.companyInformation?.companyName
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Company Email:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.companyInformation?.companyEmail
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Company Address:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.companyInformation?.companyAddress
                  }
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.companyInformation?.companyCity
                  }
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.companyInformation?.companyState
                  }
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.companyInformation?.CompanyZip
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Company Agency:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.companyInformation?.companyAgency
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Number Of Employee:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.companyInformation?.
                      numberOfEmployees
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Contact Name:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.companyInformation?.contactFirstName
                  }{" "}
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.companyInformation?.contactLastName
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Primary Phone Number:</p>
                <p>
                {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.companyInformation?.
                      primaryPhone
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Secondary Phone Number:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.companyInformation?.secondaryPhone
                  }
                </p>
              </div>

              <div className="flex justify-between mb-[16px]">
                <p>Test Completed Each Year:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.companyInformation?.
                      TestsCompletedEachYear
                      
                  }
                </p>
              </div>

             
             
            </div>
          ) : appointmentDetails?.type == "policy" ? (
            <div>
              <h1 className="text-[28px] font-medium mb-[20px]">
                {appointmentDetails?.shoppingCart?.name}
              </h1>
              <div className="flex justify-between mb-[16px]">
                <p>Name:</p>
                <p>
                  {`${
                    appointmentDetails?.individualDOTInformation?.data
                      ?.fastName
                  } ${ appointmentDetails?.individualDOTInformation?.data
                    ?.lastName}`}
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Email:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.orderEmail
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Phone:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.phone
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Result Email:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.resultEmail
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>SSN:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.ssn
                  }
                </p>
              </div>
              <div className="flex justify-between mb-[16px]">
                <p>Test Reason:</p>
                <p>
                  {
                    appointmentDetails?.individualDOTInformation?.data
                      ?.testReason
                  }{" "}
                </p>
              </div>
            

             
             
            </div>
          ): (
            ""
          )}
{
  appointmentDetails?.type == "individual-non-dot-test" || appointmentDetails?.type == "choice-membership-dot" || appointmentDetails?.type == "policy" ? "":<div className="mt-[28px]">
  <h1 className="text-[24px] font-medium mb-[20px]">
    Medical Details:
  </h1>
  <div className="flex justify-between mb-[16px]">
    <p>Name:</p>
    <p>{appointmentDetails?.selectedLocation?.facilityName} </p>
  </div>
  <div className="flex justify-between mb-[16px]">
    <p>Address:</p>
    <p>
      {" "}
      {appointmentDetails?.selectedLocation?.address}
      {appointmentDetails?.selectedLocation?.ST} -{" "}
      {appointmentDetails?.selectedLocation?.city},{" "}
      {appointmentDetails?.selectedLocation?.COUNTY},{" "}
      {appointmentDetails?.selectedLocation?.ZIP}
    </p>
  </div>
  <div className="flex justify-between mb-[16px]">
    <p>Phone Number:</p>
    <p>{appointmentDetails?.selectedLocation?.PHONE} </p>
  </div>
  
  {/* <div className="flex justify-between mb-[16px]">
    <p>Hours Of Operation:</p>
    <p>{appointmentDetails?.selectedLocation?.HoursOfOperation} </p>
  </div> */}
</div>
}
          

          <div>
            <h1 className="text-[28px] font-medium mb-[20px]">
              Payment Information:
            </h1>
            <div className="flex justify-between mb-[16px]">
              <p>Full Name:</p>
              <p>
                {
                  appointmentDetails?.individualDOTInformation
                    ?.paymentInformationData?.name
                }
              </p>
            </div>
            <div className="flex justify-between mb-[16px]">
              <p>Email:</p>
              <p>
                {
                  appointmentDetails?.individualDOTInformation
                  ?.paymentInformationData?.email
                }
              </p>
            </div>
            {/* <div className="flex justify-between mb-[16px]">
              <p>Phone Number:</p>
              <p>
                {
                  appointmentDetails?.individualDOTInformation
                    ?.paymentInformation?.phoneNumber
                }
              </p>
            </div> */}
            <div className="flex justify-between mb-[16px]">
              <p>Billing Address:</p>
              <p>
                {
                   appointmentDetails?.individualDOTInformation
                   ?.paymentInformationData?.billingAddress
                }
              </p>
            </div>
            <div className="flex justify-between mb-[16px]">
              <p>Date:</p>
              <p>{appointmentDetails?.createdAt.split("T")[0]}</p>
            </div>
            <div className="flex justify-between mb-[16px]">
              <p>Quantity</p>
              <p>{appointmentDetails?.quantity}</p>
            </div>
            <div className="flex justify-between mb-[16px]">
              <p>Amount</p>
              <p>
                $
                {Math.ceil(
                  appointmentDetails?.shoppingCart?.price *
                    appointmentDetails?.quantity
                )}
              </p>
            </div>
            <div className="flex justify-between mb-[16px]">
              <p>Payment status:</p>
              <p>
                <span className="text-green-500 font-medium">Paid</span>
              </p>
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

export default AppointmentDetails;
