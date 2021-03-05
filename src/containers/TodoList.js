import React from "react";
import {TodoListFun} from '../custom/TodoListFun'

const TodoList = (props) => {

  //functional component of todoList
  const {items} = TodoListFun(props)

  return (
    <div className="SingleItem">
      {items && items.map(item => (
          <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default TodoList;
