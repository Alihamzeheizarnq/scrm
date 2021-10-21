import { USER_FETCH_SUCCEEDED, USER_FETCH_REQUESTED, USER_FETCH_FAILED } from "./action-type";

const initState = {
    user_id: null,
    user: null,
    errro: null,
};



const reducer = (state = initState, action) => {

    switch (action.type) {
        case USER_FETCH_REQUESTED:
            return {
                ...state,
                user_id: action.payload,
                user: null,
                error: null
            }

        case USER_FETCH_SUCCEEDED:
            console.log(action)

            return {
                ...state,
                user: action.payload,
                user_id: null,
                error: null
            }
        case USER_FETCH_FAILED:

            return {
                ...state,
                user_id: null,
                user: null,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;