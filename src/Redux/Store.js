// store.js
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './RootReducer';

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
