import { productTypes } from "../types/productTypes";
// import userData from '../../data/users.json'
import lightings from '../../data/lightings.json';
import products from '../../data/products.json';
import speakers from '../../data/speakers.json';
let initialState = { 
    lightings: [...lightings.data],
    speakers: [...speakers.data],
    products: [...products]
}

export function productsReducer(state = initialState, action) {
    
    /// obj
    const arr = state?.products?.find(item=>item?.header === action?.payload?.header);
    const exclude = state?.products?.filter(item=> item?.header !==action?.payload?.header);
    arr?.data?.push(action?.payload);
    console.log(arr, [...exclude, arr]);
    

    switch (action.type) {
        case productTypes.ADD_PRODUCT:
            return{
                ...state,
                products: [...exclude,arr]
            }
        // case productTypes.DELETE_PRODUCT:
        //     return{
        //         ...state,
        //         products: [...exclude,{...include[0], data: include[0]?.data?.filter(i=>i?.id !==action?.payload?.id)}]
        //     }
        // case productTypes.UPDATE_PRODUCT:
        //     let obj = include[0]?.data?.find(d=>d?.id === action?.payload.id);
        //     obj={...obj, ...action?.payload};
        //     let tmp = include[0]?.data?.filter(d=>d?.id !== action?.payload.id);
        //     tmp.push(obj);
        //     return{
        //         ...state,
        //         products: [...exclude, ...tmp]
        //     }
        // case productTypes.ADD_LIGHTING:{
        //     return{
        //         ...state,
        //         lightings: [...state?.lightings.data,action.payload]
        //     }
        // }  
        // case productTypes.UPDATE_LIGHTING:{
        //     let arr = state?.lightings.filter(item=> item?.id !== action?.payload?.id);
        //     return{
        //         ...state,
        //         lightings: [...arr,action.payload]
        //     }
        // }   case productTypes.DELETE_LIGHTING:{
        //     return{
        //         ...state,
        //         lightings: state?.lightings.filter(item=>item?.id !== action?.payload?.id)
        //     }
        // }    

        default:
            return state
    }
}