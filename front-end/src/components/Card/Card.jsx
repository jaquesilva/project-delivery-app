import { useState, useEffect, useContext } from 'react';
import Context from '../../context/Context';
import './card.css';

export default function Card(product) {
  const { buyProducts, setBuyProducts } = useContext(Context);

  const { product: newproduct } = product;
  const { id: idProduct, name: title, url_image: image, price } = newproduct;

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const updateBuyProducts = () => {
      const filterBuyProducts = buyProducts.filter(
        (p) => p.name !== title && p.quantity !== 0,
      );
      setBuyProducts([
        ...filterBuyProducts,
        {
          name: title,
          unitPrice: price,
          quantity,
          subTotal: parseFloat(price) * quantity,
        },
      ]);
    };
    updateBuyProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  return (
    <div
      className="card-container"
    >
      <h3 data-testid={ `customer_products__element-card-title-${idProduct}` }>
        {title}
      </h3>
      <img
        width={ 200 }
        src={ image }
        alt={ title }
        data-testid={ `customer_products__img-card-bg-image-${idProduct}` }
      />
      <p>product Price </p>
      Valor: R$
      <p data-testid={ `customer_products__element-card-price-${idProduct}` }>
        {console.log(parseFloat(price))}
      </p>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${idProduct}` }
        onClick={ () => setQuantity(quantity - 1) }
      >
        -
      </button>

      <input
        value={ quantity }
        data-testid={ `customer_products__input-card-quantity-${idProduct}` }
        onChange={ ({ target: { value } }) => setQuantity(parseFloat(value)) }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${idProduct}` }
        onClick={ () => setQuantity(quantity + 1) }
      >
        +
      </button>
    </div>
  );
}
