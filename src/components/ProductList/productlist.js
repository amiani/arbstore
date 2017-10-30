import React from 'react';
import './productlist.scss';
import PropTypes from 'prop-types';
import path from 'path';


const ProductListItem = props => {
  const handleClick = e => {
    e.stopPropagation();
    props.addToCart(props.productdata);
  };
  return (
    <div className='product_box' onClick={props.productSelected}>
      <img className='product_image' src={path.join('/static/images', props.productdata.leadimagepath)} />
      <div className='product_basic_info'>
        <h3 className="product_name">{props.productdata.name}</h3>
        <h4 className="product_price">{'$' + props.productdata.price.toFixed(2)}</h4>
        <button className='addtocart_button' onClick={handleClick}>
          Add To Cart!
        </button>
      </div>
    </div>
  );
};

const ProductList = props => (
  <ul className={props.className}>
  {
    props.productsdata !== 'undefined' && props.productsdata.length > 0
    ? props.productsdata.map((productdata, i) => (
      <li key={i}>
        <ProductListItem
          productdata={productdata}
          addToCart={props.addToCart}
          productSelected={() => props.productSelected(productdata)}
        />
      </li>
    ))
    : <p>No products to display</p>
  }
  </ul>
);

ProductList.propTypes = {
  productsdata: PropTypes.array
};
export default ProductList;
