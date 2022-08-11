import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import { requestProducts } from '../services/requests';
import Card from '../components/Card/Card';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    async function reqProducts() {
      const req = await requestProducts('/customer/products');
      console.log(req);
      if (req) {
        setLoad(false);
        return setProducts(req);
      }
      return setLoad(true);
    }
    reqProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Products here</h1>
      <div>
        {load ? (<div> Carregando produtos</div>)
          : (products.map((item) => (
            <div key={ item.id }>
              {Card(item.id, item.name, item.url_image, item.price)}
            </div>

          )))}
        {console.log(products)}
        {/* {products[0].name} */}

      </div>
    </div>
  );
}
