// import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import './CustomerCheckout.css';

export default function CustomerCheckout() {
  // const { name, unitPrice, quantity, subTotal } = cart[i];
  // Array provisório:
  const buyProducts = [
    { name: 'Skol Lata 250ml', unitPrice: 2.20, quantity: 2, subTotal: 4.40 },
    { name: 'Heineken 600ml', unitPrice: 7.50, quantity: 2, subTotal: 16.00 },
    { name: 'Antarctica Pilsen 300ml', unitPrice: 2.49, quantity: 2, subTotal: 4.98 },
    { name: 'Brahma 600ml', unitPrice: 7.50, quantity: 2, subTotal: 15.00 },
  ];

  return (
    <div>
      <Navbar />
      <div>
        <h2>Finalizar Pedido</h2>
        <div>
          <div className="title">
            <ol>Item</ol>
            <ul>Descrição</ul>
            <ul>Quantidade</ul>
            <ul>Valor Unitário</ul>
            <ul>Sub-total</ul>
          </div>
          <div>
            {
              buyProducts.map(({ name, unitPrice, quantity, subTotal }, index) => (
                <div key={ name } className="list-items">
                  <div
                    data-testid={ `customer_checkout__element-order-table-name-${index}` }
                  >
                    { name }
                  </div>
                  <div
                    data-testid={
                      `customer_checkout__element-order-table-unit-price-${index}`
                    }
                  >
                    { unitPrice }
                  </div>
                  <div
                    data-testid={
                      `customer_checkout__element-order-table-quantity-${index}`
                    }
                  >
                    { quantity }
                  </div>
                  <div
                    data-testid={
                      `customer_checkout__element-order-table-sub-total-${index}`
                    }
                  >
                    { subTotal }
                  </div>
                  <button
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                    type="submit"
                  >
                    Remover Item
                  </button>
                </div>
              ))
            }
          </div>
          <div className="total">
            <h1>Total: R$</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
