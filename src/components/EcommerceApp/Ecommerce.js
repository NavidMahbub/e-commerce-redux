import React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import NavBar from "../Navbar/NavBar";
import RouteHandler from "../RouteHandler/RouteHandler";

export default function Ecommerce() {
    return (
        <Provider store = {store}>
            <div className="sticky top-0">
                <NavBar />
            </div>

            <RouteHandler>
                <Home />
            </RouteHandler>


            <Footer />
        </Provider>
    );
}
