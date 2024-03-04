import { Spin } from "antd";

const Loading = ({size='large'}) => {
  return (
    <div className="example">
      <Spin size={size} />
    </div>
  );
};

export default Loading;
