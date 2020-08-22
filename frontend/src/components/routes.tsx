import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./home";
import Map from "./map";

const Routes: React.FC = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/map" component={Map} />
                </Switch>
            </Router>
        </div>
    );
};

export default Routes;