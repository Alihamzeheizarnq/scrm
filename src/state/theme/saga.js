import { call, put, takeEvery } from 'redux-saga/effects'
import { openSidebarRightGet } from './action'

import { SET_OPEN_RIGHT_SIDEBAR_TOGGLE } from './action-type'

function* setSidebarToggle(action) {
    if (action.payload) {
        document.body.classList.add('menu-collapsed')
    } else {
        document.body.classList.remove('menu-collapsed')
    }

    yield put(openSidebarRightGet(action.payload))
}

function* themeSaga() {
    yield takeEvery(SET_OPEN_RIGHT_SIDEBAR_TOGGLE, setSidebarToggle)
}
export default themeSaga
