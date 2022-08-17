import { useContext, useState } from 'react';
import Context from '../../context/Context';
import './card.css';

export default function Card(product) {
  const { product: newproduct } = product;
  const { id: idProduct, name: title, url_image: image, price } = newproduct;
  const { buyProducts, setBuyProducts } = useContext(Context);
  const [quantity, setQuantity] = useState(0);

  function handleClickLess() {
    const carts = buyProducts.find((item) => item.name === title);
    if (carts) {
      carts.quantity -= 1;
      carts.subTotal = parseFloat(carts.unitPrice) * (quantity - 1);
      setBuyProducts([...buyProducts]);
    }
  }

  function addToCart() {
    const item = buyProducts.find((item1) => item1.name === title);
    if (!item) {
      return (
        setBuyProducts([...buyProducts, {
          id: idProduct,
          name: title,
          unitPrice: parseFloat(price),
          quantity: quantity + 1,
          subTotal: parseFloat(price),
        }])
      );
    }
    item.quantity += 1;
    item.subTotal = parseFloat(item.unitPrice) * (quantity + 1);
    return setBuyProducts([...buyProducts]);
  }

  function handleChange(e) {
    const foco = e.target.value;
    if (foco) {
      setQuantity(foco);

      let item = buyProducts.find((item1) => item1.name === title);
      if (!item) {
        item = {
          name: title,
          unitPrice: parseFloat(price),
          quantity: parseFloat(foco),
          subTotal: parseFloat(price) * parseFloat(foco),
        };
        const newItem = [...buyProducts];
        newItem.push(item);
        setBuyProducts(newItem);
        return;
      }
      if (quantity >= 0) {
        item.subTotal = parseFloat(item.unitPrice) * parseFloat(foco);
      }
      return setBuyProducts([...buyProducts]);
    }
  }

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
        {price.toString().replace('.', ',')}
      </p>
      <button
        name="decrease"
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${idProduct}` }
        onClick={ () => {
          if (quantity > 0) {
            setQuantity(quantity - 1);
            handleClickLess();
          }
        } }
      >
        -
      </button>

      <input
        name="increase"
        value={ quantity }
        data-testid={ `customer_products__input-card-quantity-${idProduct}` }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${idProduct}` }
        onClick={ () => {
          setQuantity(quantity + 1);
          addToCart();
        } }
      >
        +
      </button>
    </div>
  );
}
