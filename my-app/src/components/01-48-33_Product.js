import React from 'react';

function Product({ name, price, description }) {
  return (
    <div className="product">
      <div className="product__name">{name}</div>
      <div className="product__price">
        {price.toLocaleString('en-us', { style: 'currency', currency: 'USD' })}
      </div>
      <div className="product__description">{description}</div>
    </div>
  );
}

export default Product;
