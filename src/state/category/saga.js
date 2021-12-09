import { call, put, takeEvery } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import axios from 'axios'

import {
    CategoryCreateError,
    CategoryCreateSuccess,
    CategoryListDelete,
    CategoryListDeleteClear,
    CategorySelectError,
    CategorySelectSuccess,
    ShowCategoryModal,
} from './action'
import {
    CATEGORY_CREATE_REQUEST,
    CATEGORY_LIST_DELETE_ADD,
    CATEGORY_SELECT_REQUEST,
} from './action-type'

function* createCategory(action) {
    const args = {
        method: 'POST',
        url: '/v1/users/category',
        data: action.payload.data,
    }
    try {
        const category = yield call(axios, args)
        yield put(CategoryCreateSuccess(category.data.category))
        yield put(ShowCategoryModal(false))
        yield toast.success('دسته بندی با موفقیت ثبت گردید')
    } catch (e) {
        if (e.response.status == 401) {
            setTimeout(() => {
                action.payload.router.push('/login')
            }, 2000)

            yield toast.error('هویت نامعتبر !')
        }
        yield put(CategoryCreateError(e))
    }
}

function* selectCategory() {
    const args = {
        method: 'GET',
        url: '/v1/users/category',
    }
    try {
        const category = yield call(axios, args)

        yield put(CategorySelectSuccess(category.data.category))
    } catch (e) {
        yield put(CategorySelectError(e))
    }
}

function* deleteCategory(action) {
    if (action.status) {
        yield put(CategoryListDelete(action.payload))
    } else {
        yield put(CategoryListDeleteClear(action.payload))
    }
    console.log(action)
}
function* categorySaga() {
    yield takeEvery(CATEGORY_CREATE_REQUEST, createCategory)
    yield takeEvery(CATEGORY_SELECT_REQUEST, selectCategory)
    yield takeEvery(CATEGORY_LIST_DELETE_ADD, deleteCategory)
}
export default categorySaga
