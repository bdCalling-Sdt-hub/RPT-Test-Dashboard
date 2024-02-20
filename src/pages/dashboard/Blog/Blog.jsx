import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BlogCart from "../../../components/BlogCart/BlogCart";

const Blog = () => {
    const navigate = useNavigate();
    return (
        <div>
             <div className="flex justify-end">
        <div
          onClick={(e) => navigate("/dashboard/blog/add-blog")}
          className="flex gap-2 items-center py-[15px]
                 px-[40px]
                  bg-[#3BA6F6]
                  rounded-lg
                  text-white
                  cursor-pointer
                  "
        >
          <FaPlus size={17} />
          <p>Add Blog</p>
        </div>
      </div>
            <div className="ml-[24px] flex flex-wrap gap-[24px]">
                <BlogCart/>
                <BlogCart/>
                <BlogCart/>
                <BlogCart/>
            </div>
        </div>
    );
}

export default Blog;
