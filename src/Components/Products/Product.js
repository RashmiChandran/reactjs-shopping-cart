import React,{useEffect, useState} from "react";
import "./Product.css";
import { FaMinusSquare, FaPlusSquare, FaTrashAlt } from "react-icons/fa";

const Product = ({ product, addToCart, removeFromCart, incrementItem, decrementItem }) => {
    const [productItem, setProductItem] = useState([]);
    useEffect(()=>{
        setProductItem(product)
    },[product])

    
  return (
    <div className="shadow flex flex-col items-center p-3">
      <img src={productItem.smallImage} className="w-64 h-48" />
      <p className="font-medium capitalize">{productItem.productName}</p>
      <p>₹{productItem.productPrice}</p>
      {productItem.isAddedtoCart ? (
        <div className="flex grid-cols-2 gap-2 grid w-4/5">
          <div className="flex items-center">
           <button  onClick={()=> decrementItem(productItem)} disabled={productItem.count <= 1 } className="disabled:opacity-50 disabled:cursor-text focus:outline-none"><FaMinusSquare className="w-5 h-5" /> </button>
            <span className="mx-2">{productItem.count}</span>
            {productItem.count >= 1 ? <button onClick={()=>incrementItem(productItem)} className="focus:outline-none"><FaPlusSquare  className="w-5 h-5"/></button> : null}
          </div>
          <button onClick={() => removeFromCart(productItem)} className="btn btn-red">
            <FaTrashAlt  />
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(productItem)}
          className="btn btn-green"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
