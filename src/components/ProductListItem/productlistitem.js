import React from 'react';
import './productlistitem.scss';

//image not working, can't load binary data into src tag properly
const ProductListItem = props => (
  <div className='product_box'>
    <img className='product_image' src='/static/watchimg' />
    <div className='product_basic_info'>
      <h2 className="product_name">{props.productdata.name}</h2>
      <h4 className="product_price">{props.productdata.price}</h4>
      <button className='addtocart_button' onClick={props.addToCart(props.productdata.productid)}>
        Add To Cart!
      </button>
    </div>
  </div>
);
export default ProductListItem;
