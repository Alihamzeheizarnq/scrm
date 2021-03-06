import {
    LOGIN_ERROR_REQUEST,
    LOGIN_REQUEST,
    LOGIN_SUCCESS_REQUEST,
    SHOW_LOADING_LOGIN,
    SHOW_LOADING_LOGIN_FULL_PAGE,
} from './action-type'

const initState = {
    data: null,
    user: null,
    errro: null,
    showLoding: false,
    showLodingfullPage: false,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                data: action.payload,
                user: null,
                errro: null,
                showLoding: true,
            }

        case LOGIN_SUCCESS_REQUEST:
            return {
                ...state,
                data: null,
                user: action.payload,
                errro: null,
                showLoding: false,
            }
        case LOGIN_ERROR_REQUEST:
            return {
                ...state,
                data: null,
                user: null,
                errro: action.payload,
                showLoding: false,
            }

        case SHOW_LOADING_LOGIN:
            return {
                ...state,
                showLoding: action.payload,
            }
        case SHOW_LOADING_LOGIN_FULL_PAGE:
            return {
                ...state,
                showLodingfullPage: action.payload,
            }
        default:
            return state
    }
}

export default reducer
