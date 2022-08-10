import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <ul>
        <li data-testid="customer_products__element-navbar-link-products">
          PRODUTOS
        </li>
        <li data-testid="customer_products__element-navbar-link-orders">
          MEUS PEDIDOS
        </li>
        <li data-testid="customer_products__element-navbar-user-full-name">
          CICLANO
        </li>
        <li data-testid="customer_products__element-navbar-link-logout">
          <Link to="/">SAIR</Link>
        </li>
      </ul>
    </nav>
  );
}
