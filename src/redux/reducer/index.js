import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { productsReducer } from './products.reducer';
import { cartReducer } from './cart.reducer';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'counter',
    storage,
};


const rootReducer = combineReducers({
    cartReducer,
    productsReducer,
});

const persist = persistReducer(persistConfig, rootReducer);

export default persist