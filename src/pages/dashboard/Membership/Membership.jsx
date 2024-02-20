import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import MembershipCart from "../../../components/MembershipCart/MembershipCart";

const Membership = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-end">
        <div
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
      </div>
      <div>
        <MembershipCart />
      </div>
    </div>
  );
};

export default Membership;
