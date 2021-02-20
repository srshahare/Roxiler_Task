import { combineReducers } from 'redux'
import todoReducer from './todos/todoReducer'
import userReducer from './todos/userReducer'

const rootReducer = combineReducers({
    todo: todoReducer,
    user: userReducer
    //for more reducer we can user combineReducers method
})

export default rootReducer;