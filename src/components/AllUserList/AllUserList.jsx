import {Table } from "antd";
import { useState } from "react";



const AllUserList = ({data,columns}) => {
  
  const [top, setTop] = useState('topLeft');
  const [bottom, setBottom] = useState('bottomRight');
    return (
        <Table  
          pagination={
            {
              position:["bottomCenter"]
            }
          } 
          columns={columns} 
          dataSource={data} 
        />
    );
}

export default AllUserList;
