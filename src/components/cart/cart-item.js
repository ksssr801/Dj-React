import React from 'react';

export default function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item;
    const {incrementId, decrementId, removeItem} = value;
    return(
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:'5rem',height:'5rem'}} className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product : </span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price : </span>Rs. {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>decrementId(id)}>-</span>
                    </div>
                    {count}
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>incrementId(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <i className="fa fa-trash" style={{cursor: 'pointer',color:'red'}} onClick={()=>removeItem(id)} />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>quantity</p>
            </div>
        </div>
    );
}