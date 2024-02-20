import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MembershipCart = () => {
  return (
    <div className="w-[758px] bg-white rounded-lg ml-[24px]">
      <h1 className="py-[30px] text-[30px] font-semibold text-center">
        Compliant Consortium Membership
      </h1>
      <div className=" ">
        <div className="bg-[#3BA6F6] py-[30px] rounded-tl-full rounded-br-full">
          <h1 className="text-[34px] text-white font-semibold text-center">
            $219.99
          </h1>
          <p className="text-[18px] text-white text-center">
            *Renews Every Dec 1st At $279.99
          </p>
        </div>
        <div className="mt-[32px] pb-[26px] border-b-2 border-b-[#3BA6F6]">
          <h1 className="text-[18px] text-center mb-[15px]">
            Price per Drug Test <span className="font-medium">$69.99</span>
          </h1>
          <h1 className="text-[18px] text-center">
            Price per Breath Alcohol Test{" "}
            <span className="font-medium">$69.99</span>
          </h1>
        </div>
        <div className="mt-[34px] ml-[30px]">
          <div className="flex gap-[16px] items-start my-[16px]">
            <FaCircleCheck className="text-[#3BA6F6]" size={24} />
            <p>
              *DOT Requirement:Random consortium enrollment (includes enrollment
              certificate & random selections)
            </p>
          </div>
          <div className="flex gap-[16px] items-start my-[16px]">
            <FaCircleCheck className="text-[#3BA6F6]" size={24} />
            <p>
                Access to cloud-based software to order drug testing & view results electronically 24/7
            </p>
          </div>
          <div className="flex gap-[16px] items-start  my-[16px]">
            <FaCircleCheck className="text-[#3BA6F6]" size={24} />
            <p>
               Laboratory and Medical Review Officer (MRO) Services
            </p>
          </div>
          <div className="flex gap-[16px] items-start  my-[16px]">
            <FaCircleCheck className="text-[#3BA6F6]" size={24} />
            <p>
            Test result processing & reporting
            </p>
          </div>
          <div className="flex gap-[16px] items-start  my-[16px]">
            <FaCircleCheck className="text-[#3BA6F6]" size={24} />
            <p>
            Access to 20,000+ nationwide collection sites
            </p>
          </div>
          <div className="flex gap-[16px] items-start my-[16px]">
            <FaCircleCheck className="text-[#3BA6F6]" size={24} />
            <p>
            Annual Statistical Tracking & Reporting and Complete Audit Support
            </p>
          </div>
          <div className="flex gap-[16px] items-start my-[16px]">
            <FaCircleCheck className="text-[#3BA6F6]" size={24} />
            <p>
               Unlimited Consulting
            </p>
          </div>
        </div>
      </div>
      <div className="py-[30px]">
                <div className="flex gap-5 justify-center">
                    <Link to='editmembership'  className="px-[135px] py-[16px] text-[16px] cursor-pointer  bg-[#3BA6F6] rounded-lg text-white">Edit</Link>
                    <p className="px-[135px] cursor-pointer py-[16px] text-[16px]  border-2 border-[#3BA6F6] rounded-lg text-[#3BA6F6]">Delete</p>
                </div>
            </div>
    </div>
  );
};

export default MembershipCart;
