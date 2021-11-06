import { LOGIN_ERROR_REQUEST, LOGIN_REQUEST, LOGIN_SUCCESS_REQUEST, SHOW_LOADING_LOGIN } from "./action-type";

export const LoginRequest = (data) => ({
    type: LOGIN_REQUEST,
    payload: data
});
export const LodingSuccessRequest = (data) => ({
    type: LOGIN_SUCCESS_REQUEST,
    payload: data
});
export const LoginErrorRequest = (error) => ({
    type: LOGIN_ERROR_REQUEST,
    payload: error
});







export const ShowLodingLogin = (bool) => ({
    type: SHOW_LOADING_LOGIN,
    payload: bool
});