import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzaContext } from '../context/ContextProvider';

const PizzaDetail = () => {
  const { pizzaId } = useParams();
  const { pizzas, addToCart } = useContext(PizzaContext);

  if (!pizzaId) return <div>No has seleccionado una pizza</div>;

  const pizza = pizzas.find((p) => p.id === pizzaId);
  if (!pizza) return <div>Pizza no encontrada</div>;

  return (
    <div className='pizza-detail'>
      <img src={pizza.img} alt={pizza.name} />

      <div className='pr-4'>
        <h2>{pizza.name}</h2>
        <hr />
        <p>{pizza.desc}</p>
        <h3>Ingredientes:</h3>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className='price-and-button'>
          <p>
            <strong>Precio:</strong> ${pizza.price}
          </p>
          <button onClick={() => addToCart(pizza)} className='btn'>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetail;
