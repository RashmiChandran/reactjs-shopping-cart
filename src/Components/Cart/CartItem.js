import React from 'react'
import "./CartItem.css";
import { MdClose } from "react-icons/md";

const CartItem = ({cartObj, removeFromCart}) => {
    return (
        <div className="cart-item">
            <img src={cartObj.smallImage} className="w-36 h-30 ml-0" />
            <div>
                <p className="font-medium capitalize">{cartObj.productName}</p>
                <p>Quantity: {cartObj.count}</p>
            </div>
            <p className="text-green-700 font-medium">₹{cartObj.productPrice}</p>
            <div className="absolute top-2 right-2"><button onClick={()=> removeFromCart(cartObj)} className="focus:outline-none"><MdClose/></button></div>
            
        </div>
    )
}

export default CartItem
