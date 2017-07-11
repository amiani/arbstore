import React from 'react';
import ProductList from '../ProductList/productlist';
import ProductDetails from '../ProductDetails/productdetails.js';
import Cart from '../Cart/cart.js'
import './storepage.scss';

export default class StorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  render() {
    return (
      <div className='store_page_grid'>
        <ProductList className='product_list' productsdata={this.props.productsdata} />
        <ProductDetails className='product_details' product={this.state.selected} />
        <Cart className="cart" cartproductsdata={[]}/>
      </div>
    );
  }
}
