import React from 'react';

//TODO: make Cart display list of CartItems populated with data, each CartItem needs a remove button to remove it from the cart, also quantity

class CartItem extends React.Component {
  constructor(props) {
    super();
    this.state = { quantity: 1 };
  }
  
  incrementQuantity(increment) {
    this.setState((prevState, props) => {
      let quantity = prevState.quantity + increment;
      quantity = quantity >= 0 ? quantity : 0;
      return { quantity };
    });
  }

  render() {
    return (
      <div className='cartitem_box'>
        <p className='cartitem_name'>{this.props.productdata.name}</p>
        <p className='cartitem_price'>{this.props.productdata.price}</p>
      </div>
    );
  }
}

const Cart = props => (
  <ul className='cart_list'>
    {() => {
      const cartitems = props.cartitems;
      return Object.keys(cartitems).length !== 0 && cartitems.constructor === Object
        ? cartitems.map((productdata, i) => (
            <li key={i}>
              <CartItem productdata={productdata} removeFromCart={props.removeFromCart} />
            </li>
          ))
        : '';
    }}
  </ul>
);
export default Cart;
