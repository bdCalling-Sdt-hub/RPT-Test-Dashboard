import logo from "../assets/signup/rtp_labs_logo.png";
import GiveMoney from "../assets/signup/giveMoney.png";
import { BiSolidDashboard } from "react-icons/bi";
import { HiLogout } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi";
import { BsCalendar2 } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { BiDollarCircle } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { PiCrownSimpleLight } from "react-icons/pi";
import Header from "../components/Header/Header";
const Dashboard = () => {
  return (
    <div className="flex bg-[#EBF6FE] p-[32px] min-h-screen">
      <div className="w-[326px] flex flex-col justify-between bg-[#FFFFFF] min-h-screen rounded-lg border-2">
        <div className="">
          <div className="p-[32px]">
            <img src={logo} alt="" />
          </div>
          <div className="">
            <ul>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive, isPending }) =>
                  isPending ? "flex text-[#3BA6F6] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[white] m-[16px] rounded-lg " : isActive ? "flex text-white gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#3BA6F6]  m-[16px] rounded-lg border-2 border-gray-600" : "flex text-[#3BA6F6] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[white] m-[16px] rounded-lg"
                }
                >
                  <BiSolidDashboard /> Dashboard
                </NavLink>
              </li>
              <NavLink
                  to="/dashboard/users"
                  className={({ isActive, isPending }) =>
                  isPending ? "flex text-[#3BA6F6] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[white] m-[16px] rounded-lg" : isActive ? "flex text-white gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#3BA6F6]  m-[16px] rounded-lg" : "flex text-[#3BA6F6] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px]  m-[16px] rounded-lg"
                }
                >
              
                <HiOutlineUsers />
                Users
              
              </NavLink>

              <NavLink
                  to="/dashboard/appointments"
                  className={({ isActive, isPending }) =>
                  isPending ? "flex text-[#3BA6F6] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[white] m-[16px] rounded-lg" : isActive ? "flex text-white gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#3BA6F6]  m-[16px] rounded-lg" : "flex text-[#3BA6F6] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px]  m-[16px] rounded-lg"
                }
                >
              
              <BsCalendar2 /> 
                Appointments
              
              </NavLink>

              <NavLink
                  to="/dashboard/earnings"
                  className={({ isActive, isPending }) =>
                  isPending ? "flex text-[#3BA6F6] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[white] m-[16px] rounded-lg" : isActive ? "flex text-white gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#3BA6F6]  m-[16px] rounded-lg" : "flex text-[#3BA6F6] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px]  m-[16px] rounded-lg"
                }
                >
              
              <BiDollarCircle/>
                Earnings
              
              </NavLink>

              {/* <li className="cursor-pointer">
                <details className="group">
                  <summary className="flex text-white gap-2 items-center justify-between text-[18px] p-[20px] bg-[#3BA6F6] mx-[16px] rounded-lg font-medium marker:content-none hover:cursor-pointer">
                    <span className="flex gap-2">
                      <FaHandHoldingMedical />

                      <span>Types of test</span>
                    </span>
                    <IoIosArrowForward className="w-5 h-5 text-white font-bold transition group-open:rotate-90" />
                  </summary>

                  <article className="px-4 pb-4">
                    <ul className="flex flex-col gap-1 pl-2">
                      <li className="border-2 border-[#A5D6FB] mt-[16px] p-[16px] rounded-lg text-[#62B8F8] font-medium">
                        <Link to="">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <BsDot />
                              Drug testing
                            </div>
                            <RiArrowRightSLine className="w-5 h-5 font-bold " />
                          </div>{" "}
                        </Link>
                      </li>
                      <li className="border-2 border-[#A5D6FB] mt-[16px] p-[16px] rounded-lg text-[#62B8F8] font-medium">
                        <Link to="">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <BsDot /> Alcohol testing
                            </div>
                            <RiArrowRightSLine className="w-5 h-5 font-bold " />
                          </div>{" "}
                        </Link>
                      </li>
                      <li className="border-2 border-[#A5D6FB] mt-[16px] p-[16px] rounded-lg text-[#62B8F8] font-medium">
                        <Link to="">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <BsDot /> DNA testing
                            </div>
                            <RiArrowRightSLine className="w-5 h-5 font-bold " />
                          </div>{" "}
                        </Link>
                      </li>
                      <li className="border-2 border-[#A5D6FB] mt-[16px] p-[16px] rounded-lg text-[#62B8F8] font-medium">
                        <Link to="">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <BsDot /> Employer/Drug testing
                            </div>
                            <RiArrowRightSLine className="w-5 h-5 font-bold " />
                          </div>{" "}
                        </Link>
                      </li>
                    </ul>
                  </article>
                </details>
              </li> */}
              <NavLink
                  to="/dashboard/membership"
                  className={({ isActive, isPending }) =>
                  isPending ? "flex text-[#3BA6F6] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[white] m-[16px] rounded-lg" : isActive ? "flex text-white gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#3BA6F6]  m-[16px] rounded-lg" : "flex text-[#3BA6F6] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px]  m-[16px] rounded-lg"
                }
                >
              
              <PiCrownSimpleLight />
                Membership
              
              </NavLink>
              <NavLink
                  to="/dashboard/blog"
                  className={({ isActive, isPending }) =>
                  isPending ? "flex text-[#3BA6F6] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[white] m-[16px] rounded-lg" : isActive ? "flex text-white gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#3BA6F6]  m-[16px] rounded-lg" : "flex text-[#3BA6F6] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px]  m-[16px] rounded-lg"
                }
                >
              
              <IoBookOutline />
                Blog
              </NavLink>
              <NavLink
                  to="/dashboard/settings"
                  className={({ isActive, isPending }) =>
                  isPending ? "flex text-[#3BA6F6] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[white] m-[16px] rounded-lg" : isActive ? "flex text-white gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#3BA6F6]  m-[16px] rounded-lg" : "flex text-[#3BA6F6] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px]  m-[16px] rounded-lg"
                }
                >
              
              <CiSettings /> Setting
              </NavLink>
              
            </ul>
          </div>
        </div>
        <div className="mb-[32px]">
          <Link to="/" className="flex items-center ml-[18px] cursor-pointer gap-2 text-[#3BA6F6] font-medium">
            <HiLogout size={25} />
            <span className="text-[20px] ">Log Out</span>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <div className="ml-[24px]">
             <Header />   
        </div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
