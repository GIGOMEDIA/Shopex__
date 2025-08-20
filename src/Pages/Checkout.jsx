import React, { useState } from 'react';

function Checkout() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    card: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    // Normally you'd process payment here
  };

  const summaryItems = [
    { name: 'Laptop', price: 1200 },
    { name: 'Headphones', price: 150 },
  ];

  const total = summaryItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Checkout</h2>

      {/* Order Summary */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ marginBottom: '10px' }}>Order Summary</h3>
        {summaryItems.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginTop: '10px' }}>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Billing Form */}
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <div style={fieldStyle}>
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} style={inputStyle} required />
        </div>
        <div style={fieldStyle}>
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} style={inputStyle} required />
        </div>
        <div style={fieldStyle}>
          <label>Shipping Address</label>
          <textarea name="address" value={form.address} onChange={handleChange} style={inputStyle} required />
        </div>
        <div style={fieldStyle}>
          <label>Card Number</label>
          <input type="text" name="card" value={form.card} onChange={handleChange} style={inputStyle} required />
        </div>
        <button type="submit" style={btnStyle}>Place Order</button>
      </form>
    </div>
  );
}

// Styles
const fieldStyle = {
  marginBottom: '15px',
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const btnStyle = {
  marginTop: '20px',
  padding: '12px 20px',
  backgroundColor: '#28a745',
  color: '#fff',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default Checkout;
