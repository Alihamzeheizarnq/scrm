import {
    CATEGORY_CREATE_ERROR,
    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS_REQUEST,
    CATEGORY_LIST_DELETE,
    CATEGORY_LIST_DELETE_ADD,
    CATEGORY_LIST_DELETE_CLEAR,
    CATEGORY_SELECT_ERROR,
    CATEGORY_SELECT_REQUEST,
    CATEGORY_SELECT_SUCCESS_REQUEST,
    SHOW_CATEGORY_MODAL,
} from './action-type'

const initState = {
    data: null,
    category: [],
    errro: null,
    showModel: false,
    delete: [],
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case CATEGORY_CREATE_REQUEST:
            return {
                ...state,
                data: action.payload,
                category: state.category,
                error: null,
            }

        case CATEGORY_CREATE_SUCCESS_REQUEST:
            return {
                ...state,
                category: [...state.category, action.payload],
                data: null,
                error: null,
            }
        case CATEGORY_CREATE_ERROR:
            return {
                ...state,
                data: null,
                category: state.category,
                error: action.payload,
            }

        case CATEGORY_SELECT_SUCCESS_REQUEST:
            return {
                ...state,
                data: null,
                category: action.payload,
                error: [],
            }

        case CATEGORY_SELECT_ERROR:
            return {
                ...state,
                data: null,
                category: [],
                error: action.payload,
            }

        case SHOW_CATEGORY_MODAL:
            return {
                ...state,
                showModel: action.payload,
            }
        case CATEGORY_LIST_DELETE:
            console.log(action)
            return {
                ...state,
                delete: [...state.delete, action.payload],
            }
        case CATEGORY_LIST_DELETE_CLEAR:
            return {
                ...state,
                delete: state.delete.filter((item) => item != action.payload),
            }
        default:
            return state
    }
}

export default reducer
