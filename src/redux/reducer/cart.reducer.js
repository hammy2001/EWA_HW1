import { cartTypes } from "../types/cartTypes";

let initialState = { 
    cart:[]
}

export function cartReducer(state = initialState, action) {
    // let type = action?.payload?.type;
    // let include = state?.products ?.filter(item=>item?.header === type);
    // let exclude = state?.products?.filter(item=>item?.header !== type);
    console.log(action);
    
    switch (action.type) {
        case cartTypes.ADD_ITEM_IN_CART:
            return{
                ...state,
                cart: [...state?.cart, action?.payload]
            }
        case cartTypes.REMOVE_ITEM_IN_CART:
            return{
                ...state,
                cart: [...state?.cart?.filter(c=>c?.id !== action?.payload?.id)]
            }
      

        default: return state;
    }
}
