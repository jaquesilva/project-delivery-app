import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import Navbar from '../components/navbar/Navbar';
import { requestProducts } from '../services/requests';
import Card from '../components/Card/Card';
import './Products.css';

export default function Products() {
  const { buyProducts } = useContext(Context);
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const [able, setAble] = useState(true);

  useEffect(() => {
    function buttonAble() {
      if (buyProducts.length > 0) {
        setAble(false);
      }
    }
    async function reqProducts() {
      const req = await requestProducts('/customer/products');
      const productsFormated = req.map((item) => ({ ...item, quantity: 0 }));
      setProducts(productsFormated);
    }
    buttonAble();
    reqProducts();
  }, [buyProducts.length]);
  return (
    <div>
      <Navbar />
      <h1>Products here</h1>
      <div>
        {!products.length ? (<div> Carregando produtos</div>)
          : (products.map((item) => (
            <div key={ item.id }>
              <Card product={ item } />
            </div>

          )))}
        <button
          disabled={ able }
          className="button-cart"
          type="button"
          data-testid="customer_products__button-cart"
          onClick={ () => history.push('/customer/checkout') }

        >
          Ver carrinho:
          <p data-testid="customer_products__checkout-bottom-value">
            {buyProducts
              .map((item) => parseFloat(item.subTotal))
              .reduce((prev, curr) => prev + curr, 0).toFixed(2)
              .toString()
              .replace('.', ',')}
          </p>
        </button>
      </div>
    </div>
  );
}
