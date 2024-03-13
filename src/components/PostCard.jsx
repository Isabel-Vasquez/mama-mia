import React from 'react';

const PostCard = ({ pizza, onAddToCart, onViewMore }) => {
  return (
    <div className='container-home'>
      <div className='pizza-card'>
        <img
          src={pizza.img}
          alt={pizza.name}
          style={{ width: '100%', height: '220px' }}
        />
        <h3>{pizza.name}</h3>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p>${pizza.price}</p>
        <div className='container-button'>
          <button
            className='btn añadir-carrito'
            onClick={() => onAddToCart(pizza)}
          >
            Añadir
          </button>
          {onViewMore && (
            <button
              className='btn ver-mas'
              onClick={() => onViewMore(pizza.id)}
            >
              Ver más
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
