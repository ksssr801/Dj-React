import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { BtnContainer } from '../styled-css';
import {Link} from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id,company,img,info,price,title,inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" title={title}/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercaser text-muted mt-3 mb-2">made by : {company}</h4>
                                    <h4 className="text-red"><strong>price : <span>Rs. </span>{price}</strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product : </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* button */}
                                    <Link to="/" className="ml-auto" title="Home">
                                        <BtnContainer backToProd className="text-capitalize mb-0">Back to products</BtnContainer>
                                    </Link>
                                    {/* <Link to="/cart" className="ml-auto" title='Home'> */}
                                    <BtnContainer cart
                                    className="mr-auto text-capitalize" 
                                    disabled={ inCart ? true : false } 
                                    onClick={ () => {
                                        value.addToCart(id);
                                    } }>
                                        { inCart ? "in cart" : "add to cart"}
                                    </BtnContainer>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
