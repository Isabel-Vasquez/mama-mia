// Home.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PizzaContext } from '../context/ContextProvider.jsx';
import PostCard from '../components/PostCard.jsx';

const Home = () => {
  const { pizzas, addToCart } = useContext(PizzaContext);
  const navigate = useNavigate();

  const viewMoreDetails = (pizzaId) => {
    navigate(`/pizza/${pizzaId}`);
  };

  return (
    <div className='home'>
      <div className='home-background'>
        <h1>¡Pizzería Mamma Mía!</h1>
        <p>Tenemos las mejores pizzas que podrás encontrar</p>
      </div>
      {pizzas.map((pizza) => (
        <PostCard
          key={pizza.id}
          pizza={pizza}
          onAddToCart={() => addToCart(pizza)}
          onViewMore={() => viewMoreDetails(pizza.id)}
        />
      ))}
    </div>
  );
};

export default Home;
