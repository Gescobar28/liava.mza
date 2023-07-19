import axios from "axios";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const ORDER_BY_PRICE_ASC = "ORDER_BY_PRICE_ASC";
export const ORDER_BY_PRICE_DESC = "ORDER_BY_PRICE_DESC";
export const FILTER_BY_SEASON = "FILTER_BY_SEASON";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const REMOVE_FILTER_GENRE = "REMOVE_FILTER_GENRE";



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

export function filterBySeason(season) {
  return {
    type: FILTER_BY_SEASON,
    payload: season
  };
}

export function filterByCategory(category) {
  return {
    type: FILTER_BY_CATEGORY,
    payload: category
  };
}

export function removeFilterGenre(payload) {
  return {
    type: REMOVE_FILTER_GENRE,
    payload
  };
}




// export function filterBySeason(season) {
//   return async function (dispatch) {
//     const json = await axios.get(`http://localhost:3001/temporada/${season}`);
//     return dispatch({
//       type: FILTER_BY_SEASON,
//       payload: json.data,
//     });
//   };
// }
