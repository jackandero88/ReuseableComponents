import { combineReducers } from "redux";
import trackerReducer from "./trackerReducer";
import objectiveReducer from "./objectiveReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    trackerReducer,
    objectiveReducer,
    userReducer
});

export default rootReducer;