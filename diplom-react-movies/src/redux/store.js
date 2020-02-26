import { createStore, combineReducers } from "redux";
import FormReducer from './Redusers/FormReducer';
import { moviesMiddlewareReducer } from './Redusers/moviesMiddlewareReducer'
import { rootMiddleware } from './rootMiddleware';
import ModalReducer from './Redusers/ModalReducer';






// Union all reducers (объединение всех reducers)
let reducers = combineReducers({
    FormReducer,
    moviesMiddlewareReducer,
    ModalReducer
});

let store = createStore(reducers, rootMiddleware);
export default store;