import React from 'react';
import './card.css';

export default function Card(idProduct, title, image, price) {
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
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${idProduct}` }
      >
        +
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${idProduct}` }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${idProduct}` }
      >
        -
      </button>
    </div>
  );
}
