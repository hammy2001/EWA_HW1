import { productTypes } from "../types/productTypes";

export const addProduct = (item) => {
  return (dispatch) => {
    dispatch(productTypes.ADD_PRODUCT, { payload: item });
  };
};

export const productsActions = {
  addProduct,
};
