import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BlogCart from "../../../components/BlogCart/BlogCart";
import { useGetAllBlogQuery } from "../../../redux/features/blog/getAllBlogApi";
import Loading from "../../../components/Loading/Loading";
import { Pagination } from "antd";
import { useState } from "react";

const Blog = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { data, isError, isLoading, isSuccess } = useGetAllBlogQuery(page);

  const allBlogs = data?.data?.attributes?.results;
  if (isLoading) {
    return <Loading />;
  }
  const onChange = (values) => {
    console.log(values);
    setPage(values);
  };
  const totalBlog = data?.data?.attributes?.totalResults;
  console.log(data);
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
        {allBlogs?.map((blog, index) => (
          <BlogCart key={blog?._id} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Pagination onChange={onChange} defaultCurrent={1} total={totalBlog} />
        
      </div>
    </div>
  );
};

export default Blog;
