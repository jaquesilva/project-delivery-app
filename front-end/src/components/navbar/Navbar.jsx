import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
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
        CICLANO
      </div>
      <div data-testid="customer_products__element-navbar-link-logout">
        <Link to="/">SAIR</Link>
      </div>
    </nav>
  );
}
