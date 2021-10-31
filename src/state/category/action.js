import { CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_SUCCESS_REQUEST, CATEGORY_CREATE_ERROR } from "./action-type";

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