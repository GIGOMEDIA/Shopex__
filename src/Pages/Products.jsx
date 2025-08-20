import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Laptop', price: 1200, image: 'https://via.placeholder.com/200x150?text=Laptop' },
  { id: 2, name: 'Phone', price: 800, image: 'https://via.placeholder.com/200x150?text=Phone' },
  { id: 3, name: 'Headphones', price: 150, image: 'https://via.placeholder.com/200x150?text=Headphones' },
  { id: 4, name: 'Smartwatch', price: 199, image: 'https://via.placeholder.com/200x150?text=Smartwatch' },
  { id: 5, name: 'Tablet', price: 499, image: 'https://via.placeholder.com/200x150?text=Tablet' },
  { id: 6, name: 'Camera', price: 999, image: 'https://via.placeholder.com/200x150?text=Camera' },
  { id: 7, name: 'Gaming Console', price: 399, image: 'https://via.placeholder.com/200x150?text=Console' },
  { id: 8, name: 'Bluetooth Speaker', price: 89, image: 'https://via.placeholder.com/200x150?text=Speaker' },
  { id: 9, name: 'Monitor', price: 299, image: 'https://via.placeholder.com/200x150?text=Monitor' },
  { id: 10, name: 'Keyboard', price: 49, image: 'https://via.placeholder.com/200x150?text=Keyboard' },
];

function Products() {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '25px', textAlign: 'center' }}>Explore Our Products</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // Force 3 items per row
          gap: '20px',
          justifyItems: 'center',
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;

