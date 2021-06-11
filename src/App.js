import {useReducer, useState, useEffect} from "react";
import { FaCartPlus } from "react-icons/fa";

import './App.css';
import CartList from "./Components/Cart/CartList";
import ProductList from './Components/Products/ProductList';
import {CartContext} from "./Context/CartContext";
import CartReducer from "./Context/reducer";

function App() {
  const [cartItem, dispatch] = useReducer(CartReducer,[]);
  const [cartModal, setCartModal] = useState({show:false});
  const [totalCartItems, setTotalCartItems] = useState(0);

  const openCart = () => {
      setCartModal({show:true});
    };
  
   const closeCarts = () => {
      setCartModal({show:false});
    };
  
    const calculateCartItems = ()=>{
      let totalCart = 0;
      cartItem.map(item=>{
          totalCart = totalCart + item.count;
      })
      setTotalCartItems(totalCart);
    }

    useEffect(()=>{
      calculateCartItems();
  },[cartItem]);

  return (

    <CartContext.Provider value={{cartItem, dispatch}}>
      <header className="p-2 mb-4 border-b-2">
        <h1 className="text-lg font-bold">Toy shop</h1>
        <button className="right-4 top-3 absolute focus:outline-none" onClick={openCart}>
          <FaCartPlus className="w-5 h-5" />
          <span className="cart-badge">{totalCartItems}</span>
        </button>
      </header>
      <ProductList/>
      <CartList closeCart={closeCarts} show={cartModal.show} />
    </CartContext.Provider>
  );
}

export default App;
