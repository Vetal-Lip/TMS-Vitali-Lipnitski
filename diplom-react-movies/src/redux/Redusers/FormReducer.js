import { GET_SORT_BY_RATING, GET_SORT_BY_DATE, GET_SEARCH_BY, GET_INPUT_FIELD_VALUE, ON_SUBMIT_FORM, ON_CLICK_SEARCH_BUTTON } from '../Actions/Actions'

const initialState = {
    data: {},
    inputValue: '',
    searchValue: '',
    searchBy: 'title',
    sortBy: ' ',
    countMovies: 0,
    filtredDataByTitle: {},
    filtredDataByGenre: {}

}

export default function FormReducer(state = initialState, action) {
    switch (action.type) {
        case GET_INPUT_FIELD_VALUE:
            return {
                ...state,
                inputValue: action.inputValue
            }

        case ON_SUBMIT_FORM:
            return state;

        case ON_CLICK_SEARCH_BUTTON:
            return {
                ...state,
                inputValue: '',
                searchValue: state.inputValue,
            }

        case GET_SEARCH_BY:
            return {
                ...state,
                searchBy: action.payload,
            }

        case GET_SORT_BY_DATE:
            return {
                ...state,
                sortBy: action.payload,
            }

        case GET_SORT_BY_RATING:
            return {
                ...state,
                sortBy: action.payload,
            }

        default: return state;
    }

} 