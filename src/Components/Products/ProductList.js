import React, { useState, useEffect } from "react";
import Product from "./Product";
import Axios from "axios";
import { random, commerce } from "faker";
const ProductList = () => {
  const apiKey = "563492ad6f917000010000018f3e254bdba740aab8247cce67fb3648";

  const url = "https://api.pexels.com/v1/search?query=toys&per_page=6&page=1";

  const [product, setProduct] = useState([]);

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
      id: random.uuid(),
    }));
    console.log(allProduct);
    setProduct(allProduct);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
        {product.map((item) => (
            <Product key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
