import { combineReducers } from "redux";
import sanphamReducer from "./sanpham";

const rootReducer = combineReducers({
    //combine child reducer
    sanphamReducer,
});

export default rootReducer;
