import users  from '../../data/users.json'
import { userTypes } from '../types/user.type'

let initialState = {
    users: users,
    isAuthenticated: null
}

export function userReducer(state = initialState, action) {
    

    switch (action?.type) {

        case userTypes.AUTHENTICATE_USER:
            console.log(action?.payload);
            
            return {
                ...state,
                isAuthenticated: state?.users?.find(user => user?.usertype === action?.payload?.usertype && user?.user === action?.payload?.user && user?.password === action?.payload?.password) || null
            }
        case userTypes.LOGOUT_USER:
            return {
                ...state,
                isAuthenticated: null
            }


        case userTypes.ADD_USER:
            let obj = {...action?.payload, userid: parseInt(Math.random()*10000)};
            delete obj['confirmpassword'];
            return {
                ...state,
                users: [...state?.users, obj],
            }
        default: return state;    
    }

}