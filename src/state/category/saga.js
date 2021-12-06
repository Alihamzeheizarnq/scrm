import { call, put, takeEvery } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import axios from 'axios'

import {
    CategoryCreateError,
    CategoryCreateSuccess,
    CategoryDeleteError,
    CategoryDeleteSuccess,
    CategoryEditSuccess,
    CategoryListDelete,
    CategoryListDeleteClear,
    CategorySelectError,
    CategorySelectRequest,
    CategorySelectSuccess,
    ShowCategoryModal,
    ShowModalEditOpen,
} from './action'
import {
    CATEGORY_CREATE_REQUEST,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_EDIT_REQUEST,
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

function* deleteCategoryServer(action) {
    const args = {
        method: 'DELETE',
        url: '/v1/users/category/delete',
        data: action.payload,
    }
    try {
        const status = yield call(axios, args)

        if (status.data.status) {
            yield put(CategoryDeleteSuccess(action.payload))
            yield put(CategorySelectRequest())
            yield toast.warning('دسته بندی با موفقیت  حذف گردید')
        }
    } catch (error) {
        yield put(CategoryDeleteError(error))
    }
}

function* editCategoryServer(action) {
    const args = {
        method: 'PUT',
        url: `/v1/users/category/edit/${action.payload.id}`,
        data: action.payload,
    }
    try {
        const category = yield call(axios, args);

        yield put(CategoryEditSuccess(action.payload));
        yield put(ShowModalEditOpen(false));
        yield toast.success('دسته بندی با موفقیت  ویرایش گردید')

    } catch (error) {}
}
function* categorySaga() {
    yield takeEvery(CATEGORY_CREATE_REQUEST, createCategory)
    yield takeEvery(CATEGORY_SELECT_REQUEST, selectCategory)
    yield takeEvery(CATEGORY_LIST_DELETE_ADD, deleteCategory)
    yield takeEvery(CATEGORY_DELETE_REQUEST, deleteCategoryServer)
    yield takeEvery(CATEGORY_EDIT_REQUEST, editCategoryServer)
}
export default categorySaga
