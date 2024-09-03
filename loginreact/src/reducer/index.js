import userReducer from "./userReducer";
import signupReducer from "./signupReducer"
import { combineReducers } from "redux";

// 여러개의 리듀서를 하나로 합치자

export const reducer = combineReducers({
    userReducer, signupReducer
})