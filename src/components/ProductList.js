// src/components/ProductList.js
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products, onAddToCart }) => (
  <div className="product-list">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
    ))}
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductList;
