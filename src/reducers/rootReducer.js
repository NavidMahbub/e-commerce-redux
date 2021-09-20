import { combineReducers } from "redux"
import { cartReducer } from "./CartReducer"
import { fetchReduccer } from "./FetchReducer"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['products', 'cart']
}

const rootReducer = combineReducers({products: fetchReduccer, cart: cartReducer})

export default persistReducer(persistConfig, rootReducer);