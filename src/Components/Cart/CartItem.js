import React, {useContext} from 'react'
import "./CartItem.css";
import { MdClose } from "react-icons/md";

const CartItem = ({cartObj, removeFromCart}) => {

    
    
    return (
        <div className="cart-card">
            <div><button onClick={()=> removeFromCart(cartObj)}><MdClose/></button></div>
            <img src={cartObj.smallImage} className="w-36 h-30" />
            <div>
                <p>{cartObj.productName}</p>
                <p>Quantity: {cartObj.count}</p>
            </div>
            <p>{cartObj.productPrice}</p>
            
        </div>
    )
}

export default CartItem
