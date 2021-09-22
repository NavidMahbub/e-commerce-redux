import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunkMiddleware from 'redux-thunk'
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store = createStore(rootReducer, enhancer)
export const persistor = persistStore(store)