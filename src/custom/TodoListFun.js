import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function TodoListFun(props) {
  const todoItem = useSelector((state) => state.user.todoId);
  const info = useSelector((state) => state.user.user);

  const [items, setItems] = useState(null);

  useEffect(async () => {
    let todos = []
    todos = await props.todos;
    const userSameTodo = todos&&todos.filter((item) => item.userId === info.id);
    setItems(userSameTodo);
  }, [todoItem, info]);

  return {items}
}
