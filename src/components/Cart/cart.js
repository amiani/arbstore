import React from 'react';
import './cart.scss';

const CartItem = props => (
  <div className='cartitem_box'>
    <p className='cartitem_name'>{props.productdata.name}</p>
    <div className='quantity'>
      <p>{props.quantity}</p>
      <button className='increment' onClick={() => props.incrementQuantity(props.productdata._id, 1)}>+</button>
      <button className='decrement' onClick={() => props.incrementQuantity(props.productdata._id, -1)}>-</button>
    </div>
    <p className='cartitem_price'>{props.productdata.price}</p>
    <button onClick={() => props.removeFromCart(props.productdata._id)}>Remove</button>
  </div>
);

const CheckoutButton = props => {
  const confirmOrder = (cartitems) => {
    //make request to server with order
  };

  return <a className='confirmbutton' onClick={() => { confirmOrder(props.cartitems) }}>Confirm Order</a>;
};

const Cart = props => {
  const cartitems = props.cartitems;
  const cartlistitems = [];
  let i = 0;
  for (const cartitemid in cartitems) {
    const cartitem = cartitems[cartitemid];
    cartlistitems.push((
      <li key={i}>
        <CartItem
          productdata={cartitem.productdata}
          quantity={cartitem.quantity}
          removeFromCart={props.removeFromCart}
          incrementQuantity={props.incrementQuantity}
        />
      </li>
    ));
    i++;
  }
  return (
    <div className={props.className}>
      <ul>{cartlistitems}</ul>
      {(() => {
        if (props.showcheckout) {
          return <ConfirmOrderButton cartitems={cartitems} />
        } else if (cartlistitems.length > 0) {
          return <a className='checkoutbutton' onClick={props.toggleCheckout}>Checkout</a>;
        }
      })()}
    </div>
  );
}
export default Cart;
