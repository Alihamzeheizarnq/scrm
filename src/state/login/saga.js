import { call, put, takeEvery } from 'redux-saga/effects'
import { toast } from 'react-toastify';
import axios from 'axios';

import { LodingSuccessRequest, LoginErrorRequest, ShowLodingLogin, ShowLodingLoginFullPage } from './action';
import { LOGIN_REQUEST } from './action-type';

//create saga
function* Login(action) {


    console.log(action);
    const args = {
        method: "POST",
        url: '/v1/login',
        data: action.payload.data,
        withCredentials: true

    }
    try {
        const auth = yield call(axios, args);
        yield put(LodingSuccessRequest(auth.data.user));
        yield put(ShowLodingLogin(false));
        yield toast.success('ورود موفق !');
        yield put(ShowLodingLoginFullPage(true));
        yield setTimeout(() => {
            action.payload.router.push('/');
        }, 3000)
        // yield put(ShowLodingLoginFullPage(false));


    } catch (e) {

        if (e.response.status == 401) {

            yield toast.error(e.response.data.errors.message);
        }
        yield put(LoginErrorRequest(e));
    }
}

function* LoginSaga() {
    yield takeEvery(LOGIN_REQUEST, Login);

}
export default LoginSaga;