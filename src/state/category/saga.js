import { call, put, takeEvery } from 'redux-saga/effects'

import { toast } from 'react-toastify'
import axios from 'axios'

import * as ActionCreators from './action'
import * as Actions from './action-type'

function* createCategory(action) {
    const args = {
        method: 'POST',
        url: '/v1/users/category',
        data: action.payload.data,
    }
    try {
        const category = yield call(axios, args)
        yield put(ActionCreators.CategoryCreateSuccess(category.data.category))
        yield put(ActionCreators.ShowCategoryModal(false))
        yield toast.success('دسته بندی با موفقیت ثبت گردید')
    } catch (e) {
        if (e.response.status == 401) {
            setTimeout(() => {
                action.payload.router.push('/login')
            }, 2000)

            yield toast.error('هویت نامعتبر !')
        }
        yield put(ActionCreators.CategoryCreateError(e))
    }
}

function* selectCategory() {
    const args = {
        method: 'GET',
        url: '/v1/users/category',
    }
    try {
        const category = yield call(axios, args)

        yield put(ActionCreators.CategorySelectSuccess(category.data.category))
    } catch (e) {
        yield put(ActionCreators.CategorySelectError(e))
    }
}

function* deleteCategory(action) {
    if (action.status) {
        yield put(ActionCreators.CategoryListDelete(action.payload))
    } else {
        yield put(ActionCreators.CategoryListDeleteClear(action.payload))
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
            yield put(ActionCreators.CategoryDeleteSuccess(action.payload))
            yield put(ActionCreators.CategorySelectRequest())
            yield toast.warning('دسته بندی با موفقیت  حذف گردید')
        }
    } catch (error) {
        yield put(ActionCreators.CategoryDeleteError(error))
    }
}

function* editCategoryServer(action) {
    const args = {
        method: 'PUT',
        url: `/v1/users/category/edit/${action.payload.id}`,
        data: action.payload,
    }
    try {
        yield call(axios, args)
        yield put(ActionCreators.CategoryEditSuccess(action.payload))
        yield put(ActionCreators.ShowModalEditOpen(false))
        yield toast.success('دسته بندی با موفقیت  ویرایش گردید')
    } catch (error) {}
}
function* categorySaga() {
    yield takeEvery(Actions.CATEGORY_CREATE_REQUEST, createCategory)
    yield takeEvery(Actions.CATEGORY_SELECT_REQUEST, selectCategory)
    yield takeEvery(Actions.CATEGORY_LIST_DELETE_ADD, deleteCategory)
    yield takeEvery(Actions.CATEGORY_DELETE_REQUEST, deleteCategoryServer)
    yield takeEvery(Actions.CATEGORY_EDIT_REQUEST, editCategoryServer)
}
export default categorySaga
