import { useContext } from 'react';
import Context from '../context/Context';
import Navbar from '../components/navbar/Navbar';
import './CustomerCheckout.css';
import CustomerForm from './CustomerForm';

export default function CustomerCheckout() {
  const { buyProducts } = useContext(Context);
  // const { name, unitPrice, quantity, subTotal } = cart[i];
  // Array provisório:

  const priceTotal = 100;

  return (
    <div>
      <Navbar />
      <div>
        <h2>Finalizar Pedido</h2>
        <div>
          <div className="title">
            <div>Item</div>
            <div>Descrição</div>
            <div>Quantidade</div>
            <div>Valor Unitário</div>
            <div>Sub-total</div>
          </div>
          <div>
            {
              buyProducts.map(({ name, unitPrice, quantity, subTotal }, index) => (
                <div
                  key={ name }
                  className="list-items"

                >
                  <div
                    data-testid={
                      `customer_checkout__element-order-table-item-number-${index}`
                    }

                  >
                    {index + 1}
                  </div>

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
