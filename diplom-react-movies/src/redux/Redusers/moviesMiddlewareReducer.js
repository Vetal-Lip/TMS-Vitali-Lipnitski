import {
    ITEMS_IS_LOADING,
    ITEMS_FETCH_DATA_SUCCESS,
    ITEMS_HAS_ERRORED
} from '../Actions/Actions';

const initialState = {
    data: { },
    loading: false,
}

export function moviesMiddlewareReducer(state = initialState, action) {
    switch (action.type) {
        case ITEMS_IS_LOADING:
            return {
                ...state,
                loading: true
            };

        case ITEMS_FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: {...state.data, ...action.items},
               loading: false
            };

        case ITEMS_HAS_ERRORED:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
}