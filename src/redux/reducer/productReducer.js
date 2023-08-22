import {
  FILTER_BY_GENRE,
  FILTER_BY_SEASON,
  FILTER_BY_TYPE,
  GET_PRODUCT,
  GET_PRODUCT_ID,
  ORDER_BY_PRICE_ASC,
  ORDER_BY_PRICE_DESC,
  REMOVE_FILTER_GENRE,
  REMOVE_FILTER_TYPE,
} from "../type";

const initialState = {
  products: [],
  allProducts: [],
  productsFiltered: [],
  productDetail: [],
  // categories: [],
  // brands: [],
  // cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        productsFiltered: [],
      };
    case GET_PRODUCT_ID:
      return {
        ...state,
        productDetail: action.payload,
      };
    case ORDER_BY_PRICE_ASC:
      const products2 = state.products;
      const productsFiltered4 = state.productsFiltered;
      const orderByPriceAsc = productsFiltered4[0]
        ? productsFiltered4.sort((a, b) => {
            if (parseInt(a.price) > parseInt(b.price)) return -1;
            if (parseInt(a.price) < parseInt(b.price)) return 1;
            return 0;
          })
        : products2.sort((a, b) => {
            if (parseInt(a.price) > parseInt(b.price)) return -1;
            if (parseInt(a.price) < parseInt(b.price)) return 1;
            return 0;
          });
      return {
        ...state,
        products: orderByPriceAsc,
      };
    case ORDER_BY_PRICE_DESC:
      const products = state.products;
      const productsFiltered3 = state.productsFiltered;

      const orderByPriceDesc = productsFiltered3[0]
        ? productsFiltered3.sort((a, b) => {
            if (parseInt(a.price) < parseInt(b.price)) return -1;
            if (parseInt(a.price) > parseInt(b.price)) return 1;
            return 0;
          })
        : products.sort((a, b) => {
            if (parseInt(a.price) < parseInt(b.price)) return -1;
            if (parseInt(a.price) > parseInt(b.price)) return 1;
            return 0;
          });
      return {
        ...state,
        products: orderByPriceDesc,
      };
    case FILTER_BY_SEASON:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        productsFiltered: [],
      };

    case FILTER_BY_GENRE:
      const allProducts1 = state.products;
      const category = allProducts1.filter((e) => e.genre === action.payload);
      const productsFiltered = state.productsFiltered;
      return {
        ...state,
        productsFiltered: productsFiltered.concat(category), //condicional
      };

    case FILTER_BY_TYPE:
      const allProducts2 = state.products;
      const type = allProducts2.filter((e) => e.category === action.payload);
      const productsFiltered6 = state.productsFiltered;
      return {
        ...state,
        productsFiltered: productsFiltered6.concat(type), //condicional
      };
    case REMOVE_FILTER_GENRE:
      const productsFiltered2 = state.productsFiltered;

      const newFiltered = productsFiltered2.filter(
        (e) => e.genre !== action.payload
      );

      return {
        ...state,
        productsFiltered: newFiltered,
      };
    case REMOVE_FILTER_TYPE:
      const productsFiltered5 = state.productsFiltered;

      const newFiltered1 = productsFiltered5.filter(
        (e) => e.category !== action.payload
      );

      return {
        ...state,
        productsFiltered: newFiltered1,
      };
    default: {
      return state;
    }
  }
};

export default productReducer;
