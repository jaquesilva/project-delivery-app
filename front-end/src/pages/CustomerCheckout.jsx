import { useContext } from 'react';
import Navbar from '../components/navbar/Navbar';
import Context from '../context/Context';
import './CustomerCheckout.css';
import CustomerForm from './CustomerForm';

export default function CustomerCheckout() {
  const { buyProducts, setBuyProducts } = useContext(Context);

  let totalPrice = 0;

  function removeProduct(idProduct) {
    const saveCar = buyProducts.filter((element) => element.id !== idProduct);
    setBuyProducts(saveCar);
  }

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
              buyProducts.map(({ id, name, unitPrice, quantity, subTotal }, index) => {
                totalPrice += subTotal;
                return (
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
                      data-testid={
                        `customer_checkout__element-order-table-name-${index}`
                      }
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
                      { unitPrice.toFixed(2).toString().replace('.', ',') }
                    </div>
                    <div
                      data-testid={
                        `customer_checkout__element-order-table-sub-total-${index}`
                      }
                    >
                      { subTotal.toFixed(2).toString().replace('.', ',') }
                    </div>
                    <button
                      data-testid={
                        `customer_checkout__element-order-table-remove-${index}`
                      }
                      type="button"
                      onClick={ () => removeProduct(id) }
                    >
                      Remover Item
                    </button>
                  </div>
                );
              })
            }
          </div>
          <div className="total">
            <h1
              data-testid="customer_checkout__element-order-total-price"
            >
              Total: R$
              {totalPrice.toFixed(2).toString().replace('.', ',')}
            </h1>
          </div>
        </div>
      </div>
      <CustomerForm />
    </div>
  );
}
