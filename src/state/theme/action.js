import {
    GET_OPEN_RIGHT_SIDEBAR_TOGGLE,
    SET_OPEN_RIGHT_SIDEBAR_TOGGLE,
} from './action-type'

export const openSidebarRightGet = (bool) => ({
    type: GET_OPEN_RIGHT_SIDEBAR_TOGGLE,
    payload: bool,
})
export const openSidebarRightSet = (bool) => ({
    type: SET_OPEN_RIGHT_SIDEBAR_TOGGLE,
    payload: bool,
})
