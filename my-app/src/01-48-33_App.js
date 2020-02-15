import React from 'react';
import Product from './components/01-48-33_Product';
import productData from './01-48-33_productData';

function App() {
  const productComponents = productData.map(
    ({ id, name, price, description }) => (
      <Product key={id} name={name} price={price} description={description} />
    )
  );

  return <div className="container">{productComponents}</div>;
}

export default App;
