import React, { Component } from 'react';
//import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/nav-bar';
import ProductList from './components/product-list';
import Details from './components/details';
import Cart from './components/cart';
// import Product from './components/product';
import Default from './components/default';

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
            </React.Fragment>
        );
    }
}

export default App;