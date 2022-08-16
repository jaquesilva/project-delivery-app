// import { useState, useEffect } from 'react';
import { useContext } from 'react';
import Navbar from '../components/navbar/Navbar';
import Context from '../context/Context';
import './CustomerCheckout.css';
import CustomerForm from './CustomerForm';

export default function CustomerCheckout() {
  const { buyProducts } = useContext(Context);

  const priceTotal = 100;
  const textTest = 'customer_checkout__element-order-table-item-number';

  return (
    <div>
      <Navbar />
      <div>
        <h2>Finalizar Pedido</h2>
        <table>
          <thead className="title">
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </thead>
          <tbody>
            {
              buyProducts.map(({ name, unitPrice, quantity, subTotal }, index) => (
                <tr
                  key={ name }
                  className="list-items"
                  data-testid={ `${textTest}-${index}` }
                >
                  <td
                    data-testid={ `customer_checkout__element-order-table-name-${index}` }
                  >
                    { name }
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-quantity-${index}`
                    }
                  >
                    { quantity }
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-unit-price-${index}`
                    }
                  >
                    { unitPrice }
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-sub-total-${index}`
                    }
                  >
                    { subTotal }
                  </td>
                  <button
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                    type="button"
                    // onClick={}
                  >
                    Remover Item
                  </button>
                </tr>
              ))
            }
          </tbody>
          <div className="total">
            <h1
              data-testid="customer_checkout__element-order-total-price"
            >
              Total: R$
              {priceTotal}
            </h1>
          </div>
        </table>
      </div>
      <CustomerForm />
    </div>
  );
}
