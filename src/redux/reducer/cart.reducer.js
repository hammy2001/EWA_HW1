import { cartTypes } from "../types/cartTypes";

let initialState = {
  cart: [],
  order: {},
  placedorder: [],
  neworder: null,
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case cartTypes.ADD_ITEM_IN_CART:
      return {
        ...state,
        cart: [...state?.cart, action?.payload],
      };
    case cartTypes.ADD_ORDER_IN_CART:
      return {
        ...state,
        order: {
          ...action?.payload,
        },
      };
    case cartTypes.PLACED_ORDER_IN_CART:
      console.log(state, state?.placedorder);
      console.log(action?.payload);

      return {
        ...state,
        neworder: action?.payload,
        placedorder: [...state?.placedorder, action?.payload],
      };
    case cartTypes.EMPTY_STATE_CART:
      let arr = state?.placedorder;
      return {
        ...state,
        ...action?.payload,
        placedorder: arr,
      };
    case cartTypes.REMOVE_ITEM_IN_CART:
      return {
        ...state,
        cart: [...state?.cart?.filter((c) => c?.id !== action?.payload?.id)],
      };

    default:
      return state;
  }
}
