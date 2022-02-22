import { combineReducers } from "redux";

import { taskReducer } from "./taskReducer";

const rootReducer = combineReducers({
    task : taskReducer,
    user : ()=> null
})

export default rootReducer;