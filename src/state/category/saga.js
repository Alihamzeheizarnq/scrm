import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { putWait, withCallback } from 'redux-saga-callback';

import axios from 'axios';
import { CategoryCreateError, CategoryCreateSuccess } from './action';
import { CATEGORY_CREATE_REQUEST } from './action-type';

//create saga
function* createCategory(action) {

    const args = {
        method: "POST",
        url: '/v1/users/category',
        data: action.payload,

    }
    try {
        const category = yield call(axios, args);
        yield put(CategoryCreateSuccess(category.data.category));
    } catch (e) {
        yield put(CategoryCreateError(e));
    }
}

function* categoryCreateSaga() {
    yield takeEvery(CATEGORY_CREATE_REQUEST, createCategory);
}
//end create saga


export default categoryCreateSaga
