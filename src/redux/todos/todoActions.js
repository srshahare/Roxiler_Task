import axios from "axios";
import {
  FETCH_TODO_FAILURE,
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./todoTypes";

//todo actions
export const fetchTodoRequest = () => {
  return {
    type: FETCH_TODO_REQUEST,
  };
};

export const fetchTodoSuccess = (todos) => {
  return {
    type: FETCH_TODO_SUCCESS,
    payload: todos,
  };
};

export const fetchTodoFailure = (err) => {
  return {
    type: FETCH_TODO_FAILURE,
    payload: err,
  };
};

//user info actions
export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (user, id) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: {
      user,
      id
    },
  };
};

export const fetchUserFailure = (err) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: err,
  };
};

export const fetchList = () => {
  return (dispatch) => {
    dispatch(fetchTodoRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        const todos = response.data;
        dispatch(fetchTodoSuccess(todos));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchTodoFailure(errorMsg));
      });
  };
};

export const fetchUserInfo = (userId, id) => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        const user = response.data;
        dispatch(fetchUserSuccess(user, id));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
