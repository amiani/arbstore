import React from 'react';
import ProductList from '../ProductList/productlist';

export default class StorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <p>StorePage!</p>
        <ProductList products='' />
      </div>
    );
  }
}
