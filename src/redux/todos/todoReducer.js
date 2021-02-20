import {
    FETCH_TODO_FAILURE,
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS
  } from "./todoTypes";

const initialState = {
    loading: true,
    list: [],
    error: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TODO_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_TODO_SUCCESS:
            return {
                loading: false,
                list: action.payload,
                error: ''
            }
        case FETCH_TODO_FAILURE:
            return {
                loading: false,
                list: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer