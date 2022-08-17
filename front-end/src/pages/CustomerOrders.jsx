import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import getSalesByUserId from '../services/getSalesByUserId';

export default function CustomerOrders() {
  const userId = 3;

  const [sales, setSales] = useState([]);

  async function getApi() {
    const salesByUserId = await getSalesByUserId(userId);
    setSales(salesByUserId);
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Meus pedidos</h1>

      {sales.map(({ id, status, saleDate, totalPrice }) => {
        console.log(saleDate, totalPrice);
        return (
          <div key={ id }>
            <div data-testid={ `customer_orders__element-order-id-${id}` }>
              {id}
            </div>
            <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
              {status}
            </div>
            <div data-testid={ `customer_orders__element-order-date-${id}` }>
              {saleDate}
            </div>
            <div data-testid={ `customer_orders__element-card-price-${id}` }>
              {totalPrice}
            </div>
          </div>
        );
      })}

      {sales.length === 0 && <div>Nenhuma venda por aqui!</div>}
    </div>
  );
}

// deliveryAddress: "Rua de entrega 01"
// deliveryNumber: "111"
// id: 1
// saleDate: "2001-01-22T00:00:00.000Z"
// sellerId: 1
// status: "ENTREGUE"
// totalPrice: 11
// userId: 3
