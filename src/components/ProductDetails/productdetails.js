import path from 'path';
import React from 'react';
import './productdetails.scss';

const ProductDetails = props => (
  <div className={props.className}>
    <h2 className="title">{props.productdata.name}</h2>
    <div className="images">
      <img className='image' src={path.join('static/images', props.productdata.leadimagepath)} />
    </div>
    <p className="description">{props.productdata.description}</p>
  </div>
);
export default ProductDetails;
