import React, { useContext } from 'react';
import { PizzaContext } from '../context/ContextProvider.jsx';
import CartItem from '../components/CartItem.jsx';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(PizzaContext);

  const total = cart.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );

  return (
    <div className=' container-cart'>
      <h4>Detalles del pedido:</h4>
      <div>
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}
            <hr />
            <div className='text-carrito'>Total del Carrito: ${total}</div>
          </>
        ) : (
          <p className='text-center'>Tu carrito está vacío</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
