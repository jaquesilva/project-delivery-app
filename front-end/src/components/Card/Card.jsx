import { useState, useEffect } from 'react';
import './card.css';

export default function Card(product) {
  const { product: newproduct } = product;
  const { id: idProduct, name: title, url_image: image, price } = newproduct;
  const [priceInput, setPriceInput] = useState(0);
  const [priceTotal, setPriceTotal] = useState((price * priceInput));
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setPriceTotal((price * priceInput).toFixed(2));
  }, [price, priceInput]);

  const increaseQuant = () => {
    console.log(price);
    setPriceInput(priceInput + 1);
    if (priceInput === 0) {
      setCart([parseFloat(price)]);
      console.log(cart);
    }
    console.log(priceInput);
    console.log(parseFloat(price));
    setCart([parseFloat(price) * priceInput]);
    console.log(cart);
  };
  const decreaseQuant = () => {
    if (priceInput >= 1) {
      setPriceInput(priceInput - 1);
      // setCart((price * priceInput).toFixed(2));
      localStorage.setItem('carrinho', JSON.stringify(cart));
    }
  };
  return (
    <div
      className="card-container"
      data-testid={ `customer_products__element-card-price-${idProduct}` }
    >
      <h3
        data-testid={ `customer_products__element-card-title-${idProduct}` }
      >
        {title}

      </h3>
      <img
        width={ 200 }
        src={ image }
        alt={ title }
        data-testid={ `customer_products__img-card-bg-image-${idProduct}` }
      />
      <p>product Price</p>
      <p data-testid={ `customer_products__element-card-price-${idProduct}` }>
        Valor: R$
        {priceInput < 2 ? price : priceTotal}
      </p>
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${idProduct}` }
        onClick={ increaseQuant }
      >
        +
      </button>
      <input
        value={ priceInput }
        data-testid={ `customer_products__input-card-quantity-${idProduct}` }
        onChange={ ({ target: { value } }) => setPriceInput(value) }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${idProduct}` }
        onClick={ decreaseQuant }
      >
        -
      </button>
    </div>
  );
}
