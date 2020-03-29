import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import TopBar from "./Components/TopBar/TopBar";
import Edit from "./Components/Edit/Edit";
import View from "./Components/View/View";
import Help from "./Components/Help/Help";

class Routes extends Component {
    render() {
        return (
            <Router>
                <TopBar />
                <div className="col-md-12 pd-0-0">
                    <div className="row">
                        <div className="col-sm-10 col-md-10 pd-0-0">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/edit" component={Edit} />
                                <Route path="/view" component={View} />
                                <Route path="/help" component={Help} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Routes;
