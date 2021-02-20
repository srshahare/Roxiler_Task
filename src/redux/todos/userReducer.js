import {
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
  } from "./todoTypes";

const initialState = {
    loading: true,
    error: '',
    user: null,
    todoId: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload.user,
                todoId: action.payload.id,
                error: ''
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                user: null,
                error: action.payload
            }
        default: return state
    }
}

export default reducer