import {
    MOVIE_IS_LOADING,
MOVIE_FETCH_DATA_SUCCESS,
MOVIE_HAS_ERRORED
} from '../Actions/Actions';

const initialState ={
    data: {}
}

export function cardMiddlewareReducer (state = initialState, action){
    switch(action.type){
        case MOVIE_FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.items
            }
        default:
            return state;
        
    }
}