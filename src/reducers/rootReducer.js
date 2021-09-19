import { combineReducers } from "redux"
import { cartReducer } from "./CartReducer"
import { fetchReduccer } from "./FetchReducer"

const rootReducer = combineReducers({products: fetchReduccer, cart: cartReducer})

export default rootReducer;