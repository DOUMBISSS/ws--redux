import { combineReducers } from "redux";
import { profilReducer } from './profilReducer';


export const rootReducer = combineReducers({
    profilReducer : profilReducer,
}) 