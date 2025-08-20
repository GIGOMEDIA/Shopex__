import React from 'react';

function ProductCard({ product }) {
  const cardStyle = {
    border: '1px solid #eee',
    borderRadius: '12px',
    padding: '16px',
    width: '220px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
    backgroundColor: '#fff',
    transition: 'transform 0.2s',
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '12px',
  };

  const titleStyle = {
    fontSize: '1.1rem',
    margin: '0 0 6px',
    color: '#333',
  };

  const priceStyle = {
    color: '#007bff',
    fontWeight: 'bold',
    marginBottom: '10px',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '8px 12px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <div style={cardStyle}>
      <img
        src={product.image || 'https://via.placeholder.com/200x150'}
        alt={product.name}
        style={imageStyle}
      />
      <h3 style={titleStyle}>{product.name}</h3>
      <p style={priceStyle}>${parseFloat(product.price).toFixed(2)}</p>
      <button style={buttonStyle}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
