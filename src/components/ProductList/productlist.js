import React from 'react';
import ProductDetails from '../ProductDetails/productdetails';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  render() {
    return (
      <div>
        <ul>
        </ul>
        <ProductDetails product={this.state.selected} />
      </div>
    );
  }
}
