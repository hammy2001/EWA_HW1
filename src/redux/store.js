import { createStore, applyMiddleware } from 'redux';
import persist from './reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension'
import {thunk} from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import {
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';

const loggerMiddleware = createLogger();


export const store = createStore(
    persist,
    composeWithDevTools(applyMiddleware(
        thunk,
        loggerMiddleware
    ))
  
);

