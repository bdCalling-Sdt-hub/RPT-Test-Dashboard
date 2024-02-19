import AllUserList from "../../../components/AllUserList/AllUserList";
import RecentAppointments from "../../../components/RecentAppointments/RecentAppointments";


const UserList = () => {
    return (
        <div>
           <div className="ml-[24px] mt-[44px]">
            <h1 className="text-[24px] text-primary font-semibold pb-3">
              User List
            </h1>
          </div>
          <div className='ml-[24px] mt-[24px]'>
               <AllUserList/>
            </div>
        </div>
    );
}

export default UserList;
