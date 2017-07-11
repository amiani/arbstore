import React from 'react';
import './productlist.scss';
import ProductListItem from '../ProductListItem/productlistitem';
import PropTypes from 'prop-types';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.productsdata[0].image.data);
    this.state = {
      selected: null
    };
  }

  render() {
    return (
      <ul className='product_list'>
        {this.props.productsdata.map((productdata, i) => (
          <li key={i}><ProductListItem productdata={productdata} /></li>
        ))}
      </ul>
    );
  }
}

ProductList.propTypes = {
  productsdata: PropTypes.array
};
