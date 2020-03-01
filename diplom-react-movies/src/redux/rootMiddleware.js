import {moviesMiddleware} from './middleware/moviesMiddleware';
import {cardMiddleware} from './middleware/cardMiddleware';
import { applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';


export const rootMiddleware = composeWithDevTools( applyMiddleware(moviesMiddleware));