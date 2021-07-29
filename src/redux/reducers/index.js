import { combineReducers } from "redux";
import userReducer from "./user";
import sanphamReducer from "./sanpham";
import oantuxiReducer from "./oantuxi"

const rootReducer = combineReducers({
    //combine child reducer
    userReducer,
    sanphamReducer,
    oantuxiReducer,
});

export default rootReducer;
