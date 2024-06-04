// src/components/ProductCard.js
import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p className="price">${product.price.toFixed(2)}</p>
    <button onClick={(e) => { e.preventDefault(); onAddToCart(product); }}>Add to Cart</button>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  
};

export default ProductCard;
