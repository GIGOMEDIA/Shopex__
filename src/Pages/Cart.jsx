import React, { useState } from 'react';

function Cart() {
  // Sample cart items – normally this would come from global state or context
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Laptop', price: 1200, quantity: 1, image: 'https://via.placeholder.com/80?text=Laptop' },
    { id: 2, name: 'Headphones', price: 150, quantity: 2, image: 'https://via.placeholder.com/80?text=Headphones' },
  ]);

  // Handle quantity updates
  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  // Handle item removal
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #eee',
                padding: '10px 0'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={item.image} alt={item.name} style={{ width: '60px', borderRadius: '8px' }} />
                <div>
                  <h4 style={{ margin: 0 }}>{item.name}</h4>
                  <p style={{ margin: '5px 0', color: '#777' }}>${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => updateQuantity(item.id, -1)} style={btnStyle}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} style={btnStyle}>+</button>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: '0 0 5px' }}>${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeItem(item.id)} style={removeBtnStyle}>Remove</button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <h3>Total: ${subtotal.toFixed(2)}</h3>
            <button style={checkoutBtnStyle}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Styles
const btnStyle = {
  padding: '5px 10px',
  fontSize: '1rem',
  cursor: 'pointer',
};

const removeBtnStyle = {
  padding: '4px 8px',
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '0.8rem',
};

const checkoutBtnStyle = {
  marginTop: '10px',
  padding: '10px 16px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontSize: '1rem',
  cursor: 'pointer',
};

export default Cart;

