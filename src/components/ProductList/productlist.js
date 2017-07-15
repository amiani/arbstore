import React from 'react';
import './productlist.scss';
import ProductListItem from '../ProductListItem/productlistitem';
import PropTypes from 'prop-types';

const ProductList = props => (
  <ul className='product_list'>
    {props.productsdata !== 'undefined' && props.productsdata.length > 0
      ? props.productsdata.map((productdata, i) => (
        <li key={i}>
          <ProductListItem
            productdata={productdata}
            addToCart={props.addToCart}
            productSelected={props.productSelected}
          />
        </li>
      ))
      : <p>No products to display</p>}
  </ul>
);

ProductList.propTypes = {
  productsdata: PropTypes.array
};
export default ProductList;
