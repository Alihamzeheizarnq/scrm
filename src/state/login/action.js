import * as Actions from './action-type'

export const LoginRequest = (data) => ({
    type: Actions.LOGIN_REQUEST,
    payload: data,
})
export const LodingSuccessRequest = (data) => ({
    type: Actions.LOGIN_SUCCESS_REQUEST,
    payload: data,
})
export const LoginErrorRequest = (error) => ({
    type: Actions.LOGIN_ERROR_REQUEST,
    payload: error,
})

export const ShowLodingLogin = (bool) => ({
    type: Actions.SHOW_LOADING_LOGIN,
    payload: bool,
})
export const ShowLodingLoginFullPage = (bool) => ({
    type: Actions.SHOW_LOADING_LOGIN_FULL_PAGE,
    payload: bool,
})
