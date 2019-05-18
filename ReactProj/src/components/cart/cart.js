import React, { Component } from 'react';
import ProductTitle from '../title';
import CartColumns from './cart-columns';
import EmptyCart from './empty-cart';
import { ProductConsumer } from '../../context';
import CartList from './cart-list';
import CartTotal from './cart-total';


export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0) {
                            return(
                                <React.Fragment>
                                    <ProductTitle name="your" prodTitle="cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotal value={value} history={this.props.history} />
                                </React.Fragment>
                            );
                        }
                        else {
                            return(<EmptyCart />)
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}