import React from 'react';

function Home() {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$99', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Smart Watch', price: '$149', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Portable Speaker', price: '$79', image: 'https://via.placeholder.com/150' },
  ];

  const carouselImages = [
    'https://via.placeholder.com/800x300?text=Big+Summer+Sale',
    'https://via.placeholder.com/800x300?text=New+Arrivals',
    'https://via.placeholder.com/800x300?text=Best+Deals',
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '40px 20px',
        borderRadius: '10px',
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 10px' }}>Welcome to MyShop</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>Your one-stop shop for everything you need!</p>
      </div>

      {/* Carousel */}
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '10px',
        marginBottom: '40px'
      }}>
        {carouselImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Carousel ${index}`}
            style={{
              flex: '0 0 auto',
              width: '100%',
              maxWidth: '800px',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          />
        ))}
      </div>

      {/* Products */}
      <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Featured Products</h2>
      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '15px',
            width: '200px',
            textAlign: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
          }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ fontSize: '1.1rem', margin: '10px 0 5px' }}>{product.name}</h3>
            <p style={{ color: '#888', fontSize: '1rem' }}>{product.price}</p>
            <button style={{
              marginTop: '10px',
              padding: '8px 12px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
