import React, { Component } from 'react';
//import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar, FooterBar } from './components/nav-footer';
import ProductList from './components/product-list';
import Details from './components/details';
import Cart from './components/cart';
// import Product from './components/product';
import Default from './components/default';

// Need to read about Switch, Route
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Switch>
                  <Route exact path="/" component={ProductList} />
                  <Route path="/details" component={Details} />
                  <Route path="/cart" component={Cart} />
                  <Route component={Default} />
                </Switch>
                <FooterBar />
            </React.Fragment>
        );
    }
}

export default App;
