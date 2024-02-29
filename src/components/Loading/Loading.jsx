import { Spin } from "antd";

const Loading = ({size}) => {
  return (
    <div className="example">
      <Spin size={size} />
    </div>
  );
};

export default Loading;
