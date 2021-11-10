import { combineReducers } from 'redux'
import UserReducer from './users/reducer'
import CategoryReducer from './category/reducer'
import LoginReducer from './login/reducer'

const rootReducer = combineReducers({
    users: UserReducer,
    category: CategoryReducer,
    auth: LoginReducer,
})

export default rootReducer
