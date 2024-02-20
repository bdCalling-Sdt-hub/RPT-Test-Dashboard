import blogCart from "../../assets/dashboardAssets/blogPic.png";
import { FiUser } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";

const BlogCart = () => {
  return (
    <div className="p-[24px] bg-white w-[500px] rounded-xl">
      <div>
        <div className="relative">

        <img className="w-[450px] h-[240px] rounded-xl" src={blogCart} alt="" />
        <span className="absolute top-0 left-0 bg-[#053248] px-[21px] py-[10px] text-white rounded-br-3xl font-medium rounded-tl-xl">Drug Testing</span>
        </div>
        <div className="flex gap-[27px] py-[16px] border-b-2 border-b-[#E8E8E8] items-center">
          <div className="flex gap-2 items-center">
            <FiUser className="text-[#6B6B6B]" size={18}/>
            <h1 className="text-[18px] text-[#6B6B6B]">Rayhan Kellar</h1>
          </div>
          <div className="flex gap-2 items-center">
          <CiCalendarDate className="text-[#6B6B6B]" size={18}/>
            <h1 className="text-[18px] text-[#6B6B6B]">Feb 05, 24</h1>
          </div>
          
        </div>
          <div>
            <h1 className="my-[16px] text-[24px] font-medium">The Different Types Of Drug Test</h1>
            <p>All Drug Testing RPT LABS Centers locations are able to provide immediate drug and alcohol testing for individuals.</p>
          </div>
          <div className="my-[32px]">
                <div className="flex gap-[24px] justify-center">
                    <p className="flex-1 px-[60px] py-[16px] text-[16px] cursor-pointer  bg-[#3BA6F6] rounded-lg text-white text-center">Delete Blog</p>
                    <p className="flex-1 px-[60px] cursor-pointer py-[16px] text-[16px]  border-2 border-[#3BA6F6] rounded-lg text-[#3BA6F6] text-center">Edit Blog</p>
                </div>
            </div>
      </div>
    </div>
  );
};

export default BlogCart;
