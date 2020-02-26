import {moviesMiddleware} from './middleware/moviesMiddleware';
import { applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';


export const rootMiddleware = composeWithDevTools( applyMiddleware(moviesMiddleware));