import { combineReducers } from "redux";
import { todoSlice } from "./Todo";

const rootReducer = combineReducers({
    todo: todoSlice.reducer,
});
export default rootReducer;
