import React from 'react';
import './productlist.scss';
import PropTypes from 'prop-types';
import path from 'path';


const ProductListItem = props => (
  <div className='product_box' onClick={props.productSelected}>
    <img className='product_image' src={path.join('/static/images', props.productdata.leadimagepath)} />
    <div className='product_basic_info'>
      <h2 className="product_name">{props.productdata.name}</h2>
      <h4 className="product_price">{'$' + props.productdata.price.toFixed(2)}</h4>
      <button className='addtocart_button' onClick={() => props.addToCart(props.productdata)}>
        Add To Cart!
      </button>
    </div>
  </div>
);

const ProductList = props => (
  <ul className='product_list'>
    {
      props.productsdata !== 'undefined' && props.productsdata.length > 0
      ? props.productsdata.map((productdata, i) => (
        <li key={i}>
          <ProductListItem
            productdata={productdata}
            addToCart={props.addToCart}
            productSelected={() => { props.productSelected(productdata) }}
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
