import {
  GET_PRODUCTS_DONE,
  GET_PRODUCTS_FAILED
    } from '../constants/action-types';


const initialState = {
  isLoading: false,
  isError: false,
  products: [],
}

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_DONE:
      return { ...state, isLoading: false, products: [...state.products, ...action.payload], isError: false };
    case GET_PRODUCTS_FAILED:
      return { ...state, isLoading: false, isError: true}
    default:
      return state;
  }
};
