import React from 'react';
import ProductList from '../ProductList/productlist';
import ProductDetails from '../ProductDetails/productdetails.js';
import Cart from '../Cart/cart.js'
import './storepage.scss';

export default class StorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      //dictionary from productids to { productdata, quantity }
      cartitems: {}
    };
  }

  addToCart(productdata) {
    const productid = productdata._id;
    if (!this.state.cartitems[productid]) {
      const cartitems = { productid: { productdata, quantity: 1 } };
      this.setState((prevState, props) => {
        return { cartitems: Object.assign(cartitems, prevState.cartitems) };
      });
    }
    else {
      console.log('Already in cart');
    }
  }

  removeFromCart(productdata) {
    //TODO: write this function
  }

  incrementQuantity() {
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
          addToCart={this.addToCart.bind(this)}
          productSelected={this.productSelected.bind(this)}
        />
        {
          this.state.selected
          ? <ProductDetails className='product_details' productdata={this.state.selected} />
          : <p>Nothing to show for now</p>
        }
        <Cart
          className='cart'
          cartitems={this.state.cartitems}
          removeFromCart={this.removeFromCart.bind(this)}
        />
      </div>
    );
  }
}
