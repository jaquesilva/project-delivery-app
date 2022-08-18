import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import getSalesBySellerId from '../services/getSalesBySellerId';

export default function SellersOrders() {
  const history = useHistory();

  function getLocalStorageName() {
    const storage = JSON.parse(localStorage.getItem('user'));
    console.log(storage.name);
    return storage.name;
  }

  const [sales, setSales] = useState([]);

  function handleClickLogout() {
    console.log('click');
    localStorage.setItem('user', '');
    history.push('/login');
  }

  useEffect(() => {
    async function reqSales() {
      const { id } = JSON.parse(localStorage.getItem('user'));
      console.log(id);
      const getSales = await getSalesBySellerId(id);
      setSales(getSales);
    }
    reqSales();
  }, []);

  return (
    <div>

      <nav className="navbar-container">
        <h1>
          PEDIDOS
        </h1>
        <div data-testid="">
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

      <div> CARDS C/ PEDIDOS </div>
      {sales
        .map(({ id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber }) => {
          const data = new Date(saleDate); // formata datas
          // https://blog.betrybe.com/javascript/javascript-date-format/
          const dataFormatada = `${data
            .getDate()}/0${data.getMonth() + 1}/${data.getFullYear()}`;
          return (
            <button
              type="button"
              key={ id }
              onClick={ () => history.push(`/seller/orders/${id}`) }
            >
              <div data-testid={ `seller_orders__element-order-id-${id}` }>
                {id}
              </div>
              <div data-testid={ `seller_orders__element-delivery-status-${id}` }>
                {status}
              </div>
              <div data-testid={ `seller_orders__element-order-date-${id}` }>
                {dataFormatada}
              </div>
              <div data-testid={ `seller_orders__element-card-price-${id}` }>
                {totalPrice.replace('.', ',')}
              </div>
              <div data-testid={ `seller_orders__element-card-address-${id}` }>
                {deliveryAddress}
              </div>
              <div data-testid={ `seller_orders__element-card-address-${id}` }>
                {deliveryNumber}
              </div>
            </button>
          );
        })}
      {sales.length === 0 && <div>Nenhuma venda por aqui!</div>}

    </div>
  );
}
