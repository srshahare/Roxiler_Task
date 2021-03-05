import React from "react";
import LeftTable from "../components/LeftTable";
import Right from "../components/Right";
import HomeFun from "../custom/HomeFun";
import "./Home.css";
import TodoList from "./TodoList";

const Home = (props) => {
  
  //functional component of home component
  const { data } = HomeFun(props)

  return (
    <div className="Home">
      <div className="UserList">
        <LeftTable
          todos={!data.loading && data.list}
          loading={data.loading}
        />
      </div>
      <div className="RightContent">
        <div className="UserDetails">
          <Right />
        </div>
        <div className="UserSameTodos">
          <TodoList todos={!data.loading && data.list} />
        </div>
      </div>
    </div>
  );
};



export default Home;
