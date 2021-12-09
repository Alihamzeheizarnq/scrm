import {
    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS_REQUEST,
    CATEGORY_CREATE_ERROR,
    CATEGORY_SELECT_REQUEST,
    CATEGORY_SELECT_SUCCESS_REQUEST,
    CATEGORY_SELECT_ERROR,
    SHOW_CATEGORY_MODAL,
    CATEGORY_LIST_DELETE_ADD,
    CATEGORY_LIST_DELETE,
    CATEGORY_LIST_DELETE_CLEAR,
    SHOW_CATEGORY_DELETE_MODAL_OPEN,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS_REQUEST,
    CATEGORY_DELETE_ERROR,
    SHOW_CATEGORY_EDIT_MODAL_OPEN,
    CATEGORY_EDIT_DATA,
    CATEGORY_EDIT_REQUEST,
    CATEGORY_EDIT_SUCCESS_REQUEST,
    CATEGORY_EDIT_ERROR,
} from './action-type'

export const CategoryCreateRequest = (data) => ({
    type: CATEGORY_CREATE_REQUEST,
    payload: data,
})
export const CategoryCreateSuccess = (data) => ({
    type: CATEGORY_CREATE_SUCCESS_REQUEST,
    payload: data,
})
export const CategoryCreateError = (error) => ({
    type: CATEGORY_CREATE_ERROR,
    payload: error,
})

export const CategorySelectRequest = () => ({
    type: CATEGORY_SELECT_REQUEST,
})
export const CategorySelectSuccess = (data) => ({
    type: CATEGORY_SELECT_SUCCESS_REQUEST,
    payload: data,
})
export const CategorySelectError = (error) => ({
    type: CATEGORY_SELECT_ERROR,
    payload: error,
})

export const ShowCategoryModal = (bool) => ({
    type: SHOW_CATEGORY_MODAL,
    payload: bool,
})
export const CategoryListDelete = (id) => ({
    type: CATEGORY_LIST_DELETE,
    payload: id,
})
export const CategoryListDeleteAdd = (id, bool) => ({
    type: CATEGORY_LIST_DELETE_ADD,
    payload: id,
    status: bool,
})
export const CategoryListDeleteClear = (id) => ({
    type: CATEGORY_LIST_DELETE_CLEAR,
    payload: id,
})

export const ShowModalDeleteOpen = (bool) => ({
    type: SHOW_CATEGORY_DELETE_MODAL_OPEN,
    payload: bool,
})

export const CategoryDeleteRequest = (data) => ({
    type: CATEGORY_DELETE_REQUEST,
    payload: data,
})
export const CategoryDeleteSuccess = (data) => ({
    type: CATEGORY_DELETE_SUCCESS_REQUEST,
    payload: data,
})
export const CategoryDeleteError = (error) => ({
    type: CATEGORY_DELETE_ERROR,
    payload: error,
})

export const ShowModalEditOpen = (bool) => ({
    type: SHOW_CATEGORY_EDIT_MODAL_OPEN,
    payload: bool,
})
export const CategoryEditData = (data) => ({
    type: CATEGORY_EDIT_DATA,
    payload: data,
})

/// edit request action
export const CategoryEditRequest = (data) => ({
    type: CATEGORY_EDIT_REQUEST,
    payload: data,
})
export const CategoryEditSuccess = (data) => ({
    type: CATEGORY_EDIT_SUCCESS_REQUEST,
    payload: data,
})
export const CategoryEditError = (error) => ({
    type: CATEGORY_EDIT_ERROR,
    payload: error,
})
// end edit request action
