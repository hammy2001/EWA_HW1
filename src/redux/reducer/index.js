import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { productsReducer } from './products.reducer';

const rootReducer = combineReducers({
   
    productsReducer,
});

export default rootReducer;