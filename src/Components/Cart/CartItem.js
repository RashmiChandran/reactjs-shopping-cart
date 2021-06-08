import React from 'react'
import "./CartItem.css";
const CartItem = ({cartItem}) => {
    return (
        <div className="cart-card">
            <img src={cartItem.smallImage} />
            <p>{cartItem.productName}</p>
            <p>{cartItem.productPrice}</p>
            
        </div>
    )
}

export default CartItem
