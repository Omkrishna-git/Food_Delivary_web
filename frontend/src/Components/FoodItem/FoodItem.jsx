import React from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
