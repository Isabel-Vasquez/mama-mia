import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { PizzaContext } from '../context/ContextProvider';

const Nav = () => {
  const { cart } = useContext(PizzaContext);

  const total = cart.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );

  return (
    <nav className='flex gap-4 items-center justify-end'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? 'active font-bold uppercase' : 'font-bold uppercase'
        }
      >
        Home
      </NavLink>

      <NavLink
        to='/cart'
        className={({ isActive }) =>
          isActive ? 'active font-bold uppercase' : 'font-bold uppercase'
        }
      >
        Carrito ${total}
      </NavLink>
    </nav>
  );
};

export default Nav;
