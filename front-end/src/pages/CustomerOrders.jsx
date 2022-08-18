import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import getSalesByUserId from '../services/getSalesByUserId';

export default function CustomerOrders() {
  const history = useHistory();
  const [sales, setSales] = useState([]);

  async function getApi() {
    const user = await JSON.parse(localStorage.getItem('user'));
    const salesByUserId = await getSalesByUserId({ userId: user.id });
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
        const data = new Date(saleDate); // formata datas
        // https://blog.betrybe.com/javascript/javascript-date-format/
        const dataFormatada = `${data
          .getDate()}/0${data.getMonth() + 1}/${data.getFullYear()}`;
        console.log(saleDate, dataFormatada);
        return (
          <button
            type="button"
            key={ id }
            onClick={ () => history.push(`/customer/orders/${id}`) }
          >
            <div data-testid={ `customer_orders__element-order-id-${id}` }>
              {id}
            </div>
            <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
              {status}
            </div>
            <div data-testid={ `customer_orders__element-order-date-${id}` }>
              {dataFormatada}
            </div>
            <div data-testid={ `customer_orders__element-card-price-${id}` }>
              {totalPrice.replace('.', ',')}
            </div>
          </button>
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
