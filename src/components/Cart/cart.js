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

const Cart = props => {
  const cartitems = props.cartitems;
  const cartlistitems = [];
  if (cartitems.constructor === Object && Object.keys(cartitems).length !== 0) {
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
    return <ul className='cart_list'>{cartlistitems}</ul>;
  }
  else {
    return <p>Nothing in cart yet</p>;
  }
}
export default Cart;
