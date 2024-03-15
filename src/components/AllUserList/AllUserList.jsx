import {Table } from "antd";
import { useState } from "react";



const AllUserList = ({data,columns,currentPage,setCurrentPage}) => {
  const {results,totalPages,totalResults,limit} = data;
  console.log(results,totalPages);
   // Initialize current page state

  const handleChangePage = (page) => {
    setCurrentPage(page);
    console.log(page);
  };
  
  // const [top, setTop] = useState('topLeft');
  // const [bottom, setBottom] = useState('bottomRight');
  console.log(currentPage);
    return (
        <Table  
          pagination={
            {
              position:["bottomCenter"],
              current: currentPage,
              pageSize:limit,
              total:totalResults,
              showSizeChanger: false,
              onChange: handleChangePage,
          } 
        }
          columns={columns} 
          dataSource={results} 
        />
    );
}

export default AllUserList;
