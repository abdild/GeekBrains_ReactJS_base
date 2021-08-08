import { PROFILE_TOGGLE_SHOW, PROFILE_DROP_NAME, PROFILE_SET_NAME, PROFILE_CHECK } from "./actionTypes";

const initialState = {
    show: false,
    name: 'No name',
    checked: true
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_TOGGLE_SHOW: {
            return {
                ...state,
                show: !state.show,
            };
        }
        case PROFILE_DROP_NAME: {
            return {
                ...state,
                name: "",
            };
        }
        case PROFILE_SET_NAME: {
            return {
                ...state,
                // name: action.name,
                name: action.payload,
            };
        }
        case PROFILE_CHECK: {
            return {
                ...state,
                checked: !state.checked
            }
        }
        default:
            return state;
    }
};