import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { requestProducts } from '../services/requests';
import Card from '../components/Card/Card';
import './Products.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  // const [load, setLoad] = useState(false);
  useEffect(() => {
    async function reqProducts() {
      const req = await requestProducts('/customer/products');
      console.log(req);
      // if (req) {
      setProducts(req);
      // }
      // setLoad(false);
    }
    reqProducts();
  }, []);

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
        <Link to="/customer/checkout">
          <button
            id="button-cart"
            type="button"
            data-testid="customer_products__button-cart"

          >
            Ver carrinho:
            <p data-testid="customer_products__checkout-bottom-value">2</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
