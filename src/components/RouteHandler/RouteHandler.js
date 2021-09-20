import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../Navbar/NavBar";
import NotFound from "../NotFound/NotFound";
import CheckOut from '../CheckOut/CheckOut'


export default function RouteHandler() {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/check_out"><NavBar/><CheckOut/></Route>
                <Route path="*"><NotFound/></Route>
            </Switch>
        </Router>
    );
}
