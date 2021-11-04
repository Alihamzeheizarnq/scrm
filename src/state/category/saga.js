import { call, put, takeEvery } from 'redux-saga/effects'
import { toast } from 'react-toastify';
import axios from 'axios';

import { CategoryCreateError, CategoryCreateSuccess, CategorySelectError, CategorySelectSuccess, ShowCategoryModal } from './action';
import { CATEGORY_CREATE_REQUEST, CATEGORY_SELECT_REQUEST } from './action-type';

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
        yield put(ShowCategoryModal(false));
        yield toast.success('دسته بندی با موفقیت ثبت گردید');

    } catch (e) {
        console.log(e.response);
        yield put(CategoryCreateError(e));
    }
}
const onError = (err) => {
    console.log(err)
  }

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






function* categorySaga() {
    yield takeEvery(CATEGORY_CREATE_REQUEST, createCategory);
    yield takeEvery(CATEGORY_SELECT_REQUEST, selectCategory);

}
export default categorySaga;