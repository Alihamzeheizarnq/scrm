import { combineReducers } from 'redux'
import UserReducer from './users/reducer'
import CategoryReducer from './category/reducer'
import LoginReducer from './login/reducer'
import ThemeReducer from './theme/reducer'

const rootReducer = combineReducers({
    users: UserReducer,
    category: CategoryReducer,
    auth: LoginReducer,
    theme : ThemeReducer
})

export default rootReducer
