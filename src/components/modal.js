import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import { ModalContainer, BtnContainer } from '../styled-css';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    if (!modalOpen){
                        return null;
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">                                    
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                            <h5>Item added to the cart</h5>
                                            <img src={img} className="img-fluid" alt="product" />
                                            <h5>{title}</h5>
                                            <h5 className="text-fluid">price : {price}</h5>
                                            <Link to="/">
                                                <BtnContainer className="text-capitalize mb-2" onClick={() => {closeModal()}} cart>continue shopping</BtnContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <BtnContainer className="text-capitalize mb-2" onClick={() => {closeModal()}} backToProd>go to cart</BtnContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}