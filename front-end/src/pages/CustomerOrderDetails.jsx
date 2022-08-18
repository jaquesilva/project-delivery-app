import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import getSalesById from '../services/getSalesById';

export default function CustomerOrderDetails() {
  const { id } = useParams();
  // const history = useHistory();
  const [sales, setSales] = useState([]);

  useEffect(() => {
    async function getApi() {
      const salesById = await getSalesById(id);
      setSales(salesById);
    }
    getApi();
  }, [id]);

  const dataSeller = 'customer_order_details__element-order-details-label-seller-name';
  const status = 'customer_order_details__element-order-details-label-delivery-status';

  return (
    <div>
      <Navbar />
      <h1>detalhes do pedido</h1>
      <div>
        <div
          data-testid={
            `customer_order_details__element-order-details-label-order-id-${id}`
          }
        >
          {id}
        </div>
        <div
          data-testid={ dataSeller }
        >
          Pessoa Vendedora
        </div>
        <div
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          Data da Venda
        </div>
        <div
          data-testid={ status }
        >
          Status
        </div>

        <div data-testid={ `customer_orders__element-card-price-${id}` }>
          Preço Total
        </div>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          // onClick={ () => history.push(`/customer/orders/${id}`) }
        >
          Marcar como Entregue
        </button>

      </div>
      {sales.map((sale, index) => (
        <div
          key={ index }
          className="list-items"
        >
          <div
            data-testid={
              `customer_order_details__element-order-table-item-number-${index}`
            }
          >
            {index + 1}
          </div>
          <div
            data-testid={
              `customer_order_details__element-order-table-name-${index}`
            }
          >
            Descrição
          </div>
          <div
            data-testid={
              `customer_order_details__element-order-table-quantity-${index}`
            }
          >
            Quantidade
          </div>
          <div
            data-testid={
              `customer_order_details__element-order-table-sub-total-${index}`
            }
          >
            Valor Unitário
          </div>
          <div
            data-testid={
              `customer_order_details__element-order-total-price-${index}`
            }
          >
            Sub-Total
          </div>
        </div>
      ))}
      <div
        data-testid="customer_order_details__element-order-total-price"
      >
        Total R$
        { sales.totalPrice }
      </div>

      {sales.length === 0 && <div>carregando Informaçoes!</div>}
    </div>
  );
}
