import { all } from '@redux-saga/core/effects'
import categorySaga from './category/saga'
import LoginSaga from './login/saga'
import themeSaga from './theme/saga'
import userSaga from './users/saga'

export default function* rootSaga() {
    yield all([userSaga(), categorySaga(), LoginSaga(), themeSaga()])
}
