import { CATEGORY_SELECT_REQUEST, CATEGORY_SELECT_SUCCESS_REQUEST, CATEGORY_SELECT_ERROR } from "./action-type";

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