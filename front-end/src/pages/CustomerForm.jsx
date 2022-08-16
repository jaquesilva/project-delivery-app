import { useHistory } from "react-router-dom";

export default function CustomerForm() {
  const history = useHistory();

  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form action="" method="">
        <div>
          <h2> P. Vendedora Responsável</h2>
          <select data-testid="customer_checkout__select-seller">
            <option
              value="vendedor1"
            >
              Vendedor 1
            </option>
          </select>
        </div>
        <div>
          <h2>Endereço</h2>
          <input
            placeholder="Endereço"
            type="text"
            data-testid="customer_checkout__input-address"
          />
        </div>
        <div>
          <h2>Número</h2>
          <input
            placeholder="Número"
            type="number"
            data-testid="customer_checkout__input-addressNumber"
          />
        </div>
      </form>
      <div>
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
          
          onClick={ () => history.push('/customer/orders') }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}
