import React from 'react';
import './productlist.scss';
import ProductListItem from '../ProductListItem/productlistitem';
import PropTypes from 'prop-types';

const ProductList = props => (
  <ul className='product_list'>
    {props.productsdata.map((productdata, i) => (
      <li key={i}><ProductListItem
        productdata={productdata}
        addToCart={props.addToCart}
        productSelected={props.productSelected}
      /></li>
    ))}
  </ul>
);

ProductList.propTypes = {
  productsdata: PropTypes.array
};
export default ProductList;
