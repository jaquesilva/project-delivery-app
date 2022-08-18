import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const history = useHistory();
  function getLocalStorageName() {
    const storage = JSON.parse(localStorage.getItem('user'));
    return storage.name;
  }
  function handleClickLogout() {
    localStorage.setItem('user', '');
    return history.push('/login');
  }
  return (
    <nav className="navbar-container">
      <Link
        to="products"
        data-testid="customer_products__element-navbar-link-products"
      >
        PRODUTOS
      </Link>
      <Link
        to="orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </Link>
      <div data-testid="customer_products__element-navbar-user-full-name">
        {localStorage.getItem('user') ? getLocalStorageName() : null}
      </div>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => handleClickLogout() }
      >
        SAIR
      </button>
    </nav>
  );
}
