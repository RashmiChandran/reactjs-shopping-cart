import React, { useContext, useEffect, useState } from "react";
import "./CartList.css";
import { CartContext } from "../../Services/Cart/CartContext";
import CartItem from "./CartItem";
import { MdClose } from "react-icons/md";
import { REMOVE_CART_ITEM } from "../../Services/Cart/action-types";
import { FaCartPlus } from "react-icons/fa";

const CartList = ({ closeCart, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const { cartItem, dispatch } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const calculateTotal = () => {
    let totalAmount = 0;
    let totalCart = 0;
    cartItem.map((item) => {
      totalAmount = totalAmount + item.count * parseFloat(item.productPrice);
      totalCart = totalCart + item.count;
    });
    setTotalPrice(totalAmount);
    setTotalCartItems(totalCart);
  };

  useEffect(() => {
    calculateTotal();
  }, [cartItem]);

  const removeFromCart = (item) => {
    item.isAddedtoCart = false;
    item.count = 0;
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: item,
    });
  };

  const checkout = ()=>{
      alert("Checkout: Subtotal ₹"+totalPrice)
  }
  return (
    <div className={showHideClassName}>
      <div className="absolute right-3 top-6">
        <button onClick={() => closeCart()} className="focus:outline-none">
          <MdClose className="w-5 h-5" />
        </button>
      </div>
      <div className="flex items-center justify-center py-4">
        <FaCartPlus className="w-8 h-8" />{" "}
        <span className="cart-count">{totalCartItems}</span>
        <h1 className="text-lg font-bold ml-2">Cart</h1>
      </div>
      <div className="cart-container">
        {cartItem.length > 0 ? (
          <div>
            {cartItem.map((items) => (
              <CartItem
                cartObj={items}
                key={items.id}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
        ) : (
          <p className="p-10 text-red-500 decoration-clone font-semibold">
            Your cart is empty
          </p>
        )}
      </div>
      <div className="checkout-container">
        <div className="flex place-content-between mb-5">
          <h1>Total</h1>{" "}
          <p className="text-green-700 font-medium items-end text-xl">
            ₹{totalPrice}
          </p>
        </div>
        <button className="checkout-btn btn-green" onClick={()=> checkout()}>Checkout</button>
      </div>
    </div>
  );
};

export default CartList;
