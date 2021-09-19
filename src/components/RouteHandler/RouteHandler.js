import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";


export default function RouteHandler() {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/check_out"></Route>
                <Route path="*"><NotFound/></Route>
            </Switch>
        </Router>
    );
}
