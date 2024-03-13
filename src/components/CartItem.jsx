import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  if (!item) return null;

  const safeUpdateQuantity = (id, quantity) => {
    if (typeof updateQuantity === 'function') {
      updateQuantity(id, quantity);
    }
  };

  const safeRemoveFromCart = (id) => {
    if (typeof removeFromCart === 'function') {
      removeFromCart(id);
    }
  };

  return (
    <div className='cart-item'>
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <div>
        <button
          className='btn cart-increment'
          onClick={() => safeUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
        <span className='px-4'>{item.quantity}</span>
        <button
          className='btn cart-decrement'
          onClick={() =>
            safeUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
          }
        >
          -
        </button>

        <button className='btn' onClick={() => safeRemoveFromCart(item.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
