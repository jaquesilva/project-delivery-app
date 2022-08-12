// import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import './CustomerCheckout.css';
import CustomerForm from './CustomerForm';

export default function CustomerCheckout() {
  // const { name, unitPrice, quantity, subTotal } = cart[i];
  // Array provisório:
  const buyProducts = [
    { name: 'Skol Lata 250ml', quantity: 2, unitPrice: 2.20, subTotal: 4.40 },
    { name: 'Heineken 600ml', quantity: 2, unitPrice: 7.50, subTotal: 16.00 },
    { name: 'Antarctica Pilsen 300ml', quantity: 2, unitPrice: 2.49, subTotal: 4.98 },
    { name: 'Brahma 600ml', quantity: 2, unitPrice: 7.50, subTotal: 15.00 },
  ];

  const priceTotal = 100;

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
                      `customer_checkout__element-order-table-quantity-${index}`
                    }
                  >
                    { quantity }
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
                      `customer_checkout__element-order-table-sub-total-${index}`
                    }
                  >
                    { subTotal }
                  </div>
                  <button
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                    type="button"
                    // onClick={}
                  >
                    Remover Item
                  </button>
                </div>
              ))
            }
          </div>
          <div className="total">
            <h1
              data-testid="customer_checkout__element-order-total-price"
            >
              Total: R$
              {priceTotal}
            </h1>
          </div>
        </div>
      </div>
      <CustomerForm />
    </div>
  );
}
