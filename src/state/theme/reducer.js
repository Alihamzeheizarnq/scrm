import {
    GET_OPEN_RIGHT_SIDEBAR_TOGGLE,
    SET_OPEN_RIGHT_SIDEBAR_TOGGLE,
} from './action-type'

const initState = {
    set_sidebar: false,
    get_sidebar: false,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_OPEN_RIGHT_SIDEBAR_TOGGLE:
            return {
                ...state,
                set_sidebar: action.payload,
            }

        case GET_OPEN_RIGHT_SIDEBAR_TOGGLE:
            return {
                ...state,
                get_sidebar: action.payload,
            }

        default:
            return state
    }
}

export default reducer
