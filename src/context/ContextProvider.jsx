import React, { createContext, useReducer, useEffect } from 'react';
import pizzasData from '../data/pizzas.json';

export const PizzaContext = createContext();

const initialState = {
	cart: [],
	pizzas: [],
};

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			if (!action.payload || typeof action.payload.id === 'undefined') {
				return state;
			}
			const existingIndex = state.cart.findIndex(
				(item) => item.id === action.payload.id,
			);
			if (existingIndex >= 0) {
				const cartCopy = [...state.cart];
				cartCopy[existingIndex] = {
					...cartCopy[existingIndex],
					quantity: cartCopy[existingIndex].quantity + 1,
				};
				return { ...state, cart: cartCopy };
			} else {
				const newItem = { ...action.payload, quantity: 1 };
				return { ...state, cart: [...state.cart, newItem] };
			}
		case 'REMOVE_FROM_CART':
			if (!action.payload || typeof action.payload === 'undefined') {
				return state;
			}
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			};
		case 'UPDATE_QUANTITY':
			if (
				!action.payload ||
				typeof action.payload.id === 'undefined' ||
				typeof action.payload.quantity === 'undefined'
			) {
				return state;
			}
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: action.payload.quantity }
						: item,
				),
			};
		case 'LOAD_PIZZAS':
			return { ...state, pizzas: action.payload };
		default:
			return state;
	}
}

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({ type: 'LOAD_PIZZAS', payload: pizzasData });
	}, []);

	const addToCart = (pizza) => {
		dispatch({ type: 'ADD_TO_CART', payload: pizza });
	};

	const removeFromCart = (pizzaId) => {
		dispatch({ type: 'REMOVE_FROM_CART', payload: pizzaId });
	};

	const updateQuantity = (pizzaId, quantity) => {
		dispatch({ type: 'UPDATE_QUANTITY', payload: { id: pizzaId, quantity } });
	};

	return (
		<PizzaContext.Provider
			value={{ ...state, addToCart, removeFromCart, updateQuantity }}
		>
			{children}
		</PizzaContext.Provider>
	);
};
