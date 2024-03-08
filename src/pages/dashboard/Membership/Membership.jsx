import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import MembershipCart from "../../../components/MembershipCart/MembershipCart";
import { useGetMembershipQuery } from "../../../redux/features/getMembershipApi";
import Loading from "../../../components/Loading/Loading";
import { Pagination } from 'antd';
import { useState } from "react";

const Membership = () => {
  const navigate = useNavigate();
  const [page,setPage ] = useState(1);
  const {data:allMembership ,isError,isLoading,isSuccess} = useGetMembershipQuery(page);

  console.log(allMembership?.data?.attributes?.results);
  if(isLoading){
    return <Loading/>
  }
  console.log(allMembership);

  const onChange = (values)=>{
    console.log(values);
    setPage(values)
  }

  const totalMembershipCart = allMembership?.data?.attributes?.totalResults;
  const memberships = allMembership?.data?.attributes?.results
  console.log(memberships);
  return (
    <div>
      <div className="flex justify-end">
        {
          memberships.length<2 && <div
          onClick={(e) => navigate("/dashboard/membership/addmembership")}
          className="flex gap-2 items-center py-[15px]
                 px-[40px]
                  bg-[#3BA6F6]
                  rounded-lg
                  text-white
                  cursor-pointer
                  "
        >
          <FaPlus size={17} />
          <p>Add Membership</p>
        </div>
        }
        
      </div>
      <div className="grid lg:grid-cols-2 gap-5 mt-5 mr-5">
        {
          memberships?.map((membership,index)=> <MembershipCart key={membership._id} membership={membership} />)
        }
       
      </div>
      <div className="flex justify-center my-10">

      <Pagination onChange={onChange} defaultCurrent={1} total={totalMembershipCart} />
      </div>
    </div>
  );
};

export default Membership;
