import { CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_SUCCESS_REQUEST, CATEGORY_CREATE_ERROR, CATEGORY_SELECT_REQUEST, CATEGORY_SELECT_SUCCESS_REQUEST, CATEGORY_SELECT_ERROR, SHOW_CATEGORY_MODAL } from "./action-type";

export const CategoryCreateRequest = (data) => ({
    type: CATEGORY_CREATE_REQUEST,
    payload: data
});
export const CategoryCreateSuccess = (data) => ({
    type: CATEGORY_CREATE_SUCCESS_REQUEST,
    payload: data
});
export const CategoryCreateError = (error) => ({
    type: CATEGORY_CREATE_ERROR,
    payload: error
});


export const CategorySelectRequest = () => ({
    type: CATEGORY_SELECT_REQUEST,
});
export const CategorySelectSuccess = (data) => ({
    type: CATEGORY_SELECT_SUCCESS_REQUEST,
    payload: data
});
export const CategorySelectError = (error) => ({
    type: CATEGORY_SELECT_ERROR,
    payload: error
});





export const ShowCategoryModal = (bool) => ({
    type: SHOW_CATEGORY_MODAL,
    payload: bool
});