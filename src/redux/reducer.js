import {
  FILTER_BY_CATEGORY,
  FILTER_BY_SEASON,
  GET_PRODUCT,
  GET_PRODUCT_ID,
  ORDER_BY_PRICE_ASC,
  ORDER_BY_PRICE_DESC,
  REMOVE_FILTER_GENRE,
} from "./actions";

const initialState = {
  products: [],
  allProducts: [],
  productsFiltered: [],
  productDetail: [],
  // detail: [],
  // categories: [],
  // brands: [],
  // cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
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
      const allProducts = state.allProducts;
      const season = allProducts.filter((e) => e.season === action.payload);

      return {
        ...state,
        products: season,
      };

    case FILTER_BY_CATEGORY:
      const allProducts1 = state.allProducts;
      const category = allProducts1.filter((e) => e.genre === action.payload);
      const productsFiltered = state.productsFiltered;

      return {
        ...state,
        productsFiltered: productsFiltered.concat(category),
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
    default: {
      return state;
    }
  }
};

export default rootReducer;
