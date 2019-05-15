import React from 'react';
import CartItem from '../cart/cart-item';

export default function CartList( {value} ) {
    console.log("value==>>",value)
    const {cart} = value;
    return(
        <div className="container-fluid">
            {cart.map(item => {
                return(<CartItem key={item.id} item={item} value={value} />);
            })}
        </div>
    );
}