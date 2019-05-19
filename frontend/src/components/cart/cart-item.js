import React from 'react';

export default function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item;
    const {incrementId, decrementId, removeItem} = value;
    return(
        <div>
            <div className="row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-1">
                    <img src={img} style={{width:'5rem',height:'5rem'}} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-lg-1 mt-2">
                    <span className="d-lg-none">product : </span>{title}
                </div>
                <div className="col-10 mx-auto col-lg-1 mt-2">
                    <span className="d-lg-none">price : </span>Rs. {price}
                </div>
                <div className="col-10 mx-auto col-lg-1 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="btn btn-black mx-1" onClick={()=>decrementId(id)}>- </span>
                        </div>
                        <span className="btn btn-black mx-1">{count}</span>
                        <div>
                            <span className="btn btn-black mx-1" onClick={()=>incrementId(id)}> +</span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-1 cart-icon">
                    <i className="fa fa-times" onClick={()=>removeItem(id)} />
                </div>
                <div className="col-10 mx-auto col-lg-1 mt-2">
                <strong>price : Rs. {total}</strong>
                </div>
            </div>
        </div>
    );
}