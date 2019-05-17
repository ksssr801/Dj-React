import React from 'react';

export default function CartColumns() {
    return(
        <div className="container-fluid text-centerd d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-1 mt-1">
                    <p className="text-uppercase text-center">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-1 mt-1">
                    <p className="text-uppercase text-center">name of product</p>
                </div>
                <div className="col-10 mx-auto col-lg-1 mt-1">
                    <p className="text-uppercase text-center">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-1 mt-1">
                    <p className="text-uppercase text-center">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-1 mt-1">
                    <p className="text-uppercase text-center">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-1 mt-1">
                    <p className="text-uppercase text-center">total</p>
                </div>
            </div>
        </div>
    )
}