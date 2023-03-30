import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
          <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold">MealDb</a>
    <div className="d-flex own-style" role="search">
     <a href="/home">Home</a>
     <a href="/login">Login</a>
     <a href=".inventory">Inventory</a>
     </div>
  </div>
</nav>
        </div>
    );
};

export default Header;