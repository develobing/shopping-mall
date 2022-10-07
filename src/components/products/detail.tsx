import React from 'react';
import { Product } from '../../types';

const detail = ({
  item: {
    category,
    description,
    image,
    price,
    title,
    rating: { rate },
  },
}: {
  item: Product;
}) => {
  return (
    <div className="product-detail">
      <p className="product-detail__category">{category}</p>
      <img className="product-detail__image" src={image} />
      <p className="product-detail__description">{description}</p>
      <span className="product-detail__price">$ {price}</span>
      <span className="product-detail__price">$ {price}</span>
      <br />
      <span className="product-detail__rating">{rate}</span>
    </div>
  );
};

export default detail;
