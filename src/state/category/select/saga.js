import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import axios from 'axios';
import { CategorySelectError, CategorySelectSuccess } from './action';
import { CATEGORY_SELECT_REQUEST } from './action-type';

//selct saga
function* selectCategory() {


    const args = {
        method: "GET",
        url: '/v1/users/category',

    }
    try {
        const category = yield call(axios, args);
        console.log(category)



        yield put(CategorySelectSuccess(category.data.category));
    } catch (e) {
        yield put(CategorySelectError(e));
    }
}

function* categorySelectSaga() {
    yield takeEvery(CATEGORY_SELECT_REQUEST, selectCategory);
}
//end select saga


export {
    categorySelectSaga
}
