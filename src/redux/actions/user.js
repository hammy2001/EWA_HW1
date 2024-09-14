import { userTypes } from "../types/user.type";

export const login = (payload)=>{
    return dispatch=>{
        dispatch({type:userTypes.AUTHENTICATE_USER,payload},)
    }
};

export const logout = ()=>{
    return dispatch=>{
        dispatch({type:userTypes.LOGOUT_USER,payload:{}},)
    }
};
export const adduser = (payload)=>{
    return dispatch=>{
        dispatch({type:userTypes.ADD_USER,payload},)
    }
};


export const userActions = {
    login,
    logout,
    adduser
    
};