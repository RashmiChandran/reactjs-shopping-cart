import React from 'react'
import "./Product.css";
const Product = ({productItem,addToCart, removeFromCart}) => {
    return (
        <div>
            <img src={productItem.smallImage}/>
            <p>{productItem.productName}</p>
            <p>{productItem.productPrice}</p>
            {productItem.isAddedtoCart ? 
            <button onClick={()=>removeFromCart(productItem)} className="btn btn-red">Remove from Cart</button>:
            <button onClick={()=>addToCart(productItem)} className="btn btn-green">Add to Cart</button>}
            
        </div>
    )
}

export default Product
