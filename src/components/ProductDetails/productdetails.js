import path from 'path';
import React from 'react';
import './productdetails.scss';

const ProductDetails = props => (
  <div className="details_panel">
    <div className="images">
      <img className='image' src={path.join('static/images', props.productdata.leadimagepath)} />
    </div>
    <p className="description">{props.productdata.description}</p>
  </div>
);
export default ProductDetails;
