import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between'
  };

  const linkStyle = { color: '#fff', margin: '0 10px', textDecoration: 'none' };

  return (
    <div style={headerStyle}>
      <div>Shopex</div>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/products" style={linkStyle}>Products</Link>
        <Link to="/cart" style={linkStyle}>Cart</Link>
         <Link to="/checkout" style={linkStyle}>Checkout</Link>
      </div>
    </div>
  );
}

export default Header;
