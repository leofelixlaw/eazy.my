import { combineReducers } from "redux";
import allProductsReducer from './allProductsReducer';
import singleProductReducer from './singleProductReducer';

const rootReducer=combineReducers({
  products: allProductsReducer,
  singleProduct: singleProductReducer,
})
export default rootReducer;
