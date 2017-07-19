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

  addToCart(productid) {
    console.log(productid, ' added to cart');
  }

  productSelected(productdata) {
    this.setState({ selected: productdata });
  }

  render() {
    return (
      <div className='store_page_grid'>
        <ProductList
          className='product_list'
          productsdata={this.props.productsdata}
          addToCart={this.addToCart}
          productSelected={this.productSelected.bind(this)}
        />
        {
          this.state.selected
          ? <ProductDetails className='product_details' productdata={this.state.selected} />
          : <p>Nothing to show for now</p>
        }
        <Cart className="cart" cartproductsdata={[]} />
      </div>
    );
  }
}
