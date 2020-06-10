import {
  GET_PRODUCTS_REQUESTED,
  GET_PRODUCTS_MORE_DONE,
  GET_PRODUCTS_INIT_DONE,
  GET_PRODUCTS_FAILED
    } from '../constants/action-types';


const initialState = {
  isLoading: false,
  isError: false,
  products: [],
}

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUESTED:
      return { ...state, isLoading: true };
    case GET_PRODUCTS_INIT_DONE:
      return { ...state, isLoading: false, products: action.payload, isError: false };
    case GET_PRODUCTS_MORE_DONE:
      return { ...state, isLoading: false, products: [...state.products, ...action.payload], isError: false };
    case GET_PRODUCTS_FAILED:
      return { ...state, isLoading: false, isError: true}
    default:
      return state;
  }
};
