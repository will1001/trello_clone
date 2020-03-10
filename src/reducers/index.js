import { combineReducers } from "redux";
import ListReducer from "./listsReducer"


export default combineReducers({
    lists:ListReducer
}); 