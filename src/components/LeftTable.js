import React from "react";
import { Table } from "antd";
import { TableFun } from "../custom/TableFun";


const LeftTable = (props) => {
  
  //functional component of table
  const {
    data,
    columns
  } = TableFun(props);

  return (
    <div>
      <h3>Todo List</h3>
      <Table
        dataSource={data}
        loading={props.loading}
        columns={columns}
      ></Table>
    </div>
  );
};

export default LeftTable;
