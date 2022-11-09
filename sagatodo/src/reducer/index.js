import { combineReducers } from "redux";
import todo from "./todo";

const rootReducer = combineReducers({ todo });
//reducer 들을 모아둠
export default rootReducer;
