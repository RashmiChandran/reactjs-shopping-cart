import React, {useContext, useEffect, useState} from 'react'
import "./CartList.css";
import {CartContext} from "../../Context/CartContext";
import CartItem from './CartItem';
import { MdClose } from "react-icons/md";


const CartList = ({closeCart,show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const {cartItem,dispatch} = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    
    const calculateTotal = ()=>{
        let totalAmount = 0;
        cartItem.map(item=>{
            totalAmount = totalAmount + (item.count * parseFloat(item.productPrice));
        })
        setTotalPrice(totalAmount);
    }

    useEffect(()=>{
        calculateTotal();
    },[cartItem]);

    return (
        <div>
            <button onClick={()=> closeCart()} className="absolute"><MdClose/></button>
            <div className={showHideClassName}>
                <h1 className="text-lg font-bold">Cart</h1>
                <div className="flex items-center flex-col">
                    {cartItem.length > 0 ? <div>{cartItem.map((items)=>(
                    <CartItem cartItem={items} key={items.id}/>
                    ))}</div> : <p className="p-10 text-red-500 decoration-clone">Your cart is empty</p>}
                    <div>
                        <h2>Total</h2> <p>{totalPrice}</p>
                        <button className="checkout-btn btn-green">Checkout</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CartList
