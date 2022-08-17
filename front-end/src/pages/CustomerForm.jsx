import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import postCheckout from '../services/postCheckout';

export default function CustomerForm(total) {
  const { total: totalPrice } = total;

  const [sellerId, setSellerId] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState();
  const [deliveryNumber, setdeliveryNumber] = useState();

  const { buyProducts, setBuyProducts } = useContext(Context);
  const { setSaleId } = useContext(Context);

  const history = useHistory();

  async function onClickSubmit() {
    const user = await JSON.parse(localStorage.getItem('user'));

    const post = await postCheckout({
      userId: user.id,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      buyProducts,
    });

    if (post.message === 'Created') {
      setDeliveryAddress('');
      setSellerId('');
      setdeliveryNumber('');
      setBuyProducts([]);
      setSaleId(post.addSale.id);
      history.push(`/customer/orders/${post.addSale.id}`);
    }
  }

  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form action="" method="">
        <div>
          <h2> P. Vendedora Responsável</h2>

          <select
            data-testid="customer_checkout__select-seller"
            onChange={ ({ target }) => setSellerId(target.value) }
          >
            <option value="1">Selecione o vendedor</option>
            <option value="1">Vendedor 1</option>
            <option value="2">Vendedor 2</option>
          </select>
        </div>
        <div>
          <h2>Endereço</h2>
          <input
            placeholder="Endereço"
            type="text"
            data-testid="customer_checkout__input-address"
            onChange={ ({ target }) => setDeliveryAddress(target.value) }
          />
        </div>
        <div>
          <h2>Número</h2>
          <input
            placeholder="Número"
            type="number"
            data-testid="customer_checkout__input-addressNumber"
            onChange={ ({ target }) => setdeliveryNumber(target.value) }
          />
        </div>
      </form>
      <div>
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
          onClick={ onClickSubmit }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}
