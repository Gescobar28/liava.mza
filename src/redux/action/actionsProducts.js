import axios from "axios";
import { FILTER_BY_GENRE, FILTER_BY_SEASON, FILTER_BY_TYPE, GET_PRODUCT, GET_PRODUCT_ID, ORDER_BY_PRICE_ASC, ORDER_BY_PRICE_DESC, REMOVE_FILTER_GENRE, REMOVE_FILTER_TYPE } from "../type";

export function getProducts() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/product");
    return dispatch({
      type: GET_PRODUCT,
      payload: json.data,
    });
  };
}

export function getProductById(id) {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/product/${id}`);
    return dispatch({
      type: GET_PRODUCT_ID,
      payload: json.data,
    });
  };
}

export function orderByPriceAsc() {
  return {
    type: ORDER_BY_PRICE_ASC,
  };
}

export function orderByPriceDesc() {
  return {
    type: ORDER_BY_PRICE_DESC,
  };
}

export function filterByType(payload){
  return{
    type: FILTER_BY_TYPE,
    payload
  }
}

export function filterByGenre(genre) {
  return {
    type: FILTER_BY_GENRE,
    payload: genre
  };
}

export function removeFilterGenre(payload) {
  return {
    type: REMOVE_FILTER_GENRE,
    payload
  };
}

export function removeFilterType(payload) {
  return {
    type: REMOVE_FILTER_TYPE,
    payload
  };
}

export function filterBySeason(season) {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/temporada/${season}`);
    return dispatch({
      type: FILTER_BY_SEASON,
      payload: json.data,
    });
  };
}
