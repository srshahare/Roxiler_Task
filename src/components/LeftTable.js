import React, { Component, useEffect, useState } from "react";
import { Button, Input, Space, Table, Tag } from "antd";
import { useDispatch } from "react-redux";
import { fetchUserInfo } from "../redux/todos/todoActions";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const { Column } = Table;

const LeftTable = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!props.loading) {
      dispatch(fetchUserInfo(props.todos[0].userId, props.todos[0]));
    }
  }, [props.loading]);

  let data = props.todos;
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  let searchInput = null;

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "ToDo ID",
      dataIndex: "id",
      key: "id",
      width: "15%",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      ...getColumnSearchProps("title"),
    },
    {
      title: "Status",
      dataIndex: "completed",
      key: "id",
      render: (completed) => (
        <Tag color="blue" key={"tag"}>
          {completed ? "Completed" : "Pending"}
        </Tag>
      ),
    },
    {
      title: "Action",
      dataIndex: "userId",
      key: "userId",
      render: (userId, id) => (
        <Button onClick={() => dispatch(fetchUserInfo(userId, id))}>
          View User
        </Button>
      ),
    },
  ];

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
