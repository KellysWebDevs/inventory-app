import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import inventoryReducer from "./inventoryReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  inventory: inventoryReducer,
  errors: errorReducer,
});

export default rootReducer;
