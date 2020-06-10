import { GET_PRODUCT_REQUESTED, GET_PRODUCT_DONE, GET_PRODUCT_FAILED } from '../constants/action-types';


const initialState = {
  isLoading: false,
  isError: false,
  product: {},
}

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUESTED:
      return { ...state, isLoading: true };
    case GET_PRODUCT_DONE:
      return { ...state, isLoading: false, product: action.payload, isError: false };
    case GET_PRODUCT_FAILED:
      return { ...state, isLoading: false, isError: true}
    default:
      return state;
  }
};
