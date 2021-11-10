import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { UserFetchErrorAction, UserFetchSuccesAction } from './action'
import { USER_FETCH_REQUESTED } from './action-type'

function* fetchUser(action) {
    try {
        const user = yield 1
        yield put(UserFetchSuccesAction('1'))
    } catch (e) {
        yield put(UserFetchErrorAction('message'))
    }
}

function* userSaga() {
    yield takeEvery(USER_FETCH_REQUESTED, fetchUser)
}

export default userSaga
