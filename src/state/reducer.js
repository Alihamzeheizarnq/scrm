import { combineReducers } from "redux";
import UserReducer from './users/reducer';

const rootReducer = combineReducers({
    users: UserReducer
});


export default rootReducer;
