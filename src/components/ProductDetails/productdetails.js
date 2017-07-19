import React from 'react';
import './productdetails.scss';

const ProductDetails = props => (
  <div className="details_panel">
    <div className="images">
      {props.productdata.images}
    </div>
    <p className="description">{props.productdata.description}</p>
  </div>
);
export default ProductDetails;
