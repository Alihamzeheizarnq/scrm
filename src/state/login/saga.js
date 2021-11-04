import { call, put, takeEvery } from 'redux-saga/effects'
import { toast } from 'react-toastify';
import axios from 'axios';

import { LodingSuccessRequest, LoginErrorRequest, ShowLodingLogin } from './action';
import { LOGIN_REQUEST } from './action-type';

//create saga
function* Login(action) {

    const args = {
        method: "POST",
        url: '/v1/login',
        data: action.payload,

    }
    try {
        const category = yield call(axios, args);
        yield put(LodingSuccessRequest(category.data.user));
        yield put(ShowLodingLogin(false));
        yield toast.success('ورود موفق !');

    } catch (e) {
        yield put(LoginErrorRequest(e));
    }
}

function* LoginSaga() {
    yield takeEvery(LOGIN_REQUEST, Login);

}
export default LoginSaga;