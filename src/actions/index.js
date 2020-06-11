import axios from 'axios';
import {
  GET_PRODUCTS_DONE,
  GET_PRODUCTS_FAILED,
  GET_PRODUCT_DONE,
  GET_PRODUCT_FAILED
} from '../constants/action-types';

const getProductsDone = data => {
  return {
    type: GET_PRODUCTS_DONE,
    payload: data
  };
}

const getProductsFailed = () => {
  return {
    type: GET_PRODUCTS_FAILED
  };
}

export const getProducts = () => dispatch => {

  axios.get(`http://5b35ede16005b00014c5dc86.mockapi.io/list`)
    .then(res => res.data.data)
    .then(data => {
      dispatch(getProductsDone(data));
    })
    .catch(error => {
      dispatch(getProductsFailed(error));
    })
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

  let url = 'http://5b35ede16005b00014c5dc86.mockapi.io/view/' + id;

  axios.get(url)
    .then(res => res.data.data)
    .then(data => {
      dispatch(getProductDone(data));
    })
    .catch(error => {
      dispatch(getProductFailed(error));
    })
}