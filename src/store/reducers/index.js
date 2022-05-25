import hobbyReducer from "./hobby";
import { combineReducers } from "redux";
import { useReducer } from "./user";


const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: useReducer
})

export default rootReducer