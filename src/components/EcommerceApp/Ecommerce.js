import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../store/store";
import Home from "../Home/Home";
import RouteHandler from "../RouteHandler/RouteHandler";

export default function Ecommerce() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <RouteHandler>



                    <Home/>
                </RouteHandler>
            </PersistGate>
        </Provider>
    );
}
