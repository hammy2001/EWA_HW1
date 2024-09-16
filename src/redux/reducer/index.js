import { combineReducers } from "redux";
import { productsReducer } from "./products.reducer";
import { cartReducer } from "./cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user.reducer";
const persistConfig = {
  key: "counter-1",
  storage,
};

const rootReducer = combineReducers({
  cartReducer,
  productsReducer,
  userReducer,
});

const persist = persistReducer(persistConfig, rootReducer);

export default persist;
