import React, { useState, useContext } from "react";
import { ProductContext } from "../../Services/Product/ProductContext";
import {FETCH_PRODUCTS} from "../../Services/Product/action-types";

const SortBy = () => {
  const [sortValue, setSortValue] = useState();
  const {products,productDispatch} = useContext(ProductContext);
  const compare = {
    lowestprice: (a, b) => {
      if (parseInt(a.productPrice) < parseInt(b.productPrice)) return -1;
      if (parseInt(a.productPrice) > parseInt(b.productPrice)) return 1;
      return 0;
    },
    highestprice: (a, b) => {
      if (parseInt(a.productPrice) > parseInt(b.productPrice)) return -1;
      if (parseInt(a.productPrice) < parseInt(b.productPrice)) return 1;
      return 0;
    }
  };

  const handleChange = (event) => {
    products.items.sort(compare[event.target.value]);
    setSortValue(event.target.value);
    productDispatch({
        type: FETCH_PRODUCTS,
        payload: products.items
      });
  };
  return (
    <div>
      <select value={sortValue} onChange={(ev) => handleChange(ev)}>
        <option value="default">Select</option>
        <option value="lowestprice">Lowest to Highest</option>
        <option value="highestprice">Highest to Lowest</option>
      </select>
    </div>
  );
};

export default SortBy;
