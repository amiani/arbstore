import React from 'react';
import classNames from 'classnames';
import ProductList from '../ProductList/productlist';
import ProductDetails from '../ProductDetails/productdetails';
import Cart from '../Cart/cart'
import './storepage.scss';

export default class StorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.productsdata[0],
      cartitems: {}, //dictionary from productids to { productdata, quantity }
      showproductlist: false,
      showcart: false
    };
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ showproductlist: true }); }, 1500);
  }

  addToCart(productdata) {
    if (!this.state.showcart) {
      this.setState({ showcart: true });
    }

    if (!this.state.cartitems[productdata._id]) {
      const newitem = { [productdata._id]: { productdata, quantity: 1 } };
      this.setState((prevState, props) => {
        const prevcartitems = JSON.parse(JSON.stringify(prevState.cartitems));
        return { cartitems: Object.assign(prevcartitems, newitem) };
      });
    }
    else {
      this.incrementQuantity(productdata._id, 1);
    }
  }

  removeFromCart(productid) {
    this.setState((prevState, props) => {
      let cartitems = prevState.cartitems;
      delete cartitems[productid];
      return { cartitems };
    });
  }

  incrementQuantity(productid, increment) {
    this.setState((prevState, props) => {
      const cartitems = JSON.parse(JSON.stringify(prevState.cartitems));
      const cartitem = cartitems[productid];
      cartitem.quantity += increment;
      cartitem.quantity = cartitem.quantity >= 0 ? cartitem.quantity : 0;
      return { cartitems };
    });
  }

  productSelected(productdata) {
    this.setState({ selected: productdata });
  }

  render() {
    return (
      <div className='store_page_grid'>
        <div className={classNames('product_list', { 'hidelist': !this.state.showproductlist })}>
          <ProductList
            productsdata={this.props.productsdata}
            addToCart={this.addToCart.bind(this)}
            productSelected={this.productSelected.bind(this)}
          />
        </div>
        {
          this.state.selected
          ? <ProductDetails productdata={this.state.selected} />
          : <p>Nothing to show for now</p>
        }
        <div className={classNames('cart', { 'hidecart': !this.state.showcart })}>
          <Cart
            cartitems={this.state.cartitems}
            removeFromCart={this.removeFromCart.bind(this)}
            incrementQuantity={this.incrementQuantity.bind(this)}
          />
        </div>
      </div>
    );
  }
}
