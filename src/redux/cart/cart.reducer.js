import * as actionType from "./cart.type";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      // return {
      //   ...state,
      //   cart: inCart
      //     ? state.cart.map((product) =>
      //         product._id === action.payload.product._id
      //           ? { ...product, qty: product.qty + 1 }
      //           : product
      //       )
      //     : [...state.cart, { ...product, qty: 1 }],
      // };
    return {
      ...state,
      cart: [...state.cart, { ...action.payload.product} ]
    };
    case actionType.REMOVE_FORM_CART:
      return {};
    case actionType.UPDATE_QTY:
      return {};
    default:
      return state;
  }
};

export default cartReducer;
