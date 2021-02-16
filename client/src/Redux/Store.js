import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import Reducers from './Reducers';

const INITIALSTATE = {};
const middleware = [thunk];
const Store = createStore(Reducers, INITIALSTATE, composeWithDevTools(applyMiddleware(...middleware)));

export default Store;
