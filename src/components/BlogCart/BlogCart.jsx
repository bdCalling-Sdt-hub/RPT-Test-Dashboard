import blogCart from "../../assets/dashboardAssets/blogPic.png";
import { FiUser } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import baseURL from "../../config";
// import { baseURL } from "../../../src/config";

const BlogCart = ({blog}) => {
  const {author,content,image,tags,title,_id,createdAt,description} = blog;
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  function formatDateAndMonth(dateString) {
    // Parse the date string
    const date = new Date(dateString);
  
    // Get the month and date components
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
    const day = date.getDate();
  
    // Format the result
    const formattedDate = `${month} ${day}`;
  
    return formattedDate;
  }
  
  // Example usage
  const result = formatDateAndMonth(createdAt);
  const handleDeleteBlog = async () =>{
    console.log(localStorage.getItem("token"));
    try {
      const response = await baseURL.delete(
        `/blog/${_id}`,
        {}
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
            navigate("/dashboard/blog");
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
  }


  return (
    <div className="p-[24px] bg-white w-[500px] rounded-xl">
      <div>
        <div className="relative">

        <img className="w-[450px] h-[240px] rounded-xl" src={`${baseUrl}${image?.url}`} alt="" />
        <span className="absolute top-0 left-0 bg-[#053248] px-[21px] py-[10px] text-white rounded-br-3xl font-medium rounded-tl-xl">Drug Testing</span>
        </div>
        <div className="flex gap-[27px] py-[16px] border-b-2 border-b-[#E8E8E8] items-center">
          <div className="flex gap-2 items-center">
            <FiUser className="text-[#6B6B6B]" size={18}/>
            <h1 className="text-[18px] text-[#6B6B6B]">{author}</h1>
          </div>
          <div className="flex gap-2 items-center">
          <CiCalendarDate className="text-[#6B6B6B]" size={18}/>
            <h1 className="text-[18px] text-[#6B6B6B]">{result}</h1>
          </div>
          
        </div>
          <div className="text-wrap">
            <h1 className="my-[16px] text-[24px] font-medium">{title}</h1>
            <p>{description}</p>
          </div>
          <div className="my-[32px]">
                <div className="flex gap-[24px] justify-center">
                    <p onClick={handleDeleteBlog} className="flex-1 px-[60px] py-[16px] text-[16px] cursor-pointer  bg-[#3BA6F6] rounded-lg text-white text-center">Delete Blog</p>
                    <Link to={`edit-blog/${_id}`} className="flex-1 px-[60px] cursor-pointer py-[16px] text-[16px]  border-2 border-[#3BA6F6] rounded-lg text-[#3BA6F6] text-center">Edit Blog</Link>
                </div>
            </div>
      </div>
    </div>
  );
};

export default BlogCart;
