//==--IMPORT ACTIONS--==
import {HANDLE_FIELD_CHANGE} from '../actions/utilities';

export const initialState = {
    email: '',
    password: '',
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        /** Controlled Fields */
        case HANDLE_FIELD_CHANGE:
            return {
                ...state,
                [action.name]: action.value,
            };
        default:
            return state;
    }
};

export default reducer;