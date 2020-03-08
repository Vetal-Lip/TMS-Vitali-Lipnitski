import {MOVIE_IS_LOADING, movieFetchDataSuccess, movieIsLoading, movieHasErrored} from '../Actions/Actions';

export function cardMiddleware(url) {
    return (dispatch) => {
        dispatch(movieIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                dispatch(movieIsLoading(false));
                return response;
            })
            .then(response=> response.json())
            .then(data=> dispatch(movieFetchDataSuccess(data)))
            .catch(()=> dispatch(movieHasErrored(true)))
    }
}