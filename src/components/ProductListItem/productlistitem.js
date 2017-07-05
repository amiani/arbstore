import React from 'react';

const ProductListItem = props => (
  <div>
    <img src='#' />
    <div>
      <h4>{props.name}</h4>
      <h5>{props.price}</h5>
      <button onClick={props.addToCart(props.productid)} />
    </div>
  </div>
);
export default ProductListItem;
