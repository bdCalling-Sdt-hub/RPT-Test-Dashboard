import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteMembershipMutation } from "../../redux/features/Membership/deleteMembershipApi";
import baseURL from "../../config";
import Swal from "sweetalert2";

const MembershipCart = ({ membership }) => {
  // const [id,setId] = useState();
  const navigate = useNavigate();
  // const [setId, { data, error }] = useDeleteMembershipMutation()

  // console.log(membership);
  // eslint-disable-next-line react/prop-types
  const {
    _id,
    title,
    PerBreathAlcoholTestPrice,
    PerDrugTestPrice,
    price,
    features,
  } = membership;
  // console.log(features,title);
  const handleDelete = async () => {
    try {
      const response = await baseURL.delete(
        `/membership/${_id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response.data);
      if (response.data.code == 200) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: response.data.message,
              icon: "success",
            });
            navigate("/dashboard/membership");
            window.location.reload();
          }
        });
      }
    } catch (error) {
      console.log("Delete Fail", error?.response?.data?.message);
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: error?.response?.data?.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };
  return (
    <div className="w-[] bg-white rounded-lg ml-[24px]">
      <h1 className="py-[30px] text-[30px] font-semibold text-center">
        {title}
      </h1>
      <div className=" ">
        <div className="bg-[#3BA6F6] py-[30px] rounded-tl-full rounded-br-full">
          <h1 className="text-[34px] text-white font-semibold text-center">
            ${price}
          </h1>
          <p className="text-[18px] text-white text-center">
            *Renews Every Dec 1st At $279.99
          </p>
        </div>
        <div className="mt-[32px] pb-[26px] border-b-2 border-b-[#3BA6F6]">
          <h1 className="text-[18px] text-center mb-[15px]">
            Price per Drug Test{" "}
            <span className="font-medium">${PerDrugTestPrice}</span>
          </h1>
          <h1 className="text-[18px] text-center">
            Price per Breath Alcohol Test{" "}
            <span className="font-medium">${PerBreathAlcoholTestPrice}</span>
          </h1>
        </div>
        <div className="mt-[34px] ml-[30px]">
          {features?.map((feature, index) => (
            <div key={index} className="flex gap-[16px] items-start my-[16px]">
              <FaCircleCheck className="text-[#3BA6F6]" size={24} />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-[30px]">
        <div className="flex gap-5 justify-center">
          <Link
            to={`edit-membership/${_id}`}
            className="px-[135px] py-[16px] text-[16px] cursor-pointer  bg-[#3BA6F6] rounded-lg text-white"
          >
            Edit
          </Link>
          <p
            onClick={handleDelete}
            className="px-[135px] cursor-pointer py-[16px] text-[16px]  border-2 border-[#3BA6F6] rounded-lg text-[#3BA6F6]"
          >
            Delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default MembershipCart;
