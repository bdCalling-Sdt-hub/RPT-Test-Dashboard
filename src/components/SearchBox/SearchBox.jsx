import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const SearchBox = () => {
  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        className="w-[150%]"
      />
    </div>
  );
};

export default SearchBox;
