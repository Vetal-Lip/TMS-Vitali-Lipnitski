// create Action for Input and Form
export const GET_INPUT_FIELD_VALUE = 'GET_INPUT_FIELD_VALUE';
export const ON_SUBMIT_FORM = 'ON_SUBMIT_FORM';
export const ON_CLICK_SEARCH_BUTTON = 'ON_CLICK_SEARCH_BUTTON';
export const GET_SEARCH_BY= "GET_SEARCH_BY";
export const GET_SORT_BY_DATE = "GET_SORT_BY_DATE";
export const GET_SORT_BY_RATING = "GET_SORT_BY_RATING";

export const getInputFieldValue = (inputValue) =>({type: GET_INPUT_FIELD_VALUE, inputValue: inputValue });
export const onSubmitForm = () => ({type: ON_SUBMIT_FORM});
export const onClickSearchButton = () => ({type: ON_CLICK_SEARCH_BUTTON});
export const getSearchBy = (payload) => ({type: GET_SEARCH_BY, payload});
export const getSortByDate = (payload) => ({type: GET_SORT_BY_DATE, payload})
export const getSortByRaiting = (payload) => ({type: GET_SORT_BY_RATING, payload})


// create Action for Fetch (middleWare/movie)
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';
export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';

export const itemsIsLoading = () => ({type: ITEMS_IS_LOADING});
export const itemsFetchDataSuccess = (items) => ({type: ITEMS_FETCH_DATA_SUCCESS, items });
export const itemsHasErrored = () => ({type: ITEMS_HAS_ERRORED });


// create Action for ModalWindow
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal =() => ({type: OPEN_MODAL });
export const closeModal =() => ({type: CLOSE_MODAL });

// create Action for Fetch (middleWare/movie/{id})
export const MOVIE_IS_LOADING = 'MOVIE_IS_LOADING';
export const MOVIE_FETCH_DATA_SUCCESS = 'MOVIE_FETCH_DATA_SUCCESS';
export const MOVIE_HAS_ERRORED = 'MOVIE_HAS_ERRORED';

export const movieIsLoading = () => ({type: MOVIE_IS_LOADING});
export const movieFetchDataSuccess = (items) => ({type: MOVIE_FETCH_DATA_SUCCESS, items });
export const movieHasErrored = () => ({type: MOVIE_HAS_ERRORED });

