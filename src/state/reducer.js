import { combineReducers } from "redux";
import UserReducer from './users/reducer';
import CategoryReducer from './category/reducer';

const rootReducer = combineReducers({
    users: UserReducer,
    category: CategoryReducer
});


export default rootReducer;
