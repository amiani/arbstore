import React from 'react';
import './cart.scss';
import BillingShippingForm from '../BillingShippingForm/billingshippingform'

const CartItem = props => (
  <div className='cartitembox'>
    <p className='cartitemname'>{props.productdata.name}</p>
    <p className='cartitemprice'>{'$' + props.productdata.price + ' x '}</p>
    <div className='quantity'>
      <p>{props.quantity}</p>
      <button className='increment' onClick={() => props.incrementQuantity(props.productdata._id, 1)}>+</button>
      <button className='cartitembutton decrement' onClick={() => props.incrementQuantity(props.productdata._id, -1)}>-</button>
    </div>
    <p className='total'>{props.productdata.price * props.quantity}</p>
    <button onClick={() => props.removeFromCart(props.productdata._id)}>Remove</button>
  </div>
);

/*
const ConfirmOrderButton = props => {
  const confirmOrder = (cartitems) => {
    //make request to server with order
  };

  return <a className='confirmbutton' href='#0' onClick={() => { confirmOrder(props.cartitems) }}>Confirm Order</a>;
};
*/

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartlistitems: [], showbilling: false };
  };

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.cartitems) !== JSON.stringify(this.props.cartitems)) {
      const cartitems = nextProps.cartitems;
      const cartlistitems = [];
      let i = 0;
      for (const cartitemid in cartitems) {
        const cartitem = cartitems[cartitemid];
        cartlistitems.push(
          <li key={i}>
            <CartItem
              productdata={cartitem.productdata}
              quantity={cartitem.quantity}
              removeFromCart={nextProps.removeFromCart}
              incrementQuantity={nextProps.incrementQuantity}
            />
          </li>
        );
        i++;
      }
      this.setState({ cartlistitems });
    }

    if (!nextProps.showcheckout && this.props.showcheckout) {
      this.setState({ showbilling: false });
    }
  }
  
  render() {
    return (
      <div className={this.props.className}>
        <ul className='cartlist'>{this.state.cartlistitems}</ul>
        {(() => {
          if (this.props.showcheckout && !this.state.showbilling) {
          return <a className='showbillingbutton' href='#0' onClick={() => this.setState({ showbilling: true })}>Continue to Billing and Shipping</a>;
          } else if (this.props.showcheckout && this.state.showbilling) {
            return <BillingShippingForm />;
          } else if (this.state.cartlistitems.length > 0) {
            return <a className='checkoutbutton' href='#0' onClick={this.props.toggleCheckout}>Checkout</a>;
          }
        })()}
      </div>
    );
  };
}
export default Cart;
