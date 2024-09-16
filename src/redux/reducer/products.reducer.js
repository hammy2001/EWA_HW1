import { productTypes } from "../types/productTypes";
import products from "../../data/products.json";
let initialState = {
  products: [...products],
};

export function productsReducer(state = initialState, action) {
  const arr = state?.products?.find(
    (item) => item?.header === action?.payload?.header
  );
  const exclude = state?.products?.filter(
    (item) => item?.header !== action?.payload?.header
  );
  arr?.data?.push(action?.payload);
  console.log(arr, [...exclude, arr]);

  switch (action.type) {
    case productTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...exclude, arr],
      };

    default:
      return state;
  }
}
