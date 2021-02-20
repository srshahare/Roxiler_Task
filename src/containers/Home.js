import React, { useEffect } from "react";
import { connect } from "react-redux";
import LeftTable from "../components/LeftTable";
import Right from "../components/Right";
import { fetchList } from "../redux/todos/todoActions";
import "./Home.css";

const Home = (props) => {
  useEffect(() => {
    props.fetchList();
  }, [])

    return (
      <div className="Home">
        <div className="UserList">
          <LeftTable
            todos={!props.data.loading && props.data.list}
            loading={props.data.loading}
          />
        </div>
        <div className="UserDetails">
            <Right />
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    data: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchList: () => dispatch(fetchList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
