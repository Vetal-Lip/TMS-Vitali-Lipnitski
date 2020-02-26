import { ITEMS_IS_LOADING,  itemsFetchDataSuccess } from '../Actions/Actions';


// export function moviesMiddleware(url) {
//     return (dispatch) => {
//         dispatch(itemsIsLoading(true));

//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 dispatch(itemsIsLoading(false));
//                 return response;
//             })
//             .then((response) => response.json())
//             .then((items) => dispatch(itemsFetchDataSuccess(items)))
//             .catch(() => dispatch(itemsHasErrored(true)))
//     }
// }

export const moviesMiddleware = store => next => action => {
    if (action.type === ITEMS_IS_LOADING) {

        fetch(`https://reactjs-cdp.herokuapp.com/movies`)
            .then((response) => response.json())
            .then((data) => {
                const action = itemsFetchDataSuccess(data);
                
                store.dispatch(action)
            })
    }

    next(action);

}