import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import productReducer from './reducers/productReducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

//Combine our reducers and change property names
const allReducers = combineReducers({products: productReducer});

//Create initial State.
const initialState = {
    products: []
}
//Create out store and set our reducers, state, and middleware.
const store = createStore(allReducers, initialState, compose( applyMiddleware(...middleware)));

export default store;