import React, {useContext, useEffect, useState} from 'react'
import "./CartList.css";
import {CartContext} from "../../Context/CartContext";
import CartItem from './CartItem';
import { MdClose } from "react-icons/md";
import {  REMOVE_CART_ITEM } from "../../Context/action-types";


const CartList = ({closeCart,show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const {cartItem,dispatch} = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalCartItems, setTotalCartItems] = useState(0);
    const calculateTotal = ()=>{
        let totalAmount = 0;
        let totalCart = 0;
        cartItem.map(item=>{
            totalAmount = totalAmount + (item.count * parseFloat(item.productPrice));
            totalCart = totalCart + item.count;
        })
        setTotalPrice(totalAmount);
        setTotalCartItems(totalCart);
    }

    useEffect(()=>{
        calculateTotal();
    },[cartItem]);

    const removeFromCart = item =>{
        item.isAddedtoCart = false;
        item.count = 0;
          dispatch({
            type: REMOVE_CART_ITEM,
            payload: item
          })  
        
    }

    return (
            <div className={showHideClassName}>
            <div  className="absolute right-2/4 top-4"><button onClick={()=> closeCart()}><MdClose/></button></div>
                <h1 className="text-lg font-bold">Cart {totalCartItems}</h1>
                <div className="cart-container">
                    {cartItem.length > 0 ? <div>{cartItem.map((items)=>(
                    <CartItem cartObj={items} key={items.id} removeFromCart={removeFromCart}/>
                    ))}</div> : <p className="p-10 text-red-500 decoration-clone">Your cart is empty</p>}
                </div>
                <div className="checkout-container">
                        <h2>Total</h2> <p>{totalPrice}</p>
                        <button className="checkout-btn btn-green">Checkout</button>
                </div>
            </div>
            
    )
}

export default CartList
