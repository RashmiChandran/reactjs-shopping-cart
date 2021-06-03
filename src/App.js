import {useReducer} from "react";
import './App.css';
import ProductList from './Components/Products/ProductList';
import {CartContext} from "./Context/CartContext";
import CartReducer from "./Context/reducer";
function App() {
  const [cartItem, dispatch] = useReducer(CartReducer,[])
  return (

    <CartContext.Provider value={{cartItem,dispatch }}>
      <header>
        <h1>Toy shop</h1>
      </header>
      <ProductList/>
    </CartContext.Provider>
  );
}

export default App;
