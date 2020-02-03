import { createStore, combineReducers } from "redux";





// Union all reducers (объединение всех reducers)
let reducers = combineReducers();

let store = createStore(reducers);


export default store;