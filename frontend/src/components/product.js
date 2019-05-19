import React, { Component } from 'react';
import { ProductWrapper } from '../styled-css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../context';

// Need to read about Link
export default class Product extends Component {
    render() {
        var {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value) => ( 
                            <div 
                                className="img-container p-5" 
                                onClick = { () => {value.handleDetails(id);}}>
                                <Link to="/details">
                                    <img 
                                        src={img} 
                                        width="100px" 
                                        height="250px" 
                                        alt="product" 
                                        title={title} 
                                        className="card-img-top">
                                    </img>
                                </Link>
                                <button 
                                    className="cart-btn" 
                                    disabled={ inCart ? true : false } 
                                    onClick={ () => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                        }}>
                                        { inCart ? 
                                            (<p className="text-capitalize mb-0" disabled>{" "}in cart</p>) : 
                                            (<i className="fa fa-cart-plus" />)}
                                </button>
                            </div>
                        )}
                    </ProductConsumer>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h6 className="text-blue font-italic mb-0">
                            <span className="mr-1">Rs.</span>{price}
                        </h6>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

// Need to read about PropTypes
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired
}