import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './cartRedux';
import initialState from './initialState';
import orderReducer from './orderRedux';
import productsReducer from './productsRedux';
import userReducer from './userRedux';

const subreducers = {
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
  orders: orderReducer,
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ),
);

export default store;
