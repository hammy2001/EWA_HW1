import { cartTypes } from "../types/cartTypes"

export const addItem = (payload)=>{
    return dispatch=>{
        dispatch({type:cartTypes.ADD_ITEM_IN_CART,payload},)
    }
};
export const removeItem = (item)=>{
    return dispatch=>{
        dispatch({type:cartTypes.REMOVE_ITEM_IN_CART,payload:item})
    }
};

export const cartActions = {
    addItem,
    removeItem
};