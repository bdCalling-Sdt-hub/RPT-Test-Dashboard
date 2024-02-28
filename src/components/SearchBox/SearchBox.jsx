import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useState } from "react";
const { Search } = Input;
import { IoSearch } from "react-icons/io5";



const SearchBox = () => {
  const [query,setQuery] = useState('');
  const handleSearch = (e)=>{
    setQuery(e.target.value)
  }
  console.log(query);
  return (
    <div className="">
      <Input
        placeholder="Search by name/email/phone number "
        name='search'
        onChange={handleSearch}
        value={query}
        className="p-[14px] w-[150%] text-[18px] border-2 border-[#3BA6F6]"
        prefix={
          <IoSearch className="text-[#3BA6F6]" size={30} />
        }
      />
    </div>
  );
};

export default SearchBox;
