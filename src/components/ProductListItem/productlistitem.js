import React from 'react';

//image not working, can't load binary data into src tag properly
const ProductListItem = props => (
  <div className='product_box'>
    <img src={`data:${props.productdata.image.contentType};base64,${props.productdata.image.data.toString()}`} />
    <div className='product_basic_info'>
      <h4 className="product_name">{props.productdata.name}</h4>
      <h5 className="product_price">{props.productdata.price}</h5>
  {/*<button onClick={props.addToCart(props.productid)} />*/}
    </div>
  </div>
);
export default ProductListItem;
