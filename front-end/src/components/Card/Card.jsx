import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/Context';
import './card.css';

export default function Card(product) {
  const { buyProducts, setBuyProducts } = useContext(Context);
  const { product: newproduct } = product;
  const { id: idProduct, name: title, url_image: image, price } = newproduct;
  const [priceInput, setPriceInput] = useState(0);
  const [priceTotal, setPriceTotal] = useState((price * priceInput));
  const [products, setProducts] = useState([priceTotal]);

  console.log(buyProducts, setBuyProducts);
  // const buyProducts = [
  //   {name: title, unitPrice: 2.20, quantity: 2, subTotal: 4.40}

  useEffect(() => {
    // if (priceInput > 0) {
    //   localStorage.setItem('carrinho', JSON.stringify(products));
    // }
  }, [price, priceInput, products]);

  const increaseQuant = () => {
    // setBuyProducts([...buyProducts, {
    //   name: title,
    //   unitPrice: price,
    //   quantity: priceInput,
    //   subTotal: parseFloat(price) * priceInput }]);
    setPriceInput(priceInput + 1);
  };
  const decreaseQuant = () => {
    if (priceInput >= 1) {
      setPriceInput(priceInput - 1);
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
        {price}
      </p>
      <p>
        Valor Total:
        { priceTotal}
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
