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
      <p>{productItem.productName}</p>
      <p>{productItem.productPrice}</p>
      {productItem.isAddedtoCart ? (
        <div className="flex">
         {productItem.count > 1 ? <FaMinusSquare onClick={()=> decrementItem(productItem)} /> : null}
         {productItem.count}
          {productItem.count >= 1 ?<FaPlusSquare onClick={()=>incrementItem(productItem)}/> : null}
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
