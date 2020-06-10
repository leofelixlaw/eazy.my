import axios from 'axios';
import {  GET_PRODUCTS_REQUESTED,
          GET_PRODUCTS_INIT_DONE,
          GET_PRODUCTS_MORE_DONE,
          GET_PRODUCTS_FAILED,
          GET_PRODUCT_REQUESTED,
          GET_PRODUCT_DONE,
          GET_PRODUCT_FAILED } from '../constants/action-types';




const getProductsRequested = () => {
  return {
    type: GET_PRODUCTS_REQUESTED
  };
}

const getProductsInitialDone = data => {
  return {
    type: GET_PRODUCTS_INIT_DONE,
    payload: data
  };
}

const getProductsMoreDone = data => {
  return {
    type: GET_PRODUCTS_MORE_DONE,
    payload: data
  };
}

const getProductsFailed = () => {
  return {
    type: GET_PRODUCTS_FAILED
  };
}

export const getProducts = (page) => dispatch => {

  dispatch(getProductsRequested());

  axios.get(`http://5b35ede16005b00014c5dc86.mockapi.io/list?page=${page}&per_page=20`)
    .then(res => res.data.data)
    .then(data => {
      page === 1
        ? dispatch(getProductsInitialDone(data))
        : dispatch(getProductsMoreDone(data));
    })
    .catch(error => {
      dispatch(getProductsFailed(error));
    })
}




const getProductRequested = () => {
  return {
    type: GET_PRODUCT_REQUESTED
  };
}

const getProductDone = product => {
  return {
    type: GET_PRODUCT_DONE,
    payload: product
  };
}

const getProductFailed = () => {
  return {
    type: GET_PRODUCT_FAILED
  };
}

export const getSingleProduct = id => dispatch => {

  dispatch(getProductRequested());

  let url = 'https://api.punkapi.com/v2/beers/'+id;

  axios.get(url)
    .then(res => res.data)
    .then(data => {
      dispatch(getProductDone(data[0]));
    })
    .catch(error => {
      dispatch(getProductFailed(error));
    })
}
