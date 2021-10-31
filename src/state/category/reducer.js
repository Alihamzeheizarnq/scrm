import { CATEGORY_CREATE_ERROR, CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_SUCCESS_REQUEST } from "./action-type";
import { CATEGORY_SELECT_ERROR, CATEGORY_SELECT_REQUEST, CATEGORY_SELECT_SUCCESS_REQUEST } from "./select/action-type";

const initState = {
    data: null,
    category: [],
    errro: null,
    created: null
};



const reducer = (state = initState, action) => {

    switch (action.type) {
        case CATEGORY_CREATE_REQUEST:
            return {

                data: action.payload,
                category: state.category,
                error: null,
                created: null
            }

        case CATEGORY_CREATE_SUCCESS_REQUEST:

            return {
                category: [...state.category, action.payload],
                data: null,
                error: null,
                created: true
            }
        case CATEGORY_CREATE_ERROR:

            return {
                data: null,
                category: state.category,
                error: action.payload,
                created: null
            }


        case CATEGORY_SELECT_SUCCESS_REQUEST:

            return {
                data: null,
                category: action.payload,
                error: [],
                created: null
            }

        case CATEGORY_SELECT_ERROR:

            return {
                data: null,
                category: [],
                error: action.payload,
                created: null
            }



        case 'disbleCreated':

            return {
                ...state,
                created: false
            }
        default:
            return state;
    }
}

export default reducer;