import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {BtnContainer, NavWrapper} from '../styled-css';

class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm store-nav navbar-dark px-sm-5">
                <Link to='/'>
                    <i className="fa fa-home home-style-icon fa-10x" title="Store" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link" title="Store">
                            <h3 className="home-style">My Store</h3>
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto" title="Cart">
                    <BtnContainer><i className="fa fa-cart-plus" />&nbsp;my cart</BtnContainer>
                </Link>
            </NavWrapper>
        )
    }
}

class FooterBar extends Component {
    render() {
        return (
            <footer className="footer sticky-bottom text-capitalize text-gray text-center py-2 store-footer">
                <div>react version : {React.version}</div>
                <div><i className="far fa-copyright"> Kr Sahastranshu</i></div>
            </footer>
        )
    }
}

export { NavBar, FooterBar };