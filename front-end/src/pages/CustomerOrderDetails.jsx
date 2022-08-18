import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import getSalesById from '../services/getSalesById';

export default function CustomerOrderDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [sales, setSales] = useState([]);

  useEffect(() => {
    async function getApi() {
      const salesById = await getSalesById(id);
      setSales(salesById);
    }
    getApi();
  }, [id]);

  return (
    <div>
      <Navbar />
      <h1>detalhes do pedido</h1>

      {sales.map(({ status, saleDate, totalPrice }) => {
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

      {sales.length === 0 && <div>carregando Informaçoes!</div>}
    </div>
  );
}
