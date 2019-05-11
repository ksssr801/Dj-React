import React, { Component } from 'react';
// import Product from './product';
import ProductTitle from './title';
import { ProductConsumer } from '../context';
import Product from './product';


export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <ProductTitle name="our" prodTitle="products" />
                        <div className="row">
                            <ProductConsumer>
                                {obj => {
                                    return obj.products.map( product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}