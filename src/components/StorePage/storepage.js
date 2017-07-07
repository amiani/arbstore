import React from 'react';
import ProductList from '../ProductList/productlist';

export default class StorePage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      products: this.props.route.products
    };
  }

  render() {
    return (
      <div>
        <p>StorePage!</p>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}
