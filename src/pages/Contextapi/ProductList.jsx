import React, { useContext } from 'react';
import { ProductsContext } from './ProductContext';

const ProductList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - ${product.price}
          <button className='btn btn-danger mt-1'>Add to Cart</button>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default ProductList;