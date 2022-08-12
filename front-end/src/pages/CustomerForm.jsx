export default function CustomerForm() {
  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form action="" method="">
        <div>
          <h2> P. Vendedora Responsável</h2>
          <select>
            <option
              value="vendedor1"
              data-testid="customer_checkout__select-seller"
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
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}
