import { combineReducers } from "redux";
import { todoSlice } from "./todo";

const rootReducer = combineReducers({
    todo: todoSlice.reducer,
});
//reducer 들을 모아둠
export default rootReducer;
