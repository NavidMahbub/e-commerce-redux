import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunkMiddleware from 'redux-thunk'
import { persistStore } from "redux-persist";

const enhancer = applyMiddleware(thunkMiddleware)

export const store = createStore(rootReducer, enhancer)
export const persistor = persistStore(store)

