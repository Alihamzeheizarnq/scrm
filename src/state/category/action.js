import * as Actions from './action-type'

export const CategoryCreateRequest = (data) => ({
    type: Actions.CATEGORY_CREATE_REQUEST,
    payload: data,
})
export const CategoryCreateSuccess = (data) => ({
    type: Actions.CATEGORY_CREATE_SUCCESS_REQUEST,
    payload: data,
})
export const CategoryCreateError = (error) => ({
    type: Actions.CATEGORY_CREATE_ERROR,
    payload: error,
})

export const CategorySelectRequest = () => ({
    type: Actions.CATEGORY_SELECT_REQUEST,
})
export const CategorySelectSuccess = (data) => ({
    type: Actions.CATEGORY_SELECT_SUCCESS_REQUEST,
    payload: data,
})
export const CategorySelectError = (error) => ({
    type: Actions.CATEGORY_SELECT_ERROR,
    payload: error,
})

export const ShowCategoryModal = (bool) => ({
    type: Actions.SHOW_CATEGORY_MODAL,
    payload: bool,
})
export const CategoryListDelete = (id) => ({
    type: Actions.CATEGORY_LIST_DELETE,
    payload: id,
})
export const CategoryListDeleteAdd = (id, bool) => ({
    type: Actions.CATEGORY_LIST_DELETE_ADD,
    payload: id,
    status: bool,
})
export const CategoryListDeleteClear = (id) => ({
    type: Actions.CATEGORY_LIST_DELETE_CLEAR,
    payload: id,
})

export const ShowModalDeleteOpen = (bool) => ({
    type: Actions.SHOW_CATEGORY_DELETE_MODAL_OPEN,
    payload: bool,
})

export const CategoryDeleteRequest = (data) => ({
    type: Actions.CATEGORY_DELETE_REQUEST,
    payload: data,
})
export const CategoryDeleteSuccess = (data) => ({
    type: Actions.CATEGORY_DELETE_SUCCESS_REQUEST,
    payload: data,
})
export const CategoryDeleteError = (error) => ({
    type: Actions.CATEGORY_DELETE_ERROR,
    payload: error,
})

export const ShowModalEditOpen = (bool) => ({
    type: Actions.SHOW_CATEGORY_EDIT_MODAL_OPEN,
    payload: bool,
})
export const CategoryEditData = (data) => ({
    type: Actions.CATEGORY_EDIT_DATA,
    payload: data,
})

/// edit request action
export const CategoryEditRequest = (data) => ({
    type: Actions.CATEGORY_EDIT_REQUEST,
    payload: data,
})
export const CategoryEditSuccess = (data) => ({
    type: Actions.CATEGORY_EDIT_SUCCESS_REQUEST,
    payload: data,
})
export const CategoryEditError = (error) => ({
    type: Actions.CATEGORY_EDIT_ERROR,
    payload: error,
})
// end edit request action
