import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam modi nostrum, quibusdam placeat totam quasi magni assumenda, optio voluptatibus earum deserunt, expedita eius.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div key={index} className="explore-menu-list-item">
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;