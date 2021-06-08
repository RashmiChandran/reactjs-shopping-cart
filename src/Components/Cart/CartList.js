import React, {useContext, useEffect} from 'react'
import "./CartList.css";
import {CartContext} from "../../Context/CartContext";
import CartItem from './CartItem';

const CartList = ({closeCart,show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const {cartItem,dispatch} = useContext(CartContext);

    return (
        <div className={showHideClassName}>
            <div>
                <h1>Cart Items</h1>
                {cartItem.map((items)=>(
                <CartItem cartItem={items} key={items.id}/>
                ))}
                <button onClick={()=> closeCart()}>Close</button>
            </div>
        </div>
    )
}

export default CartList
