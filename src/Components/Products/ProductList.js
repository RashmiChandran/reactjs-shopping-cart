import React, { useState, useEffect, useContext } from "react";
import Product from "./Product";
import Axios from "axios";
import { random, commerce, datatype } from "faker";
import { CartContext } from "../../Context/CartContext";
import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../../Context/action-types";
const ProductList = () => {
  const apiKey = "563492ad6f917000010000018f3e254bdba740aab8247cce67fb3648";

  const url = "https://api.pexels.com/v1/search?query=toys&per_page=8&page=1";

  const [product, setProduct] = useState([]);

  const {cartItem, dispatch} = useContext(CartContext);
  const fetchProducts = async () => {
    const { data } = await Axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    });

    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: datatype.uuid(),
    }));
    setProduct(allProduct);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = item =>{
    item.isAddedtoCart = true;
    dispatch({
      type: ADD_CART_ITEM,
      payload: item
    })
  }

  const removeFromCart = item =>{
    item.isAddedtoCart = false;
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: item
    })
  }
  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
        {product.map((item) => (
            <Product key={item.id} productItem={item} addToCart={addToCart} removeFromCart={removeFromCart}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
