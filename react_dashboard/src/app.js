import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './app.css';
import './react-grid-layout.css';
import './react-resizable.css';
import './bootstrap.min.css';
import { NavBar } from './components/nav-footer';
import Home from './components/home';
import EditDashboard from './components/edit-dashboard';
import ViewDashboard from './components/view-dashboard';
import Default from './components/default';

// Need to read about Switch, Route
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/edit" component={EditDashboard} />
                  <Route path="/view" component={ViewDashboard} />
                  <Route component={Default} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;